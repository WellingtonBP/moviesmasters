import { MovieDetails, TvDetails, Details, MoviesResults } from './tmdb';

export type Movie = {
  title: string;
  poster: string;
  id: number;
  media_type: string;
};

export type Movies = Record<string, Movie[]>;

export type RandomHighlighted = {
  title: string;
  backdrop: string | null;
  overview: string;
  rate: number;
  id: number;
};

export type HighlightedDetails = Pick<
  Details,
  'genres' | 'popularity' | 'vote_count' | 'production_companies' | 'tagline'
> &
  Partial<
    Pick<MovieDetails, 'budget' | 'revenue' | 'release_date'> &
      Pick<TvDetails, 'first_air_date'>
  >;

export type HomePageProps = {
  movies: Movies;
  randomHighlighted: RandomHighlighted;
};

export type DetailsPageProps = {
  media_type: string;
  item: RandomHighlighted &
    HighlightedDetails &
    Partial<
      {
        similar: Movie[];
      } & Pick<TvDetails, 'seasons'>
    >;
};
