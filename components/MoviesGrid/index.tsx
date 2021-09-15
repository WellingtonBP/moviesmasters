import React from 'react';
import { useRouter } from 'next/router';

import { MoviesGridWrapper } from './styles';
import { Movie } from '../../types/moviesmasters';

type MoviesGridProps = {
  movies: Movie[];
};

const MoviesGrid: React.FC<MoviesGridProps> = ({ movies }) => {
  const router = useRouter();
  return (
    <MoviesGridWrapper>
      {movies.map(movie => (
        <article
          onClick={() => router.push(`/${movie.media_type}/${movie.id}`)}
          key={movie.id}
          aria-label={`click to see details about ${movie.title}`}
        >
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster}`}
            alt={`${movie.title} poster`}
          />
        </article>
      ))}
    </MoviesGridWrapper>
  );
};

export default MoviesGrid;
