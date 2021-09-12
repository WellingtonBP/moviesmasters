import styled from 'styled-components';

import Container from '../Container';

const Main = styled(Container)`
  padding: 3rem 0;
  min-height: 50vh;
  @media (min-width: 576px) {
    .search {
      display: none;
    }
  }
  @media (min-width: 768px) {
    padding: 4rem 0;
  }
  @media (min-width: 992px) {
    padding: 5rem 0;
  }
`;

export { Main };
