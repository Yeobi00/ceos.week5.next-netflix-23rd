const requests = {
  fetchNowPlaying: '/movie/now_playing', //메인 최상단 영화
  fetchTopKorean: '/trending/all/day?region=KR', //한국의 오늘 top10
  fetchContinueWatching: '/movie/popular', //시청중인 컨텐츠를 인기컨텐츠로 구성
  fetchPopular: '/movie/popular',
  fetchTrending: '/trending/movie/week',
  fetchTopRated: '/movie/top_rated',
  fetchUpcoming: '/movie/upcoming',
  fetchNetflixOriginals: '/discover/tv?with_networks=213',
  fetchActionMovies: '/discover/movie?with_genres=28',
  fetchComedyMovies: '/discover/movie?with_genres=35',
  fetchHorrorMovies: '/discover/movie?with_genres=27',
  fetchThrillerMovies: '/discover/movie?with_genres=53',
  fetchDocumentaries: '/discover/movie?with_genres=99',
};

export default requests;
