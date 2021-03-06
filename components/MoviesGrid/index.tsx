import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

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
        <article key={movie.id}>
          <Link
            passHref
            href={`/${movie.media_type}/${movie.id}`}
            aria-label={`click to see details about ${movie.title}`}
          >
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster}`}
              alt={`${movie.title} poster`}
            />
          </Link>
        </article>
      ))}
    </MoviesGridWrapper>
  );
};

export default MoviesGrid;
