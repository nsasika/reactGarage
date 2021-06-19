import React, { useMemo, useCallback } from 'react';
import Select from '../Select';
import { customSelectComponents } from '../Select';
import boxShadow from '../../style-helpers/boxShadow';
import Text from '../Text';
import Stack from '../Stack';

const styles = {
  container: {
    width: 'auto',
    maxWidth: '15rem',
  },
  control: {
    cursor: 'pointer',
    backgroundColor: 'white',
    flex: '0 1 auto',
    flexWrap: 'nowrap',
    '&:hover': {
      boxShadow: boxShadow('0 0 0 2px', 'green.30'),
    },
  },
  multiValue: {
    ml: 'auto',
    mr: 0,
    px: 1,
    backgroundColor: 'transparent',
    lineHeight: 1.3,
  },
  menu: {
    right: '0px',
    width: '15rem',
  },
  multiValueLabel: {
    color: 'text.default',
    fontSize: 3,
    px: 0,
  },
  multiValueRemove: {
    display: 'none',
  },
  valueContainer: {
    paddingLeft: 1,
    paddingRight: 0,
    flex: 'inherit',
  },
};

const getOptionValue = company => company.id;
const formatOptionLabel = ({ id, name, department }, { context, selectValue }) => {
  const color = context === 'menu' && selectValue?.[0]?.id === id ? 'white' : 'text.subdued';
  return (
    <Stack direction='column' gap={0}>
      <Text
        sx={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          lineHeight: 1.5,
        }}
      >
        {name}
      </Text>
      <Text
        sx={{
          color,
          fontSize: 2,
          lineHeight: 1.25,
        }}
      >
        {department}
      </Text>
    </Stack>
  );
};

const props = {
  formatOptionLabel,
  getOptionValue,
  hideSelectedOptions: false,
  closeMenuOnSelect: true,
  isClearable: false,
  isSearchable: false,
  openMenuOnFocus: true,
};

const CurrentCompanyDropdown = ({ companies, currentCompany, onChange }) => {
  const value = useMemo(() => companies.find(({ id }) => currentCompany === id), [
    companies,
    currentCompany,
  ]);

  const handleChange = useCallback(
    newValue => {
      onChange(newValue.id);
    },
    [onChange]
  );

  return (
    <Select value={value} options={companies} onChange={handleChange} styles={styles} {...props} />
  );
};

export default CurrentCompanyDropdown;
