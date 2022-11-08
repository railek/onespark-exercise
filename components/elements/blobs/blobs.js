import React from 'react';

import { StyledBlobs } from './blobs.styled';

export default function Blobs() {
  const count = 8;

  return (
    <StyledBlobs count={count}>
      {[...Array(count)].map((_, index) => (
        <span key={index} />
      ))}
    </StyledBlobs>
  );
}
