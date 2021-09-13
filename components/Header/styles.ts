import styled from 'styled-components';

import Container from '../Container';

const HeaderWrapper = styled.header<{
  pageScroll: boolean;
}>`
  padding: 1rem 0;
  position: fixed;
  z-index: 3;
  width: 100%;
  transition: background 300ms;
  background: ${({ pageScroll }) =>
    pageScroll ? 'var(--header)' : 'transparent'};
`;

const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .search {
    display: none;
  }
  @media (min-width: 576px) {
    .search {
      display: block;
    }
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 2.5rem;
  }
  a {
    font-family: 'Schoolbell', cursive;
    font-size: 2rem;
    color: white;
  }

  @media (min-width: 576px) {
    img {
      width: 3rem;
    }
    a {
      font-size: 2.3rem;
    }
  }

  @media (min-width: 768px) {
    img {
      width: 3.5rem;
    }
    a {
      font-size: 2.7rem;
    }
  }

  @media (min-width: 992px) {
    gap: 2rem;
    img {
      width: 4rem;
    }
    a {
      font-size: 3rem;
    }
  }
`;

const Nav = styled.nav`
  a {
    display: inline-block;
    font-family: 'Schoolbell', cursive;
    color: white;
    font-size: 1.8rem;
    padding: 0.5rem;
    position: relative;

    &:first-child {
      margin-right: 0.5rem;
    }
  }

  @media (min-width: 576px) {
    a:first-child {
      margin-right: 0;
    }
  }

  @media (min-width: 768px) {
    a {
      &:first-child {
        margin-right: 1rem;
      }
      &::after {
        content: '';
        position: absolute;
        width: 3rem;
        height: 0.1rem;
        background: white;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0;
        transition: opacity 150ms ease-in;
      }
      &:hover::after {
        opacity: 1;
      }
    }
  }

  @media (min-width: 992px) {
    a {
      font-size: 2.3rem;
      &:first-child {
        margin-right: 1.5rem;
      }
    }
  }
`;

export { HeaderWrapper, HeaderContainer, Logo, Nav };
