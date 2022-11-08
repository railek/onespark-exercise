import React from 'react';

import Container from '@/components/elements/container';

import { StyledCopyright, StyledFooter } from './footer.styled';

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <StyledCopyright>
          <p>{`© ${new Date().getFullYear()} OneSpark. All rights reserved.`}</p>
        </StyledCopyright>
      </Container>
    </StyledFooter>
  );
}
