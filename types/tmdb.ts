export type MoviesResults = {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: string[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
};

export type TvResults = Omit<
  MoviesResults,
  'adult' | 'original_title' | 'title' | 'video' | 'release_date'
> & {
  first_air_date: string;
  origin_country: string[];
  name: string;
  original_name: string;
};

export type MoviesResponse = {
  page: number;
  results: MoviesResults[];
  total_results: number;
  total_pages: number;
};

export type TvResponse = Omit<MoviesResponse, 'results'> & {
  results: TvResults[];
};
