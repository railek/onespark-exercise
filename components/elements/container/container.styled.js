/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

export const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 768px;
  padding: var(--space-0) var(--space-16);
  width: 100%;

  @media (min-width: 768px) {
    padding: var(--space-0) var(--space-32);
  }
`;
