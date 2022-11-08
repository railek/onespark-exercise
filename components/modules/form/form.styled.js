/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

export const StyledForm = styled.div`
  display: flex;
  gap: var(--space-24);
  flex-direction: column;
  margin-top: var(--space-32);

  @media (min-width: 768px) {
    gap: var(--space-32);
    margin-top: var(--space-64);
  }
`;
