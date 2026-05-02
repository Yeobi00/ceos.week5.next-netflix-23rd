'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { movieService } from '@/api/movieService';
import { Movie } from '@/types/movie';

import Top10Icon from '@/assets/icons/ic-top10.svg';
import AddIcon from '@/assets/icons/ic-add.svg';
import PlayIcon from '@/assets/icons/ic-play.svg';
import InfoIcon from '@/assets/icons/ic-info.svg';

export default function Featured() {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchFeatured = async () => {
      const movies = await movieService.getNowPlaying();
      // 첫 번째 영화를 대표작으로 선정
      if (movies.length > 0) setMovie(movies[0]);
    };
    fetchFeatured();
  }, []);

  if (!movie) return <div className="h-[415px] bg-black" />;

  return (
    <section className="relative w-full">
      {/* 배경 포스터 */}
      <div className="relative h-[415px] w-full">
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.title || movie.name || ''}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
        {/* Top 10 배지 영역 (임의로 #1 설정) */}
        <div className="absolute inset-x-0 bottom-6 z-10 flex items-center justify-center gap-1.5">
          <Image src={Top10Icon} alt="TOP 10" width={24} height={24} />
          <span className="text-body2 font-bold tracking-tight text-white">#1 in Korea Today</span>
        </div>
      </div>

      <div className="bg-main-gradient absolute inset-0" />

      {/* 하단 버튼 영역 */}
      <div className="flex flex-col items-center pt-3 pb-6">
        {/* 버튼 그룹 */}
        <div className="flex w-full items-center justify-center gap-11 px-3">
          <button className="flex flex-col items-center gap-1 text-white">
            <Image src={AddIcon} alt="My List" width={24} height={24} />
            <span className="text-caption1">My List</span>
          </button>

          <button className="bg-grey-600 flex h-11 w-27 items-center justify-center gap-3 rounded-sm text-black transition-transform active:scale-95">
            <Image src={PlayIcon} alt="Play" width={14} height={18} className="brightness-0" />
            <span className="text-label1 font-bold">Play</span>
          </button>

          <button className="flex flex-col items-center gap-1 text-white">
            <Image src={InfoIcon} alt="Info" width={24} height={24} />
            <span className="text-caption1">Info</span>
          </button>
        </div>
      </div>
    </section>
  );
}
