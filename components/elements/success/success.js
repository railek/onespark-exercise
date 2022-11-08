import React from 'react';
import Image from 'next/image';

import { StyledSuccess } from './success.styled';

export default function Success() {
  return (
    <StyledSuccess>
      <Image src="/success.svg" alt="Success" width="158" height="144" />
      <div>
        <h5>Your quote request has been submitted!</h5>
        <p>We&apos;ll get back to you within 24 - 48 hours.</p>
      </div>
    </StyledSuccess>
  );
}
