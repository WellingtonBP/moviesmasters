import styled from 'styled-components';

const TvSeasonsWrapper = styled.section`
  @media (min-width: 576px) {
    margin-top: 1.5rem;
  }
  @media (min-width: 768px) {
    margin-top: 2rem;
  }
  @media (min-width: 992px) {
    margin-top: 2.5rem;
  }
`;

const Season = styled.article`
  & + & {
    margin-top: 4rem;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  img {
    width: 100%;
    max-width: 25rem;
  }
  @media (min-width: 576px) {
    flex-direction: row;
    gap: 1.5rem;
    img {
      width: 17rem;
    }
  }
  @media (min-width: 768px) {
    gap: 2.5rem;
    img {
      width: 20rem;
    }
  }
  @media (min-width: 992px) {
    gap: 3.5rem;
    img {
      width: 22rem;
    }
  }
`;

const SeasonDetails = styled.div`
  color: white;
  font-family: 'Roboto Condensed', sans-serif;
  text-align: center;
  h3 {
    font-size: 2rem;
    span {
      margin-left: 1.5rem;
    }
  }
  p {
    font-size: 1.6rem;
    margin-top: 1rem;
  }

  @media (min-width: 576px) {
    text-align: initial;
    h3 {
      font-size: 2.2rem;
    }
    p {
      font-size: 1.8rem;
      margin-top: 1.5rem;
    }
  }
  @media (min-width: 768px) {
    h3 {
      font-size: 2.5rem;
    }
    p {
      font-size: 2rem;
      margin-top: 2rem;
    }
  }
`;

export { TvSeasonsWrapper, Season, SeasonDetails };
