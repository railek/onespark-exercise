import React from 'react';

import Logo from '@/components//elements/logo';

import { StyledWrapper } from './header.styled';

export default function Header() {
  return (
    <header>
      <StyledWrapper>
        <Logo />
      </StyledWrapper>
    </header>
  );
}
