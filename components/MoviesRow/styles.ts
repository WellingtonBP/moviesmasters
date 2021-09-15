import styled from 'styled-components';

const MoviesRowWrapper = styled.section`
  & + & {
    margin-top: 2rem;
  }
  h2 {
    font-family: 'Salsa', sans-serif;
    color: white;
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-weight: normal;
  }
  @media (min-width: 576px) {
    & + & {
      margin-top: 2.5rem;
    }
    h2 {
      font-size: 2.7rem;
    }
  }

  @media (min-width: 768px) {
    & + & {
      margin-top: 2.8rem;
    }
    h2 {
      font-size: 3rem;
      margin-bottom: 1.5rem;
    }
  }
  @media (min-width: 992px) {
    & + & {
      margin-top: 3rem;
    }
    h2 {
      font-size: 3.2rem;
    }
  }
`;

const MoviesRowSlider = styled.div`
  overflow: scroll;
  position: relative;
  .sliderControls {
    cursor: pointer;
    display: none;
    position: absolute;
    z-index: 2;
    height: 100%;
    width: 4rem;
    background-color: rgba(42, 41, 44, 0.7);
    padding: 0 1rem;
    &.right {
      right: 0;
      top: 0;
      transform: rotateZ(180deg);
    }
  }

  @media (min-width: 576px) {
    overflow: hidden;
    &:hover {
      .sliderControls {
        display: block;
      }
    }
  }
  @media (min-width: 768px) {
    &:hover {
      .sliderControls {
        width: 4.5rem;
      }
    }
  }
  @media (min-width: 992px) {
    &:hover {
      .sliderControls {
        width: 5rem;
      }
    }
  }
`;

const MoviesRowList = styled.ul<{ qtdMovies: number; slider: number }>`
  width: ${props => `${props.qtdMovies * 13 - 1}rem`};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  transition: margin 250ms ease-in-out;
  margin-left: ${props => `${props.slider}rem`};
  li {
    width: 12rem;
    cursor: pointer;
    img {
      width: 100%;
    }
  }
  @media (min-width: 576px) {
    width: ${props => `${props.qtdMovies * 15}rem`};
    gap: 0;
    li {
      width: 15rem;
      img {
        transition: transform 150ms ease-in;
        transform: scale(0.9);
        &:hover {
          transform: scale(1);
        }
      }
    }
  }
  @media (min-width: 768px) {
    width: ${props => `${props.qtdMovies * 18}rem`};
    li {
      width: 18rem;
    }
  }
  @media (min-width: 992px) {
    width: ${props => `${props.qtdMovies * 22}rem`};
    li {
      width: 22rem;
    }
  }
`;

export { MoviesRowWrapper, MoviesRowList, MoviesRowSlider };
