import React from 'react';
import Image from 'next/image';

import CustomLink from '@/components/elements/custom-link';

export default function Logo() {
  return (
    <CustomLink link="/">
      <Image src="/onespark.svg" alt="OneSpark Logo" width="111" height="24" />
    </CustomLink>
  );
}
