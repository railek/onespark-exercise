import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

export default function Seo({ title, description, type, image }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={description} />
    </Head>
  );
}

Seo.defaultProps = {
  title: 'OneSpark',
  description: 'Life Insurance Built For The 21st Century.',
  type: 'website',
  image: 'https://dummyimage.com/1200x600/000000/fff',
};

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  type: PropTypes.oneOf(['website', 'profile', 'book', 'article', 'video', 'music']),
  image: PropTypes.string,
};
