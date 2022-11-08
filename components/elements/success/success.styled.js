/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

export const StyledSuccess = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: var(--space-32);

  & > * {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;
