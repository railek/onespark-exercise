/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-8);
  flex-direction: column;
  padding-top: var(--space-32);
  padding-bottom: var(--space-24);

  @media (min-width: 768px) {
    padding-top: var(--space-64);
    padding-bottom: var(--space-48);
  }

  p {
    max-width: 48ch;
  }

  > * {
    text-align: center;
  }
`;
