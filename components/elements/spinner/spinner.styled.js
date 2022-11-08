/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

export const StyledContainer = styled.div`
  position: fixed;
  inset: 64px 0 72px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    inset: 72px 0 160px 0;
  }
`;

export const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;
  width: var(--space-80);
  height: var(--space-80);

  circle {
    stroke: var(--primary-500);
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;
