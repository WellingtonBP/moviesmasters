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

export type HomePageProps = {
  movies: Movies;
  randomHighlighted: RandomHighlighted;
};