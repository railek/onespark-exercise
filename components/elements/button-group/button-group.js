import React from 'react';
import PropTypes from 'prop-types';

import { StyledGroup } from './button-group.styled';

export default function ButtonGroup({ children }) {
  return <StyledGroup>{children}</StyledGroup>;
}

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
};
