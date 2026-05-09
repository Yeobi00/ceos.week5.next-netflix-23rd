'use client';

import Link from 'next/link';
import Image from 'next/image';
import PlayCircleIcon from '@/assets/icons/ic-play-circle.svg';
import { Movie } from '@/types/movie';

interface SearchItemProps {
  movie: Movie;
}

export default function SearchItem({ movie }: SearchItemProps) {
  const imagePath = movie.backdrop_path || movie.poster_path;
  const title = movie.title || movie.name || '';

  return (
    <Link
      href={`/movie/${movie.id}?type=${movie.name ? 'tv' : 'movie'}`}
      className="bg-grey-800 flex h-19 w-full items-center active:opacity-80"
    >
      <div className="relative h-19 w-[146px] shrink-0">
        {imagePath ? (
          <Image
            src={`https://image.tmdb.org/t/p/w300${imagePath}`}
            alt={title}
            fill
            sizes="146px"
            className="rounded-sm object-cover"
          />
        ) : (
          <div className="bg-grey-800 h-full w-full rounded-sm" />
        )}
      </div>
      <span className="text-body2 flex-1 truncate px-4 text-white">{title}</span>
      <button className="shrink-0 pr-3">
        <PlayCircleIcon className="h-7 w-7" />
      </button>
    </Link>
  );
}
