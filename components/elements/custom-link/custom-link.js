import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import IsUrl from '@/utilities/is-url';

export default function CustomLink({ link, children, className, ...props }) {
  const isInternalLink = link.startsWith('/');
  const isExternalLink = IsUrl(link);

  if (isInternalLink) {
    return (
      <Link {...props} href={link}>
        <a className={className}>{children}</a>
      </Link>
    );
  }

  if (isExternalLink) {
    return (
      <a href={link} className={className} {...props} target="_self">
        {children}
      </a>
    );
  }

  return (
    <a href={link} className={className} {...props} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

CustomLink.defaultProps = {
  className: null,
};

CustomLink.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
