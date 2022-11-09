/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${({ color }) => (color === 'primary' ? 'var(--primary-500)' : 'var(--white)')};
  border: 1px solid var(--primary-500);
  border-radius: var(--radius-999);
  color: ${({ color }) => (color === 'primary' ? 'var(--white)' : 'var(--primary-500)')};
  display: flex;
  align-items: center;
  gap: var(--space-12);
  justify-content: space-between;
  font-size: var(--text-14);
  font-weight: 500;
  padding: var(--space-12) var(--space-20);

  :hover {
    background-color: ${({ color }) =>
      color === 'primary' ? 'var(--primary-600)' : 'var(--primary-500)'};
    border: ${({ color }) =>
      `1px solid ${color === 'primary' ? 'var(--primary-600)' : 'var(--primary-500)'}`};
    color: var(--white);
  }

  @media (min-width: 768px) {
    font-size: var(--text-16);
    padding: var(--space-16) var(--space-32);
  }
`;
