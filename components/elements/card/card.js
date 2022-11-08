import React from 'react';
import PropTypes from 'prop-types';

import ScrollFade from '@/components/elements/scroll-fade';

import { StyledCard } from './card.styled';

export default function Card({ children }) {
  return (
    <ScrollFade threshold={0.2}>
      <StyledCard>{children}</StyledCard>
    </ScrollFade>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};
