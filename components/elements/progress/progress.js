import React from 'react';
import PropTypes from 'prop-types';

import { StyledProgress, StyledStep } from './progress.styled';

export default function Progress({ activeIndex, steps }) {
  return (
    <StyledProgress>
      {[...Array(steps)].map((_, index) => (
        <StyledStep
          key={index}
          className={`${activeIndex === index ? 'active' : 'inactive'} ${
            activeIndex > index ? 'complete' : 'incomplete'
          }`}
        >
          <span>{index + 1}</span>
        </StyledStep>
      ))}
    </StyledProgress>
  );
}

Progress.defaultProps = {
  steps: 5,
};

Progress.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  steps: PropTypes.number,
};
