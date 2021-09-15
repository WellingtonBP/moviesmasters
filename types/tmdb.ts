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

export type MultiSearchResponse = Omit<MoviesResponse, 'results'> & {
  results: Array<
    (TvResults | MoviesResults) & {
      media_type: string;
    }
  >;
};

export type Details = {
  backdrop_path: string;
  genres: { id: number; name: string }[];
  homepage: string;
  id: number;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: { iso_3166_1: string; name: string }[];
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  vote_average: number;
  vote_count: number;
  status: string;
  tagline: string;
};

export type MovieDetails = Details & {
  adult: boolean;
  belongs_to_collection: Record<string, any> | null;
  budget: number;
  imdb_id: string;
  original_title: string;
  release_date: string;
  revenue: number;
  runtime: number;
  title: string;
  video: boolean;
  similar: MoviesResponse;
};

export type TvDetails = Details & {
  created_by: {
    id: string;
    credit_id: string;
    name: string;
    profile_path: string | null;
  }[];
  episode_run_time: number[];
  first_air_date: string;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: {
    air_date: string;
    episode_number: number;
    id: number;
    name: string;
    overview: string;
    production_code: string;
    season_number: number;
    still_path: string | null;
    vote_average: number;
    vote_count: number;
  };
  name: string;
  next_episode_to_air: null;
  networks: {
    name: string;
    id: number;
    logo_path: string;
    origin_country: string;
  }[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_name: string;
  seasons: {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    season_number: number;
  }[];
  type: string;
};
