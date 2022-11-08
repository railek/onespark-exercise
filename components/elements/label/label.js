import React from 'react';
import PropTypes from 'prop-types';

import { StyledLabel } from './label.styled';

export default function Label({ children }) {
  return <StyledLabel>{children}</StyledLabel>;
}

Label.propTypes = {
  children: PropTypes.node.isRequired,
};
