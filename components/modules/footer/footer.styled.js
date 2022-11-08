import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: var(--neutral-900);
  margin-top: var(--space-64);
`;

export const StyledCopyright = styled.div`
  color: var(--neutral-300);
  padding: var(--space-24) var(--space-0);
  text-align: center;

  @media (min-width: 768px) {
    padding: var(--space-48) var(--space-0);
  }
`;
