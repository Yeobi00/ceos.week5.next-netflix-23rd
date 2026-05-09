import { Movie } from '@/types/movie';
import requests from './requests';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

async function tmdbFetch(endpoint: string): Promise<Movie[]> {
  try {
    const separator = endpoint.includes('?') ? '&' : '?';
    const url = `${BASE_URL}${endpoint}${separator}api_key=${API_KEY}`;
    const res = await fetch(url, { signal: AbortSignal.timeout(3000) });
    if (!res.ok) throw new Error(`TMDB API error: ${res.status}`);
    const data = await res.json();
    return data.results ?? [];
  } catch (error) {
    console.error(`TMDB fetch error (${endpoint}):`, error);
    return [];
  }
}

export const movieServiceServer = {
  getNowPlaying: () => tmdbFetch(requests.fetchNowPlaying),
  getTopKorean: () => tmdbFetch(requests.fetchTopKorean),
  getContinueWatching: () => tmdbFetch(requests.fetchContinueWatching),
  getPopular: () => tmdbFetch(requests.fetchPopular),
  getTrending: () => tmdbFetch(requests.fetchTrending),
  getTopRated: () => tmdbFetch(requests.fetchTopRated),
  getUpcoming: () => tmdbFetch(requests.fetchUpcoming),
  getNetflixOriginals: () => tmdbFetch(requests.fetchNetflixOriginals),
  getActionMovies: () => tmdbFetch(requests.fetchActionMovies),
  getComedyMovies: () => tmdbFetch(requests.fetchComedyMovies),
  getThrillerMovies: () => tmdbFetch(requests.fetchThrillerMovies),
};
