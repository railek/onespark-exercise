/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

export const StyledProgress = styled.ul`
  display: flex;
  flex-direction: row;
  padding-top: var(--space-32);
  padding-bottom: var(--space-32);
  border-bottom: 1px solid var(--neutral-100);
  background-color: var(--neutral-50);
  border-top-left-radius: var(--radius-24);
  border-top-right-radius: var(--radius-24);

  @media (min-width: 768px) {
    border-top-left-radius: var(--radius-32);
    border-top-right-radius: var(--radius-32);
  }
`;

export const StyledStep = styled.li`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex: auto;
  position: relative;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: var(--radius-999);
    height: var(--space-24);
    width: var(--space-24);
    font-size: var(--text-14);
    font-weight: 500;
    z-index: 1;

    @media (min-width: 768px) {
      font-size: var(--text-16);
      height: var(--space-32);
      width: var(--space-32);
    }
  }

  &.incomplete span {
    background-color: var(--neutral-100);
    color: var(--neutral-400);
  }

  &.active span,
  &.complete span {
    background-color: var(--primary-500);
    color: var(--white);
  }

  &:not(:last-child):before {
    content: '';
    position: absolute;
    height: var(--space-8);
    left: 50%;

    @media (min-width: 768px) {
      height: var(--space-6);
    }
  }

  &:before {
    width: 100%;
    background-color: var(--neutral-100);
  }

  &.inactive.complete:before {
    background-color: var(--primary-500);
  }
`;
