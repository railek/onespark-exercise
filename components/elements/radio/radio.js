import React from 'react';
import PropTypes from 'prop-types';

import { StyledRadio } from './radio.styled';

export default function Radio({ onChange, id, checked, label, value, required }) {
  return (
    <StyledRadio checked={checked}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        onChange={onChange}
        name={id}
        value={value}
        type="radio"
        checked={checked}
        required={required}
      />
    </StyledRadio>
  );
}

Radio.defaultProps = {
  value: null,
  checked: false,
  onChange: null,
  required: false,
};

Radio.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  required: PropTypes.bool,
  onChange: PropTypes.func,
};
