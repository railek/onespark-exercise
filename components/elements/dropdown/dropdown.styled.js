/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledInline = styled.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: var(--space-8);
`;

export const StyledSelect = {
  container: (styles) => ({
    ...styles,
    position: 'relative',
    backgroundColor: 'var(--white)',
  }),
  control: (styles, state) => ({
    ...styles,
    padding: state.selectProps.inline ? 'var(--space-0)' : 'var(--space-12)',
    borderColor: state.selectProps.inline ? 'var(--white)' : 'var(--neutral-200)',
    borderBottom: '1px solid var(--neutral-200)',
    borderRadius: state.selectProps.inline ? '0px' : 'var(--radius-12)',
    boxShadow: 'none',
    height: '100%',
    width: state.selectProps.inline ? 'var(--space-80)' : '100%',
  }),
  option: (styles, { isSelected }) => ({
    ...styles,
    fontSize: 'var(--text-14)',
    color: isSelected ? 'var(--white)' : 'var(--neutral-500)',
    backgroundColor: isSelected ? 'var(--primary-500)' : 'var(--white)',
    '&:hover': {
      backgroundColor: isSelected ? 'var(--primary-500)' : 'var(--neutral-200)',
    },
  }),
  placeholder: (styles, state) => ({
    ...styles,
    textAlign: state.selectProps.inline ? 'center' : 'left',
    color: 'var(--neutral-400)',
    fontSize: state.selectProps.inline ? 'var(--text-16)' : 'var(--text-14)',
  }),
  singleValue: (styles) => ({
    ...styles,
    color: 'var(--neutral-500)',
    fontWeight: '500',
    fontSize: 'var(--text-14)',
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    backgroundColor: 'transparent',
  }),
  input: (styles) => ({
    ...styles,
    padding: 'var(--space-0)',
    margin: 'var(--space-0)',
  }),
  menuList: (styles) => ({
    ...styles,
    padding: 'var(--space-0)',
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    color: 'var(--neutral-500)',
    padding: '0 0 0 0',
    '&:hover': {
      color: 'var(--neutral-500)',
    },
  }),
  valueContainer: (styles, state) => ({
    ...styles,
    textAlign: state.selectProps.inline ? 'center' : 'left',
    padding: '0 0 0 0',
    '@media (min-width: 768px)': {
      padding: '0 0 0 0',
    },
  }),
  menu: (styles) => ({
    ...styles,
    backgroundColor: 'var(--white)',
    borderRadius: 'var(--radius-12)',
    border: '1px solid var(--neutral-200)',
    padding: 0,
    overflow: 'hidden',
    boxShadow: 'var(--shadow)',
    width: 'auto',
    top: 'initial',
    right: 'var(--space-0)',
    left: 'var(--space-0)',
    zIndex: '15',
  }),
};
