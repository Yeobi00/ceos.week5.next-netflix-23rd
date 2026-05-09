'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { movieService } from '@/api/movieService';
import { Movie } from '@/types/movie';
import SearchItem from './SearchItem';
import SearchItemSkeleton from './SearchItemSkeleton';

interface SearchResultsProps {
  query: string;
}

export default function SearchResults({ query }: SearchResultsProps) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [prevQuery, setPrevQuery] = useState(query);

  // query 변경 시 리셋
  if (prevQuery !== query) {
    setPrevQuery(query);
    setMovies([]);
    setPage(1);
    setTotalPages(0);
    setIsInitialLoad(true);
  }

  // 데이터 fetch
  useEffect(() => {
    let stale = false;

    const fetchResults = async () => {
      setIsLoading(true);
      const data = await movieService.searchMulti(query, page);

      if (stale) return;

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

    if (query) fetchResults();

    return () => {
      stale = true;
    };
  }, [query, page]);

  // 무한 스크롤 observer
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

  if (!isLoading && movies.length === 0) {
    return (
      <div className="flex h-40 items-center justify-center">
        <p className="text-body2 text-grey-600">검색 결과가 없습니다.</p>
      </div>
    );
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
