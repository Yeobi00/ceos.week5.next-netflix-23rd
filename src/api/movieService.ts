import instance from './axios';
import requests from './requests';
import { MovieResponse } from '@/types/movie';

export const movieService = {
  getNowPlaying: async () => {
    try {
      const response = await instance.get(requests.fetchNowPlaying);
      return response.data.results;
    } catch (error) {
      console.error('getNowPlaying 에러:', error);
      return [];
    }
  },

  getTopKorean: async () => {
    try {
      const response = await instance.get(requests.fetchTopKorean);
      return response.data.results;
    } catch (error) {
      console.error('getTopKorean 에러:', error);
      return [];
    }
  },

  getContinueWatching: async () => {
    try {
      const response = await instance.get(requests.fetchContinueWatching);
      return response.data.results;
    } catch (error) {
      console.error('getContinueWatching 에러:', error);
      return [];
    }
  },

  getPopular: async () => {
    try {
      const response = await instance.get(requests.fetchPopular);
      return response.data.results;
    } catch (error) {
      console.error('getPopular 에러:', error);
      return [];
    }
  },

  getTrending: async () => {
    try {
      const response = await instance.get(requests.fetchTrending);
      return response.data.results;
    } catch (error) {
      console.error('getTrending 에러:', error);
      return [];
    }
  },

  getTrendingPaginated: async (page: number = 1): Promise<MovieResponse | null> => {
    try {
      const response = await instance.get(requests.fetchTrending, {
        params: { page },
      });
      return response.data;
    } catch (error) {
      console.error('getTrendingPaginated 에러:', error);
      return null;
    }
  },

  getTopRated: async () => {
    try {
      const response = await instance.get(requests.fetchTopRated);
      return response.data.results;
    } catch (error) {
      console.error('getTopRated 에러:', error);
      return [];
    }
  },

  getUpcoming: async () => {
    try {
      const response = await instance.get(requests.fetchUpcoming);
      return response.data.results;
    } catch (error) {
      console.error('getUpcoming 에러:', error);
      return [];
    }
  },

  getNetflixOriginals: async () => {
    try {
      const response = await instance.get(requests.fetchNetflixOriginals);
      return response.data.results;
    } catch (error) {
      console.error('getNetflixOriginals 에러:', error);
      return [];
    }
  },

  getActionMovies: async () => {
    try {
      const response = await instance.get(requests.fetchActionMovies);
      return response.data.results;
    } catch (error) {
      console.error('getActionMovies 에러:', error);
      return [];
    }
  },

  getComedyMovies: async () => {
    try {
      const response = await instance.get(requests.fetchComedyMovies);
      return response.data.results;
    } catch (error) {
      console.error('getComedyMovies 에러:', error);
      return [];
    }
  },

  getHorrorMovies: async () => {
    try {
      const response = await instance.get(requests.fetchHorrorMovies);
      return response.data.results;
    } catch (error) {
      console.error('getHorrorMovies 에러:', error);
      return [];
    }
  },

  getThrillerMovies: async () => {
    try {
      const response = await instance.get(requests.fetchThrillerMovies);
      return response.data.results;
    } catch (error) {
      console.error('getThrillerMovies 에러:', error);
      return [];
    }
  },

  getDocumentaries: async () => {
    try {
      const response = await instance.get(requests.fetchDocumentaries);
      return response.data.results;
    } catch (error) {
      console.error('getDocumentaries 에러:', error);
      return [];
    }
  },

  searchMulti: async (query: string, page: number = 1): Promise<MovieResponse | null> => {
    try {
      const response = await instance.get(requests.fetchSearchMulti, {
        params: { query, page, include_adult: false },
      });
      return response.data;
    } catch (error) {
      console.error('searchMulti 에러:', error);
      return null;
    }
  },
};
