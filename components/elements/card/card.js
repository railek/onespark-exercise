import React from 'react';
import PropTypes from 'prop-types';

import { StyledCard } from './card.styled';

export default function Card({ children }) {
  return <StyledCard>{children}</StyledCard>;
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};
