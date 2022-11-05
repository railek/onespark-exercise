/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

export const StyledWrapper = styled.div`
  background-color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: var(--space-20);
  padding-bottom: var(--space-20);

  @media (min-width: 768px) {
    padding-top: var(--space-24);
    padding-bottom: var(--space-24);
  }
`;
