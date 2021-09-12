import React from 'react';

import Header from '../Header';
import Footer from '../Footer';
import RandomHighlighted from './RandomHighlighted';
import SearchInput from '../SearchInput';
import MoviesRow from './MoviesRow';
import { Main } from './styles';
import { HomePageProps } from '../../types/homepage';

const Home: React.FC<HomePageProps> = ({ movies, highlighted }) => {
  return (
    <>
      <Header withSearch />
      <RandomHighlighted highlighted={highlighted} />
      <Main as="main">
        <SearchInput className="search" />
        {Object.entries(movies).map(([key, value]) => (
          <MoviesRow key={key} movies={value} title={key} />
        ))}
      </Main>
      <Footer />
    </>
  );
};

export default Home;
