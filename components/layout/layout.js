import React from 'react';
import PropTypes from 'prop-types';

import Blobs from '@/components/elements/blobs';
import Footer from '@/components/modules/footer';
import Header from '@/components/modules/header';

import { StyledRoot } from './layout.styled';

export default function Layout({ children }) {
  return (
    <StyledRoot>
      <Blobs />
      <Header />
      <main>{children}</main>
      <Footer />
    </StyledRoot>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
