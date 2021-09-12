import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import arrowIcon from '../../../public/images/arrow-icon.svg';
import { MoviesRowList, MoviesRowSlider, MoviesRowWrapper } from './styles';

type MoviesRowProps = {
  title: string;
  movies: { name: string; img: StaticImageData }[];
};

const MoviesRow: React.FC<MoviesRowProps> = ({ title, movies }) => {
  const router = useRouter();
  const [slider, setSlider] = useState(0);

  const handleSlider = (direction: string) => {
    const wInnerW = window.innerWidth / 10;
    const innerW = wInnerW > 150 ? 150 : 0.9 * wInnerW;
    switch (direction) {
      case 'right':
        const movieImgSize =
          wInnerW < 57.6
            ? 13
            : wInnerW < 76.8
            ? 15
            : wInnerW < 99.2
            ? 18
            : 22.15;
        setSlider(curr => {
          const newValue = curr - Math.round(innerW / 2);
          const listWidth = movieImgSize * movies.length;

          return innerW - listWidth > newValue ? innerW - listWidth : newValue;
        });
        break;
      case 'left':
        setSlider(curr => {
          const newValue = curr + Math.round(innerW / 2);
          return newValue > 0 ? 0 : newValue;
        });
    }
  };

  return (
    <MoviesRowWrapper>
      <h2>{title}</h2>
      <MoviesRowSlider>
        <button
          className="sliderControls left"
          onClick={handleSlider.bind(null, 'left')}
        >
          <Image src={arrowIcon} alt="slide left" />
        </button>
        <MoviesRowList qtdMovies={movies.length} slider={slider}>
          {movies.map((movie, index) => (
            <li
              key={title + movie.name + index}
              onClick={() => router.push(movie.name)}
              aria-label={`Click to see details about ${movie.name}`}
            >
              <Image src={movie.img} alt={`${movie.name} cover`} />
            </li>
          ))}
        </MoviesRowList>
        <button
          className="sliderControls right"
          onClick={handleSlider.bind(null, 'right')}
        >
          <Image src={arrowIcon} alt="slide right" />
        </button>
      </MoviesRowSlider>
    </MoviesRowWrapper>
  );
};

export default MoviesRow;
