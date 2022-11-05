import React from 'react';
import PropTypes from 'prop-types';

import Seo from '@/components/elements/seo';
import Layout from '@/components/layout';

import GlobalStyles from '../styles';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Seo />
      <Layout>
        <GlobalStyles />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};
