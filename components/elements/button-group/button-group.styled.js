/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

export const StyledGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: var(--space-24);
  width: 100%;

  @media (min-width: 768px) {
    margin-top: var(--space-32);
  }

  &:has(button:only-of-type.previous) {
    justify-content: flex-start;
  }

  &:has(button:only-of-type.next) {
    justify-content: flex-end;
  }
`;
