import React from 'react';

import goodFellas from '../../public/images/GoodFellas.jpg';
import hamilton from '../../public/images/Hamilton.jpg';
import onceUponATime from '../../public/images/OnceUponATimeInAmerica.jpg';
import rascalDoesNotDream from '../../public/images/RascalDoesNotDream.jpg';
import theDarkKnight from '../../public/images/TheDarkKnight.jpg';
import theLordOfTheRings from '../../public/images/TheLordOfTheRings.jpg';

import Header from '../Header';
import Footer from '../Footer';
import RandomHighlighted from './RandomHighlighted';
import SearchInput from '../SearchInput';
import MoviesRow from './MoviesRow';
import { Main } from './styles';

const DUMMY_MOVIES = {
  'Top Rated': [
    {
      name: 'Good Fellas',
      img: goodFellas
    },
    {
      name: 'Hamilton',
      img: hamilton
    },
    {
      name: 'Once Upon A Time',
      img: onceUponATime
    },
    {
      name: 'Rascal Does Not Dream',
      img: rascalDoesNotDream
    },
    {
      name: 'The Lord Of The Rings',
      img: theLordOfTheRings
    },
    {
      name: 'The Dark Knight',
      img: theDarkKnight
    },
    {
      name: 'Good Fellas',
      img: goodFellas
    },
    {
      name: 'Hamilton',
      img: hamilton
    },
    {
      name: 'Once Upon A Time',
      img: onceUponATime
    },
    {
      name: 'Good Fellas',
      img: goodFellas
    },
    {
      name: 'Hamilton',
      img: hamilton
    },
    {
      name: 'Once Upon A Time',
      img: onceUponATime
    },
    {
      name: 'Rascal Does Not Dream',
      img: rascalDoesNotDream
    },
    {
      name: 'The Lord Of The Rings',
      img: theLordOfTheRings
    },
    {
      name: 'The Dark Knight',
      img: theDarkKnight
    },
    {
      name: 'Good Fellas',
      img: goodFellas
    },
    {
      name: 'Hamilton',
      img: hamilton
    },
    {
      name: 'Once Upon A Time',
      img: onceUponATime
    }
  ],
  Upcoming: [
    {
      name: 'Good Fellas',
      img: goodFellas
    },
    {
      name: 'Hamilton',
      img: hamilton
    },
    {
      name: 'Once Upon A Time',
      img: onceUponATime
    },
    {
      name: 'Rascal Does Not Dream',
      img: rascalDoesNotDream
    },
    {
      name: 'The Lord Of The Rings',
      img: theLordOfTheRings
    },
    {
      name: 'The Dark Knight',
      img: theDarkKnight
    },
    {
      name: 'Good Fellas',
      img: goodFellas
    },
    {
      name: 'Hamilton',
      img: hamilton
    },
    {
      name: 'Once Upon A Time',
      img: onceUponATime
    }
  ]
};

const Home: React.FC = () => {
  return (
    <>
      <Header withSearch />
      <RandomHighlighted />
      <Main as="main">
        <SearchInput className="search" />
        {Object.entries(DUMMY_MOVIES).map(([key, value]) => (
          <MoviesRow key={key} movies={value} title={key} />
        ))}
      </Main>
      <Footer />
    </>
  );
};

export default Home;
