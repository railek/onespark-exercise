/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

export const StyledCard = styled.div`
  background-color: var(--white);
  border-radius: var(--radius-24);
  border: 1px solid var(--neutral-100);
  padding: var(--space-24) var(--space-32);
  box-shadow: var(--shadow);
  width: 100%;

  @media (min-width: 768px) {
    border-radius: var(--radius-32);
    padding: var(--space-32) var(--space-48);
  }
`;
