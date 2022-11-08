import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

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
    const before = label.split('{label}');
    const after = label.split('{label}')[1];

    return (
      <div>
        <div>{before}</div>
        <Select
          required={required}
          options={options}
          placeholder={options[0].label}
          value={value}
          onChange={onChange}
          isSearchable={isSearchable}
        />
        <div>{after}</div>
      </div>
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
