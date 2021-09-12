import styled from 'styled-components';

import Container from '../../Container';

const RandomHighlightedWrapper = styled.section<{ bgImage: StaticImageData }>`
  padding: 8rem 0 1.5rem;
  position: relative;
  z-index: 2;
  &::after {
    content: '';
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.6;
    background-image: ${props => `url(${props.bgImage.src})`};
    background-size: cover;
  }

  @media (min-width: 768px) {
    padding: 10rem 0 2rem;
  }

  @media (min-width: 992px) {
    padding: 13rem 0 2.5rem;
  }
`;

const RandomHighlightedContainer = styled(Container)`
  color: white;
  h1 {
    font-family: 'Salsa', cursive;
    font-weight: normal;
    font-size: 2.8rem;
    margin-bottom: 2rem;
  }
  p {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1.8rem;
    margin-bottom: 4rem;
    max-width: 100rem;
    line-height: 2.5rem;
  }
  @media (min-width: 768px) {
    h1 {
      font-size: 3.5rem;
    }
    p {
      font-size: 2.3rem;
      line-height: 3rem;
      letter-spacing: 0.1rem;
    }
  }
  @media (min-width: 992px) {
    h1 {
      font-size: 4rem;
    }
    p {
      font-size: 2.5rem;
      line-height: 3.5rem;
    }
  }
`;

const RandomHighlightedFooter = styled.footer`
  font-family: 'Roboto Condensed', sans-serif;
  &,
  div {
    display: flex;
    align-items: center;
  }
  gap: 3rem;
  div {
    gap: 0.5rem;
    img {
      width: 3rem;
    }
    span {
      font-size: 2rem;
    }
  }
  a {
    color: black;
    padding: 0.5rem 2rem;
    border-radius: 0.5rem;
    background-color: white;
    font-size: 1.8rem;
    transition: filter 100ms ease-in;
    &:hover {
      filter: brightness(0.8);
    }
  }
  @media (min-width: 768px) {
    gap: 8rem;
    div {
      gap: 1rem;
      img {
        width: 3.5rem;
      }
      span {
        font-size: 2.3rem;
      }
    }
    a {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    gap: 10rem;
    div {
      gap: 1.5rem;
    }
    a {
      padding: 0.8rem 3rem;
    }
  }
`;

export {
  RandomHighlightedContainer,
  RandomHighlightedWrapper,
  RandomHighlightedFooter
};
