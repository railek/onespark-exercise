/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

export const StyledSuccess = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: var(--space-32);
  padding: var(--space-32) var(--space-24);

  @media (min-width: 768px) {
    padding: var(--space-48);
  }

  & > * {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;
