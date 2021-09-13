import React from 'react';

import { Movie } from '../types/homepage';

type MoviesCtx = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  searchedMovies: Movie[];
  loading: boolean;
};

const moviesCtx = React.createContext<MoviesCtx>({} as MoviesCtx);

export default moviesCtx;
