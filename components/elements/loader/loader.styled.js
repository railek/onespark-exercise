/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

export const StyledLoader = styled.svg`
  animation: spin 1s linear infinite;
  color: var(--white);
  stroke: currentColor;
  height: var(--space-20);
  width: var(--space-20);

  @media (min-width: 768px) {
    height: var(--space-24);
    width: var(--space-24);
  }
`;
