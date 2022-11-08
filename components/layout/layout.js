import React from 'react';
import PropTypes from 'prop-types';

import Footer from '@/components/modules/footer';
import Header from '@/components/modules/header';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
