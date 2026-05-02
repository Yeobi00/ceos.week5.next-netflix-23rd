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
