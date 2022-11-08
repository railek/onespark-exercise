/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

export const StyledField = styled.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: var(--space-8);
`;

export const StyledInput = styled.input`
  text-align: ${({ inline }) => (inline ? 'center' : 'left')};
  background-color: var(--white);
  padding: ${({ inline }) => (inline ? 'var(--space-0)' : 'var(--space-12) var(--space-12)')};
  border-radius: ${({ inline }) => (inline ? 'none' : 'var(--radius-12)')};
  border-top: ${({ inline }) => `1px solid ${inline ? 'var(--white)' : 'var(--neutral-200)'}`};
  border-right: ${({ inline }) => `1px solid ${inline ? 'var(--white)' : 'var(--neutral-200)'}`};
  border-left: ${({ inline }) => `1px solid ${inline ? 'var(--white)' : 'var(--neutral-200)'}`};
  border-bottom: 1px solid var(--neutral-200);
  max-width: ${({ inline }) => (inline ? 'var(--space-64)' : '100%')};
  width: 100%;

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    background-color: var(--white);
  }

  :focus {
    outline: none;
  }
`;
