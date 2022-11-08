/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

export const StyledRadio = styled.label`
  display: flex;
  align-items: flex-start;
  gap: var(--space-16);
  justify-content: space-between;
  position: relative;
  background-color: var(--white);
  border: ${({ checked }) => `1px solid ${checked ? 'var(--primary-500)' : 'var(--neutral-200)'}`};
  border-radius: var(--radius-12);
  padding: var(--space-12) var(--space-12);
  cursor: pointer;

  label {
    color: ${({ checked }) => (checked ? 'var(--neutral-700)' : 'var(--neutral-500)')};
    font-size: var(--space-14);
    pointer-events: none;
  }

  input[type='radio'] {
    appearance: none;
    background-color: var(--white);
    width: var(--space-24);
    height: var(--space-24);
    border: 1px solid var(--neutral-200);
    border-radius: var(--radius-999);
    display: grid;
    place-content: center;

    :checked {
      border: 2px solid var(--primary-500);
    }

    :checked::before {
      transform: scale(1);
    }

    ::before {
      content: '✔';
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--white);
      font-size: var(--text-12);
      width: var(--space-20);
      height: var(--space-20);
      border-radius: var(--radius-999);
      transform: scale(0);
      transition: 0.1s transform ease-in-out;
      background-color: var(--primary-500);
    }
  }
`;
