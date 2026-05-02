'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { movieService } from '@/api/movieService';
import { Movie } from '@/types/movie';

export default function Previews() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      //한국 인기 콘텐츠 데이터 사용
      const data = await movieService.getTopKorean();
      setMovies(data);
    };
    fetchMovies();
  }, []);

  return (
    <section className="py-6">
      <h2 className="text-heading1 mb-4 px-4 text-white">Previews</h2>

      {/* 가로 스크롤 컨테이너 */}
      <div className="no-scrollbar flex gap-4 overflow-x-auto scroll-smooth px-3">
        {movies.map((movie) => (
          <button
            key={movie.id}
            className="flex-shrink-0 transition-transform focus:outline-none active:scale-95"
            onClick={() => console.log(`${movie.title || movie.name} 클릭됨`)} // 나중에 상세 페이지 연결
            aria-label={movie.title || movie.name}
          >
            {/* 원형 포스터 디자인 */}
            <div className="relative h-[102px] w-[102px] overflow-hidden rounded-full">
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title || movie.name || ''}
                fill
                className="object-cover"
              />
            </div>
          </button>
        ))}
      </div>

      {/* 스크롤바 숨기기 */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
