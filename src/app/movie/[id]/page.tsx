import Image from 'next/image';
import { Metadata } from 'next';
import { movieServiceServer } from '@/api/movieServiceServer';
import PlayIcon from '@/assets/icons/ic-play.svg';

//SEO 설정 함수
export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ type?: 'movie' | 'tv' }>;
}): Promise<Metadata> {
  const { id } = await params;
  const { type = 'movie' } = await searchParams;

  const movie = await movieServiceServer.getMovieDetails(id, type);

  if (!movie) return { title: '영화 정보 없음' };

  const title = movie.title || movie.name;

  return {
    title: title, // layout.tsx의 template 덕분에 "영화제목 | Nextflix"로 나옵니다.
    description: movie.overview,
    openGraph: {
      title: title,
      description: movie.overview,
      images: [`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`], // 영화 포스터를 OG 이미지로!
    },
  };
}

// 시간 변환 유틸리티 (nn분 -> n시간 n분)
const formatRuntime = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return hours > 0 ? `${hours}시간 ${mins}분` : `${mins}분`;
};

export default async function MovieDetailPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: Promise<{ type?: 'movie' | 'tv' }>;
}) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const id = resolvedParams.id;
  const type = resolvedSearchParams.type || 'movie';
  const movie = await movieServiceServer.getMovieDetails(id, type);

  if (!movie)
    return (
      <div className="flex h-screen items-center justify-center bg-black text-white">
        영화를 찾을 수 없습니다.
      </div>
    );

  const releaseYear = (movie.release_date || movie.first_air_date || '').split('-')[0];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* 배경 포스터 영역 */}
      <section className="relative h-[415px] w-full">
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path || movie.poster_path}`}
          alt={movie.title || movie.name || 'Poster'}
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
      </section>

      {/* 상세 정보 섹션 */}
      <section className="space-y-4 px-4 py-6">
        <h1 className="text-3xl font-bold">{movie.title || movie.name}</h1>

        {/* 연도 및 시간/에피소드 정보 */}
        <div className="text-grey-400 flex items-center gap-3 text-sm font-semibold">
          <span>{releaseYear}</span>
          <span>
            {movie.runtime
              ? // Case 1: 영화인 경우 (런타임 표시)
                formatRuntime(movie.runtime)
              : (movie.number_of_seasons ?? 0) > 1
                ? // Case 2: TV쇼인데 시즌이 여러 개인 경우
                  `시즌 ${movie.number_of_seasons}개`
                : // Case 3: TV쇼인데 시즌이 하나인 경우 (에피소드 개수 표시)
                  `에피소드 ${movie.number_of_episodes ?? 0}개`}
          </span>
        </div>

        {/* 재생 버튼 */}
        <button className="flex w-full items-center justify-center gap-2 rounded-sm bg-white py-3 font-bold text-black transition-transform active:scale-95">
          <PlayIcon className="h-5 w-5 fill-black" />
          재생
        </button>

        {/* Previews (줄거리) 영역 */}
        <div className="pt-4">
          <h2 className="mb-2 text-xl font-bold">Previews</h2>
          <p className="text-grey-300 text-sm leading-relaxed">
            {movie.overview || '등록된 줄거리가 없습니다.'}
          </p>
        </div>
      </section>
    </main>
  );
}
