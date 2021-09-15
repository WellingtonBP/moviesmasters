import styled from 'styled-components';

import Container from '../Container';

const Main = styled(Container)`
  padding: 2rem 0;
  min-height: 92vh;
  .info {
    font-family: 'Roboto Condensed', sans-serif;
    color: white;
    text-align: center;
    font-size: 2.5rem;
    margin-top: 3rem;
    font-weight: normal;
  }
  h2.info {
    margin-top: 0;
    margin-bottom: 1.5rem;
    text-align: left;
  }
  @media (min-width: 576px) {
    .search {
      display: none;
    }
    padding: 3rem 0;
    .info {
      font-size: 3rem;
    }
    h2.info {
      margin-bottom: 0rem;
    }
  }
  @media (min-width: 768px) {
    padding: 4rem 0;
    .info {
      font-size: 3.5rem;
    }
  }
  @media (min-width: 992px) {
    padding: 5rem 0;
  }
`;

export default Main;
