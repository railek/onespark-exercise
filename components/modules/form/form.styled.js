/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

export const StyledForm = styled.div`
  display: flex;
  gap: var(--space-32);
  flex-direction: column;
  margin-top: var(--space-32);

  @media (min-width: 768px) {
    gap: var(--space-48);
    margin-top: var(--space-64);
  }
`;

export const StyledField = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-16);
`;

export const StyledFieldset = styled.fieldset`
  display: grid;
  gap: var(--space-8);
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
