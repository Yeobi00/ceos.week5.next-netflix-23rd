import Image from 'next/image';
import { Movie } from '@/types/movie';

interface MovieRowProps {
  title: string;
  movies: Movie[];
  variant?: 'default' | 'large' | 'tall';
}

export default function MovieRow({ title, movies, variant = 'default' }: MovieRowProps) {

  const cardSize = {
    default: { width: 103, height: 161 },
    large: { width: 154, height: 251 },
    tall: { width: 103, height: 177 },
  }[variant];

  return (
    <section className="overflow-hidden py-3">
      <h2 className="text-heading2 mb-3 px-4 text-white">{title}</h2>

      <div className="no-scrollbar flex gap-[7px] overflow-x-auto px-3">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="relative shrink-0 overflow-hidden rounded-xs"
            style={{ width: cardSize.width, height: cardSize.height }}
          >
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title || movie.name || ''}
              fill
              sizes={`${cardSize.width}px`}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
