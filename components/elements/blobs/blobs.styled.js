/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

export const StyledBlobs = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;

  span {
    position: absolute;
    display: block;
    width: var(--space-160);
    height: var(--space-160);
    background: transparent;
    border: var(--space-32) solid var(--neutral-200);
    border-radius: var(--radius-999);
    animation: animate 25s linear infinite;
    bottom: calc(var(--space-160) * -1);

    :nth-child(odd) {
      border: var(--space-24) solid var(--neutral-200);
      width: var(--space-96);
      height: var(--space-96);
      bottom: calc(var(--space-160) * -1);
    }

    :nth-child(1) {
      left: 25%;
      animation-delay: 0s;
    }

    :nth-child(2) {
      left: 10%;
      animation-delay: 2s;
      animation-duration: 12s;
    }

    :nth-child(3) {
      left: 70%;
      animation-delay: 4s;
    }

    :nth-child(4) {
      left: 40%;
      animation-delay: 0s;
      animation-duration: 18s;
    }

    :nth-child(5) {
      left: 65%;
      animation-delay: 0s;
    }

    :nth-child(6) {
      left: 75%;
      animation-delay: 3s;
    }

    :nth-child(7) {
      left: 35%;
      animation-delay: 7s;
    }

    :nth-child(8) {
      left: 50%;
      animation-delay: 15s;
      animation-duration: 45s;
    }
  }

  @keyframes animate {
    0% {
      transform: translateY(0px);
      opacity: 1;
    }

    100% {
      transform: translateY(-1080px);
      opacity: 0;
    }
  }
`;
