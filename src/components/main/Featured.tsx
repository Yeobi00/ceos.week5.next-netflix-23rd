'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Movie } from '@/types/movie';

import Top10Icon from '@/assets/icons/ic-top10.svg';
import AddIcon from '@/assets/icons/ic-add.svg';
import PlayIcon from '@/assets/icons/ic-play.svg';
import InfoIcon from '@/assets/icons/ic-info.svg';

interface FeaturedProps {
  movies: Movie[];
}

export default function Featured({ movies }: FeaturedProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  //5초에 한번씩 영화 rotation
  useEffect(() => {
    if (movies.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % movies.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [movies]);

  const currentMovie = movies[currentIndex];

  if (!currentMovie) return <div className="h-[415px] bg-black" />;

  return (
    <section className="relative w-full">
      <Link href={`/movie/${currentMovie.id}`}>
        {/* 배경 포스터 */}
        <div className="relative h-[415px] w-full">
          <Image
            src={`https://image.tmdb.org/t/p/original${currentMovie.poster_path}`}
            alt={currentMovie.title || currentMovie.name || ''}
            fill
            sizes="100vw"
            className="object-cover transition-opacity duration-1000"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
          {/* Top 10 배지 영역 */}
          <div className="absolute inset-x-0 bottom-6 z-10 flex items-center justify-center gap-1.5">
            <Top10Icon className="h-6 w-6" />
            <span className="text-body2 font-bold tracking-tight text-white">
              #{currentIndex + 1} in Korea Today
            </span>
          </div>
        </div>

        <div className="bg-main-gradient absolute inset-0" />

        {/* 하단 버튼 영역 */}
        <div className="flex flex-col items-center pt-3 pb-6">
          {/* 버튼 그룹 */}
          <div className="flex w-full items-center justify-center gap-11 px-3">
            <button className="flex flex-col items-center gap-1 text-white">
              <AddIcon className="h-6 w-6" />
              <span className="text-caption1">My List</span>
            </button>

            <button className="bg-grey-600 flex h-11 w-27 items-center justify-center gap-3 rounded-sm text-black transition-transform active:scale-95">
              <PlayIcon className="h-[18px] w-[14px] text-black" />
              <span className="text-label1 font-bold">Play</span>
            </button>

            <button className="flex flex-col items-center gap-1 text-white">
              <InfoIcon className="h-6 w-6" />
              <span className="text-caption1">Info</span>
            </button>
          </div>
        </div>
      </Link>
    </section>
  );
}
