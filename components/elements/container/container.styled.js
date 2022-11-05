/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

export const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  padding: var(--space-0) var(--space-24);
  width: 100%;

  @media (min-width: 768px) {
    padding: var(--space-0) var(--space-32);
  }

  @media (min-width: 1024px) {
    padding: var(--space-0) var(--space-48);
  }
`;
