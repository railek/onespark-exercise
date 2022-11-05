import { css } from 'styled-components';

const Typography = css`
  :root {
    --font-body: 'Red Hat Text', sans-serif;
    --font-heading: 'Red Hat Display', sans-serif;
    --body-height: 150%;
    --heading-height: 110%;
  }

  * {
    --text-12: 12px;
    --text-14: 14px;
    --text-16: 16px;
    --text-18: 18px;
    --text-20: 20px;
    --text-24: 24px;
    --text-28: 28px;
    --text-32: 32px;
    --text-40: 40px;
    --text-48: 48px;
    --text-64: 64px;
  }

  body {
    font-family: var(--font-body);
    font-weight: 400;
    font-style: normal;
    line-height: var(--body-height);
    color: var(--neutral-500);
    font-size: var(--text-16);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-heading);
    line-height: var(--heading-height);
    font-weight: 900;
    color: var(--neutral-700);
    letter-spacing: -0.5px;
  }

  h1 {
    font-size: var(--text-40);
    @media (min-width: 768px) {
      font-size: var(--text-48);
    }
  }

  h2 {
    font-size: var(--text-32);
    @media (min-width: 768px) {
      font-size: var(--text-40);
    }
  }

  h3 {
    font-size: var(--text-28);
    @media (min-width: 768px) {
      font-size: var(--text-32);
    }
  }

  h4 {
    font-size: var(--text-24);
    @media (min-width: 768px) {
      font-size: var(--text-28);
    }
  }

  h5 {
    font-size: var(--text-20);
    @media (min-width: 768px) {
      font-size: var(--text-24);
    }
  }

  h6 {
    font-size: var(--text-14);
    letter-spacing: -0.25px;
    @media (min-width: 768px) {
      font-size: var(--text-16);
    }
  }
`;

export default Typography;
