import styled from 'styled-components';

const Loader = styled.div`
  margin: 7rem auto 0;
  width: 4rem;
  height: 4rem;
  border: 0.5rem solid white;
  border-top-color: var(--header);
  border-radius: 50%;
  animation: spinner linear 800ms infinite;

  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (min-width: 768px) {
    width: 6rem;
    height: 6rem;
  }
`;
export default Loader;
