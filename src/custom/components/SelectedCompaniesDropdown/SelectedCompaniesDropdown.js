import React, { useEffect, useMemo } from 'react';
import Select from '../Select';
import { customSelectComponents } from '../Select';
import boxShadow from '../../style-helpers/boxShadow';
import merge from '../../utils/merge';
import Stack from '../Stack';
import Box from '../Box';
import Text from '../Text';
import Flex from '../Flex';
import { CompanyIcon } from '../../icons';

const components = {
  MultiValue: ({ children, ...props }) => {
    const value = props.getValue();

    if (value.length > 1 && props.index !== 0) {
      return null;
    }
    if (value.length > 1 && props.index === 0) {
      return (
        <customSelectComponents.MultiValue
          {...props}
        >{`${value.length} companies selected`}</customSelectComponents.MultiValue>
      );
    }

    return <customSelectComponents.MultiValue {...props} children={children} />;
  },
  MultiValueLabel: ({ children, ...props }) => {
    return (
      <customSelectComponents.MultiValueLabel {...props}>
        {children}
      </customSelectComponents.MultiValueLabel>
    );
  },
  Option: ({ isDisabled, ...props }) => {
    const value = props.getValue();
    const isLastSelectedCompany = value.length === 1 && props.isSelected;

    return <customSelectComponents.Option {...props} isDisabled={isLastSelectedCompany} />;
  },
};

const styles = {
  container: {
    width: 'auto',
    maxWidth: '15rem',
  },
  control: ({ isFocused }) => {
    return {
      cursor: 'pointer',
      backgroundColor: 'white',
      flex: '0 1 auto',
      flexWrap: 'nowrap',
      '&:hover': {
        boxShadow: boxShadow('0 0 0 2px', 'green.30'),
      },
    };
  },
  singleValue: ({ ...props }) => {
    return {
      ml: 'auto',
      mr: 0,
      px: 1,
      backgroundColor: 'transparent',
      lineHeight: 1.3,
      maxWidth: '100%',
    };
  },
  multiValue: ({ ...props }) => {
    return {
      ml: 'auto',
      mr: 0,
      px: 1,
      backgroundColor: 'transparent',
      lineHeight: 1.3,
    };
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
  valueContainer: { paddingLeft: 1, paddingRight: 0, flex: 'inherit' },
  option: ({ isDisabled, isSelected, getValue, isMulti }) => {
    const value = getValue();

    const isLastSelectedCompany = isDisabled &&
      isSelected &&
      isMulti &&
      value.length === 1 && {
        color: 'text.default',
        '&:active': { color: 'text.default' },
        pointerEvents: 'none',
      };

    const isSingleValue = isSelected &&
      !isMulti && {
        color: 'white',
        backgroundColor: 'green.40',
      };

    return { ...isLastSelectedCompany, ...isSingleValue };
  },
};

const config = {
  hideSelectedOptions: false,
  closeMenuOnSelect: false,
  isClearable: false,
  isSearchable: false,
  openMenuOnFocus: true,
};

const getOptionValue = company => company.id;
const getOptionLabel = company => company.name;

const SelectedCompaniesDropdown = ({
  companies,
  selectedCompanies,
  onSelectedCompaniesChange,
  isMulti = true,
}) => {
  const handleChange = (newValue, { action }) => {
    if (Array.isArray(selectedCompanies)) {
      const newSelectedCompanies = newValue.map(e => e.id);
      onSelectedCompaniesChange(newSelectedCompanies);
    } else {
      const newSelectedCompanies = newValue.id;
      onSelectedCompaniesChange(newSelectedCompanies);
    }
  };

  const value = useMemo(() => {
    if (Array.isArray(selectedCompanies)) {
      return companies.filter(company => selectedCompanies?.includes(company.id));
    }
    return companies.find(company => company.id === selectedCompanies);
  }, [companies, selectedCompanies]);

  const options = useMemo(
    () => companies.map(company => ({ ...company, subLabel: company.department })),
    [companies]
  );

  if (options.length === 1) {
    return (
      <Stack direction='row' gap={4} sx={{ alignItems: 'center', px: 2 }}>
        <Stack gap={0}>
          <Text>{options[0].name}</Text>
          <Text sx={{ color: 'text.subdued', fontSize: 2 }}>{options[0].subLabel}</Text>
        </Stack>
        <CompanyIcon color='gray.50' />
      </Stack>
    );
  }

  return (
    <Select
      isMulti={Array.isArray(selectedCompanies)}
      value={value}
      options={options}
      onChange={handleChange}
      getOptionValue={getOptionValue}
      getOptionLabel={getOptionLabel}
      components={components}
      styles={styles}
      width={4}
      {...config}
    />
  );
};

export default SelectedCompaniesDropdown;
