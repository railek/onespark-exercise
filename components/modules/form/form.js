import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import Dropdown from '@/components/elements/dropdown';
import Input from '@/components/elements/input';
import Radio from '@/components/elements/radio';
import FormContext from '@/context/form-context';

import { StyledForm } from './form.styled';

const Field = ({ item }) => {
  const [currentValue, setCurrentValue] = useState(null);
  const { onChange } = useContext(FormContext);

  const handleChange = (value) => {
    setCurrentValue(value);
    onChange(item.name, typeof value === 'object' ? value.label : value);
  };

  const filterOptions = (array) =>
    array.map((option) => ({
      value: option.value,
      label: option.label || option.text,
      id: option.id,
    }));

  switch (item.type) {
    case 'checkbox':
    case 'radio':
      return (
        <fieldset id={item.id}>
          <div>{item?.label}</div>
          {item.options.map((option) => (
            <Radio
              onChange={(event) => handleChange(event.target.value, item.value)}
              id={item.id}
              required={item.required}
              checked={currentValue === option.value}
              label={option.text || option.label}
              value={option.value}
            />
          ))}
        </fieldset>
      );
    case 'inline_select':
      return (
        <Dropdown
          required={item.required}
          options={filterOptions(item.options)}
          placeholder={item.label}
          label={item.label}
          value={currentValue}
          onChange={(selected) => handleChange(selected)}
          isSearchable
          inline
        />
      );
    case 'search_select':
      return (
        <Dropdown
          required={item.required}
          options={filterOptions(item.options)}
          placeholder={item.label}
          label={item.label}
          value={currentValue}
          onChange={(selected) => handleChange(selected)}
          isSearchable
        />
      );
    case 'select':
      return (
        <Dropdown
          required={item.required}
          options={filterOptions(item.options)}
          label={item.label}
          placeholder={item.label}
          value={currentValue}
          onChange={(selected) => handleChange(selected)}
        />
      );
    case 'inline_numeric':
      return (
        <Input
          inline
          id={item.id}
          label={item.label}
          name={item.name}
          onChange={(event) => handleChange(event.target.value)}
          required={item.required}
          type="number"
          value={currentValue}
        />
      );
    case 'currency':
      return (
        <Input
          id={item.id}
          label={item.label}
          name={item.name}
          onChange={(event) => handleChange(event.target.value)}
          required={item.required}
          type="number"
          value={currentValue}
        />
      );
    case 'numeric':
      return (
        <Input
          id={item.id}
          label={item.label}
          name={item.name}
          onChange={(event) => handleChange(event.target.value)}
          required={item.required}
          type="text"
          value={currentValue}
        />
      );
    case 'email':
      return (
        <Input
          id={item.id}
          label={item.label}
          name={item.name}
          onChange={(event) => handleChange(event.target.value)}
          pattern="[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+"
          required={item.required}
          title="Valid email address"
          type={item.type}
          value={currentValue}
        />
      );
    case 'tel':
      return (
        <Input
          id={item.id}
          label={item.label}
          name={item.name}
          onChange={(event) => handleChange(event.target.value)}
          pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
          required={item.required}
          title={`Phone number with "-" and/or country code.`}
          type={item.type}
          value={currentValue}
        />
      );
    case 'text':
      return (
        <Input
          id={item.id}
          label={item.label}
          name={item.name}
          onChange={(event) => handleChange(event.target.value)}
          required={item.required}
          type={item.type}
          value={currentValue}
        />
      );
    default: {
      return <></>;
    }
  }
};

Field.propTypes = {
  item: PropTypes.shape({}),
};

const Form = () => {
  const { step, sections } = useContext(FormContext);

  return (
    <StyledForm>
      {sections[step].questions?.map((item, index) => (
        <Field key={`${index}_${item.label}`} item={item} />
      ))}
    </StyledForm>
  );
};

export default Form;
