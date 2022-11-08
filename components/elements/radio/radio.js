import React from 'react';
import PropTypes from 'prop-types';

export default function Radio({ onChange, id, checked, label, value, required }) {
  return (
    <div>
      <input
        id={id}
        onChange={onChange}
        name={id}
        value={value}
        type="radio"
        checked={checked}
        required={required}
      />
      <label htmlFor={id}>{label}</label>
    </div>
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
