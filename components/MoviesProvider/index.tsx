import React, { useState, useEffect } from 'react';

import moviesCtx from '../../store/moviesCtx';
import {
  MultiSearchResponse,
  MoviesResults,
  TvResults
} from '../../types/tmdb';
import { Movie } from '../../types/moviesmasters';

const api_key = process.env.NEXT_PUBLIC_API_KEY!;

const parseResults = ({
  results
}: Pick<MultiSearchResponse, 'results'>): Movie[] =>
  results
    .filter(
      result =>
        (result.media_type === 'movie' || result.media_type === 'tv') &&
        result.poster_path
    )
    .map(result => ({
      id: result.id,
      poster: result.poster_path,
      title: (result as MoviesResults).title || (result as TvResults).name,
      media_type: result.media_type
    }));

const MoviesProvider: React.FC = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedMovies, setSearchedMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!searchQuery.trim()) return setSearchedMovies([]);
    setLoading(true);
    setSearchedMovies([]);

    const search = async () => {
      const movies: Movie[] = [];

      for (let i = 1; i <= 5; i++) {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/multi?query=${searchQuery.trim()}&page=${i}&api_key=${api_key}`
        );
        const { results } = (await response.json()) as MultiSearchResponse;

        const parsedResults = parseResults({ results });

        movies.push(
          ...parsedResults.filter(
            result => movies.findIndex(movie => movie.id === result.id) === -1
          )
        );
      }

      setSearchedMovies(movies);
      setLoading(false);
    };

    const searchTimeout = setTimeout(search, 800);

    return () => clearTimeout(searchTimeout);
  }, [searchQuery]);

  return (
    <moviesCtx.Provider
      value={{
        searchQuery,
        setSearchQuery,
        searchedMovies,
        loading
      }}
    >
      {children}
    </moviesCtx.Provider>
  );
};

export default MoviesProvider;
