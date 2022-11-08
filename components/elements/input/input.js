import React from 'react';
import PropTypes from 'prop-types';

import { StyledInput } from './input.styled';

export default function Input({
  id,
  value,
  label,
  name,
  type,
  required,
  title,
  pattern,
  onChange,
  inputmode,
  inline,
}) {
  if (inline) {
    const before = label.split(`{age}`);
    const after = label.split(`{age}`)[1];

    return (
      <div>
        <div>{before}</div>
        <input
          id={id}
          title={title}
          type={type}
          value={value}
          name={name}
          required={required}
          inputMode={inputmode}
          pattern={pattern}
          onChange={onChange}
        />
        <div>{after}</div>
      </div>
    );
  }
  return (
    <StyledInput>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        title={title}
        type={type}
        value={value}
        name={name}
        required={required}
        inputMode={inputmode}
        pattern={pattern}
        onChange={onChange}
      />
    </StyledInput>
  );
}

Input.defaultProps = {
  value: null,
  type: 'text',
  required: false,
  inline: false,
  pattern: null,
  title: null,
  onChange: null,
  inputmode: null,
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  pattern: PropTypes.string,
  inline: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  inputmode: PropTypes.string,
  type: PropTypes.oneOf(['text', 'tel', 'email']),
  required: PropTypes.bool,
  onChange: PropTypes.func,
};
