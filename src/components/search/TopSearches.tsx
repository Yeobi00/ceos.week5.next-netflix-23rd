'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { movieService } from '@/api/movieService';
import { Movie } from '@/types/movie';
import SearchItem from './SearchItem';
import SearchItemSkeleton from './SearchItemSkeleton';

export default function TopSearches() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchTrending = async () => {
      setIsLoading(true);
      const data = await movieService.getTrendingPaginated(page);
      if (data) {
        setMovies((prev) => {
          if (page === 1) return data.results;
          const existingIds = new Set(prev.map((m) => m.id));
          return [...prev, ...data.results.filter((m) => !existingIds.has(m.id))];
        });
        setTotalPages(data.total_pages);
      }
      setIsLoading(false);
      setIsInitialLoad(false);
    };
    fetchTrending();
  }, [page]);

  const observerCallback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting && !isLoading && page < totalPages) {
        setPage((prev) => prev + 1);
      }
    },
    [isLoading, page, totalPages],
  );

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '200px',
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [observerCallback]);

  if (isInitialLoad) {
    return <SearchItemSkeleton />;
  }

  return (
    <div className="flex flex-col gap-1">
      {movies.map((movie) => (
        <SearchItem key={movie.id} movie={movie} />
      ))}
      <div ref={sentinelRef} />
      {isLoading && <SearchItemSkeleton count={3} />}
    </div>
  );
}
