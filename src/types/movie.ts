export interface Movie {
  id: number;
  title?: string; // 영화
  name?: string; // TV 시리즈
  poster_path: string; // 세로 이미지
  backdrop_path: string; // 가로 이미지
  overview: string; // Previews 텍스트
}

export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface MovieDetail extends Movie {
  release_date?: string; // 영화 개봉일
  first_air_date?: string; // TV 첫 방영일
  runtime?: number; // 영화 상영 시간 (분 단위)
  number_of_episodes?: number; // TV 총 에피소드 수
  number_of_seasons?: number; // TV 총 시즌 수
}
