import React from 'react';
import PropTypes from 'prop-types';

import Label from '@/components/elements/label';

import { StyledField, StyledInput } from './input.styled';

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
  inline,
}) {
  if (inline) {
    const before = label.substring(0, label.indexOf('{age}'));
    const after = label.split('{age}')[1];

    return (
      <StyledField inline>
        <Label>{before}</Label>
        <StyledInput
          id={id}
          title={title}
          type={type}
          value={value}
          name={name}
          required={required}
          pattern={pattern}
          onChange={onChange}
          inline
        />
        <Label>{after}</Label>
      </StyledField>
    );
  }
  return (
    <StyledField>
      {label && <Label htmlFor={id}>{label}</Label>}
      <StyledInput
        id={id}
        title={title}
        type={type}
        value={value}
        name={name}
        required={required}
        pattern={pattern}
        onChange={onChange}
      />
    </StyledField>
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
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  pattern: PropTypes.string,
  inline: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  type: PropTypes.oneOf(['text', 'tel', 'email']),
  required: PropTypes.bool,
  onChange: PropTypes.func,
};
