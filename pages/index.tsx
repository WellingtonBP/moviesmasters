import type { NextPage, GetServerSideProps } from 'next';
import Head from 'next/head';

import {
  MoviesResponse,
  TvResponse,
  MoviesResults,
  TvResults
} from '../types/tmdb';
import { Highlighted, HomePageProps, Movies } from '../types/homepage';
import Home from '../components/Home';

const HomePage: NextPage<HomePageProps> = props => {
  return (
    <>
      <Head>
        <title>Movies Masters - Home</title>
      </Head>

      <Home {...props} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
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

  let highlighted = {} as Highlighted;

  for (const key in endpoints) {
    const endpoint = endpoints[key as keyof typeof endpoints];
    const response = await fetch(
      `https://api.themoviedb.org/3${endpoint}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    );

    const { results } = (await response.json()) as MoviesResponse | TvResponse;
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

      highlighted = {
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
      highlighted
    }
  };
};

export default HomePage;
