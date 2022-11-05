import React from 'react';
import PropTypes from 'prop-types';

import { StyledContainer } from './section-title.styled';

export default function SectionTitle({ title, description }) {
  return (
    <StyledContainer>
      <h3>{title}</h3>
      <p>{description}</p>
    </StyledContainer>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
