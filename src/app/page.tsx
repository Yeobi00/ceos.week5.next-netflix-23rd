import Featured from '@/components/main/Featured';
import Previews from '@/components/main/Previews';
import MovieRow from '@/components/main/MovieRow';
import SplashScreen from '@/components/landing/SplashScreen';

export default function Home() {
  return (
    <SplashScreen>
      <div className="flex flex-col">
        <Featured />
        <Previews />
        <MovieRow title="Continue Watching for You" fetchKey="getContinueWatching" variant="tall" />
        <MovieRow title="Popular on Netflix" fetchKey="getPopular" />
        <MovieRow title="Trending Now" fetchKey="getTrending" />
        <MovieRow title="Top 10 in Korea Today" fetchKey="getTopRated" />
        <MovieRow title="My List" fetchKey="getUpcoming" />
        <MovieRow title="Netflix Originals" fetchKey="getNetflixOriginals" variant="large" />
        <MovieRow title="Watch It Again" fetchKey="getActionMovies" />
        <MovieRow title="New Releases" fetchKey="getUpcoming" />
        <MovieRow title="TV Thrillers & Mysteries" fetchKey="getThrillerMovies" />
        <MovieRow title="US TV Shows" fetchKey="getComedyMovies" />
      </div>
    </SplashScreen>
  );
}
