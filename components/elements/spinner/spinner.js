import React from 'react';

import { StyledContainer, StyledSpinner } from './spinner.styled';

export default function Spinner() {
  return (
    <StyledContainer>
      <StyledSpinner viewBox="0 0 50 50">
        <circle cx="25" cy="25" r="20" fill="none" strokeWidth="4" />
      </StyledSpinner>
    </StyledContainer>
  );
}
