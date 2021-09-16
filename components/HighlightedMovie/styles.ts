import styled from 'styled-components';

const HighlightedWrapper = styled.section<{ bgImage: string }>`
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
    opacity: 0.55;
    background-image: ${props =>
      `url(https://image.tmdb.org/t/p/original${props.bgImage})`};
    background-size: cover;
  }

  @media (min-width: 768px) {
    padding: 10rem 0 2rem;
  }

  @media (min-width: 992px) {
    padding: 13rem 0 3rem;
  }
`;

const Title = styled.h1`
  color: white;
  font-family: 'Salsa', cursive;
  font-weight: normal;
  font-size: 3rem;
  @media (min-width: 768px) {
    font-size: 4rem;
  }
  @media (min-width: 992px) {
    font-size: 5rem;
  }
`;

const Overview = styled.p`
  color: white;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1.8rem;
  margin-top: 2rem;
  max-width: 110rem;
  line-height: 2.5rem;

  @media (min-width: 768px) {
    font-size: 2.3rem;
    line-height: 3rem;
    margin-top: 2.5rem;
    letter-spacing: 0.1rem;
  }
  @media (min-width: 992px) {
    margin-top: 3rem;
    font-size: 2.8rem;
    line-height: 3.5rem;
  }
`;

const GenresAndTagline = styled.p`
  color: white;
  font-family: 'Schoolbell', cursive;
  margin-top: 0.5rem;
  font-size: 1.5rem;

  @media (min-width: 576px) {
    font-size: 2rem;
  }

  @media (min-width: 992px) {
    font-size: 2.5rem;
  }
`;

const Production = styled(GenresAndTagline)`
  font-family: 'Roboto Condenses', sans-serif;
  margin-top: 3rem;
  span {
    margin-left: 1.5em;
  }
  @media (min-width: 768px) {
    margin-top: 3.5rem;
    span {
      margin-left: 2rem;
    }
  }
  @media (min-width: 992px) {
    margin-top: 4.5rem;
    span {
      margin-left: 2.5rem;
    }
  }
`;

const Button = styled.button`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1.8rem;
  cursor: pointer;
  &,
  a {
    color: black;
  }
  padding: 0.5rem 2rem;
  border-radius: 0.5rem;
  background-color: white;
  transition: filter 100ms ease-in;
  &:hover {
    filter: brightness(0.8);
  }
  @media (min-width: 768px) {
    font-size: 2rem;
  }
  @media (min-width: 992px) {
    padding: 0.8rem 3rem;
  }
`;

const InfoSpan = styled.span`
  color: white;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1.8rem;
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const Rate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  img {
    width: 3rem;
  }
  span {
    font-size: 2rem;
    font-family: 'Roboto Condensed', sans-serif;
  }
  @media (min-width: 768px) {
    gap: 1rem;
    img {
      width: 3.5rem;
    }
  }
  @media (min-width: 992px) {
    gap: 1.5rem;
    span {
      font-size: 2.4rem;
    }
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 3rem;
  @media (min-width: 576px) {
    align-items: center;
    flex-direction: row;
    gap: 2rem;
  }
  @media (min-width: 768px) {
    margin-top: 3.5rem;
    gap: 3rem;
  }
  @media (min-width: 992px) {
    margin-top: 4.5rem;
    gap: 4rem;
  }
`;

const Actions = styled(Info)`
  flex-direction: row;
  margin-top: 1.5rem;
  gap: 0;
  justify-content: space-between;
  @media (min-width: 576px) {
    gap: 2rem;
    justify-content: flex-start;
  }
  @media (min-width: 768px) {
    margin-top: 2rem;
  }
  @media (min-width: 992px) {
    margin-top: 2.5rem;
  }
`;

export {
  Title,
  Overview,
  HighlightedWrapper,
  Info,
  GenresAndTagline,
  Production,
  Button,
  Rate,
  InfoSpan,
  Actions
};
