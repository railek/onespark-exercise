/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

export const StyledRoot = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  > * {
    z-index: 1;
  }

  main {
    flex: 1;
    z-index: 1;
  }
`;
