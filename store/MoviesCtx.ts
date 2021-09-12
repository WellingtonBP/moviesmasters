import { createContext } from 'react';

type MoviesCtx = {};

const moviesCtx = createContext<MoviesCtx>({});

export default moviesCtx;
