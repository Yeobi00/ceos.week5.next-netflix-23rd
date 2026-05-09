'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Movie } from '@/types/movie';

interface PreviewsProps {
  movies: Movie[];
}

export default function Previews({ movies }: PreviewsProps) {
  return (
    <section className="py-6">
      <h2 className="text-heading1 mb-4 px-4 text-white">Previews</h2>

      {/* 가로 스크롤 컨테이너 */}
      <div className="no-scrollbar flex gap-[7px] overflow-x-auto scroll-smooth px-3">
        {movies.map((movie) => (
          <Link
            key={movie.id}
            href={`/movie/${movie.id}`}
            className="shrink-0 transition-transform focus:outline-none active:scale-95"
          >
            {/* 원형 포스터 디자인 */}
            <div className="relative h-[102px] w-[102px] overflow-hidden rounded-full">
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title || movie.name || ''}
                fill
                sizes="102px"
                className="object-cover"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
