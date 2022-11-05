import React from 'react';
import PropTypes from 'prop-types';

import Loader from '../loader';

import { StyledButton } from './button.styled';

export default function Button({ type, color, children, event, loading }) {
  return (
    <StyledButton onClick={event} type={type} color={color}>
      {loading ? 'Loading...' : children}
      {loading && <Loader />}
    </StyledButton>
  );
}

Button.defaultProps = {
  type: 'button',
  color: 'primary',
  event: null,
  loading: false,
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  color: PropTypes.oneOf(['ghost', 'primary']),
  children: PropTypes.node.isRequired,
  event: PropTypes.func,
  loading: PropTypes.bool,
};
