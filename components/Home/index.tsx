import React, { useContext } from 'react';
import { useRouter } from 'next/router';

import moviesCtx from '../../store/moviesCtx';
import Header from '../Header';
import Loader from '../Loader';
import Footer from '../Footer';
import RandomHighlighted from './RandomHighlighted';
import SearchInput from '../SearchInput';
import MoviesRow from './MoviesRow';
import { Main, SearchedMovies } from './styles';
import { HomePageProps } from '../../types/homepage';

const Home: React.FC<HomePageProps> = ({ movies, highlighted }) => {
  const router = useRouter();
  const { searchQuery, searchedMovies, loading } = useContext(moviesCtx);

  return (
    <>
      <Header withSearch />
      {!searchQuery && <RandomHighlighted highlighted={highlighted} />}
      <Main as="main">
        <SearchInput className="search" />
        {!searchQuery &&
          Object.entries(movies).map(([key, value]) => (
            <MoviesRow key={key} movies={value} title={key} />
          ))}
        {searchQuery && searchedMovies && (
          <SearchedMovies>
            {searchedMovies.map(movie => (
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
          </SearchedMovies>
        )}
        {searchQuery && loading && <Loader id="sentinel" />}
        {searchQuery && !searchedMovies.length && !loading && (
          <h1 className="info">We can't find this movie/serie</h1>
        )}
      </Main>
      <Footer />
    </>
  );
};

export default Home;
