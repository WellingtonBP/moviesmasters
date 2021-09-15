import styled from 'styled-components';

const MoviesGridWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  img {
    display: block;
    width: 100%;
    max-width: 25rem;
    max-height: 35rem;
    object-fit: cover;
    cursor: pointer;
    color: white;
    font-family: 'Salsa', sans-serif;
    font-size: 1.5rem;
  }

  @media (min-width: 576px) {
    grid-template-columns: repeat(3, 1fr);
    margin-top: 5rem;
    img {
      transition: transform 150ms ease-in;
      &:hover {
        transform: scale(1.08);
      }
    }
  }
  @media (min-width: 768px) {
    gap: 2.5rem;
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 992px) {
    gap: 3rem;
    grid-template-columns: repeat(6, 1fr);
  }
`;

export { MoviesGridWrapper };
