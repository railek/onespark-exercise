import React, { useRef, useState } from 'react';
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
  const [hiddenValue, setHiddenValue] = useState(value);
  const selectRef = useRef(null);

  const onFocus = () => {
    if (selectRef.current) {
      selectRef.current.focus();
    }
  };

  const handleChange = (v) => {
    onChange(v);
    setHiddenValue(v);
  };

  const getValue = () => {
    if (value !== undefined && value !== null) {
      return value;
    }
    return hiddenValue || '';
  };

  if (inline) {
    const before = label.substring(0, label.indexOf('{label}'));
    const after = label.split('{label}')[1];

    return (
      <StyledInline>
        <Label>{before}</Label>
        <Select
          options={options}
          placeholder={options[0].label}
          value={value}
          onChange={handleChange}
          isSearchable={isSearchable}
          styles={StyledSelect}
          inline={inline}
          ref={selectRef}
          components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
        />
        {required && (
          <input
            tabIndex={-1}
            autoComplete="off"
            style={{ opacity: 0, width: '100%', height: 0, position: 'absolute' }}
            value={getValue()}
            onChange={() => {}}
            onFocus={onFocus}
            required
          />
        )}
        <Label>{after}</Label>
      </StyledInline>
    );
  }

  return (
    <div>
      <Select
        options={options}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        isSearchable={isSearchable}
        ref={selectRef}
        styles={StyledSelect}
      />
      {required && (
        <input
          tabIndex={-1}
          autoComplete="off"
          style={{ opacity: 0, width: '100%', height: 0, position: 'absolute' }}
          value={getValue()}
          onChange={() => {}}
          onFocus={onFocus}
          required
        />
      )}
    </div>
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
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
    }),
  ).isRequired,
};
