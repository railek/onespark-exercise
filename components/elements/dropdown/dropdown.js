import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

import Label from '@/components/elements/label';

import { StyledInline, StyledSelect } from './dropdown.styled';

export default function Dropdown({
  options,
  value,
  label,
  placeholder,
  onChange,
  isSearchable,
  required,
  inline,
}) {
  if (inline) {
    const before = label.substring(0, label.indexOf('{label}'));
    const after = label.split('{label}')[1];

    return (
      <StyledInline>
        <Label>{before}</Label>
        <Select
          required={required}
          options={options}
          placeholder={options[0].label}
          value={value}
          onChange={onChange}
          isSearchable={isSearchable}
          styles={StyledSelect}
          inline={inline}
          components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
        />
        <Label>{after}</Label>
      </StyledInline>
    );
  }

  return (
    <Select
      required={required}
      options={options}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      isSearchable={isSearchable}
      styles={StyledSelect}
    />
  );
}

Dropdown.defaultProps = {
  value: null,
  onChange: null,
  required: false,
  inline: false,
  isSearchable: false,
};

Dropdown.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  isSearchable: PropTypes.bool,
  inline: PropTypes.bool,
  required: PropTypes.bool,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf().isRequired,
};
