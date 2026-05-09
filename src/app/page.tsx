import Featured from '@/components/main/Featured';
import Previews from '@/components/main/Previews';
import MovieRow from '@/components/main/MovieRow';
import SplashScreen from '@/components/landing/SplashScreen';
import { movieServiceServer } from '@/api/movieServiceServer';

export const revalidate = 3600; // 1시간마다 ISR 재생성

export default async function Home() {
  const [
    nowPlaying,
    topKorean,
    continueWatching,
    popular,
    trending,
    topRated,
    upcoming,
    netflixOriginals,
    actionMovies,
    thrillerMovies,
    comedyMovies,
  ] = await Promise.all([
    movieServiceServer.getNowPlaying(),
    movieServiceServer.getTopKorean(),
    movieServiceServer.getContinueWatching(),
    movieServiceServer.getPopular(),
    movieServiceServer.getTrending(),
    movieServiceServer.getTopRated(),
    movieServiceServer.getUpcoming(),
    movieServiceServer.getNetflixOriginals(),
    movieServiceServer.getActionMovies(),
    movieServiceServer.getThrillerMovies(),
    movieServiceServer.getComedyMovies(),
  ]);

  return (
    <SplashScreen>
      <div className="flex flex-col">
        <Featured movies={nowPlaying.slice(0, 10)} />
        <Previews movies={topKorean} />
        <MovieRow title="Continue Watching for You" movies={continueWatching} variant="tall" />
        <MovieRow title="Popular on Netflix" movies={popular} />
        <MovieRow title="Trending Now" movies={trending} />
        <MovieRow title="Top 10 in Korea Today" movies={topRated} />
        <MovieRow title="My List" movies={upcoming} />
        <MovieRow title="Netflix Originals" movies={netflixOriginals} variant="large" />
        <MovieRow title="Watch It Again" movies={actionMovies} />
        <MovieRow title="New Releases" movies={upcoming} />
        <MovieRow title="TV Thrillers & Mysteries" movies={thrillerMovies} />
        <MovieRow title="US TV Shows" movies={comedyMovies} />
      </div>
    </SplashScreen>
  );
}
