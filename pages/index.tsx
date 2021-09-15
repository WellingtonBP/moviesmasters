import { useContext } from 'react';
import type { NextPage, GetServerSideProps } from 'next';
import Head from 'next/head';

import moviesCtx from '../store/moviesCtx';
import HighlightedMovie from '../components/HighlightedMovie';
import MoviesGrid from '../components/MoviesGrid';
import Loader from '../components/Loader';
import Main from '../components/Main';
import SearchInput from '../components/SearchInput';
import MoviesRow from '../components/MoviesRow';
import {
  RandomHighlighted,
  HomePageProps,
  Movies
} from '../types/moviesmasters';
import {
  MoviesResponse,
  TvResponse,
  MoviesResults,
  TvResults
} from '../types/tmdb';

const Home: NextPage<HomePageProps> = ({ randomHighlighted, movies }) => {
  const { searchQuery, searchedMovies, loading } = useContext(moviesCtx);

  return (
    <>
      <Head>
        <title>Movies Masters - Home</title>
      </Head>

      {!searchQuery && <HighlightedMovie highlighted={randomHighlighted} />}
      <Main as="main">
        <SearchInput className="search" />
        {!searchQuery &&
          Object.entries(movies).map(([key, value]) => (
            <MoviesRow key={key} movies={value} title={key} />
          ))}
        {searchQuery && searchedMovies && (
          <MoviesGrid movies={searchedMovies} />
        )}
        {searchQuery && loading && <Loader id="sentinel" />}
        {searchQuery && !searchedMovies.length && !loading && (
          <h1 className="info">We can&apos;t find this movie/serie</h1>
        )}
      </Main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<HomePageProps> =
  async () => {
    const endpoints = {
      'Popular Movies': '/movie/popular',
      'Top Rated Movies': '/movie/top_rated',
      'Upcoming Movies': '/movie/upcoming',
      Trending: '/trending/all/week',
      'Popular Series': '/tv/popular',
      'Top Rated Series': '/tv/top_rated',
      'On the air': '/tv/on_the_air'
    };

    const movies: Movies = {};

    let randomHighlighted = {} as RandomHighlighted;

    for (const key in endpoints) {
      const endpoint = endpoints[key as keyof typeof endpoints];
      const response = await fetch(
        `https://api.themoviedb.org/3${endpoint}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      );

      const { results } = (await response.json()) as
        | MoviesResponse
        | TvResponse;
      movies[key] = results.map(result => ({
        id: result.id,
        poster: result.poster_path,
        title: (result as MoviesResults).title || (result as TvResults).name,
        media_type: (result as MoviesResults).title ? 'movie' : 'tv'
      }));

      if (key === 'Top Rated Movies') {
        const { backdrop_path, id, overview, vote_average, title } = results[
          Math.round(Math.random() * (results.length - 1))
        ] as MoviesResults;

        randomHighlighted = {
          id,
          overview,
          title,
          backdrop: backdrop_path,
          rate: vote_average
        };
      }
    }
    return {
      props: {
        movies,
        randomHighlighted
      }
    };
  };

export default Home;
