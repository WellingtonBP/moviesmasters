import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 0;
  background: var(--header);
  font-family: 'Schoolbell', cursive;
  color: white;
  font-size: 1.5rem;
  a {
    color: white;
  }
  img {
    height: 3rem;
  }

  @media (min-width: 576px) {
    font-size: 1.8rem;
    img {
      height: 3.5rem;
    }
  }
  @media (min-width: 992px) {
    font-size: 2rem;
    img {
      height: 4rem;
    }
  }
`;
export { FooterWrapper };
