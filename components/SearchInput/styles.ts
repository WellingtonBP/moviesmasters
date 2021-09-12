import styled from 'styled-components';

const SearchWrapper = styled.div`
  border: 1px solid white;
  border-radius: 5rem;
  position: relative;
  padding: 0.4rem 2rem;
  width: 100%;
  margin-bottom: 3rem;
  input {
    width: 100%;
    &,
    &::placeholder {
      font-family: 'Schoolbell', cursive;
      color: white;
      font-size: 1.7rem;
    }
  }
  > div {
    position: absolute !important;
    top: 50%;
    right: 1.5rem;
    transform: translateY(-50%);
    img {
      width: 2.5rem;
    }
  }

  @media (min-width: 576px) {
    width: 26rem;
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    width: 35rem;
    padding: 0.3rem 2rem;
    input,
    input::placeholder {
      font-size: 1.8rem;
    }
  }

  @media (min-width: 992) {
    width: 40rem;
    padding: 0.5rem 2rem;
    input,
    input::placeholder {
      font-size: 2rem;
    }
  }
`;

export { SearchWrapper };
