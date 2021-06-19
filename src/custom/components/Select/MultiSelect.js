import React, { useState, useMemo, useCallback, useEffect } from 'react';
import Select from './Select';
import { customSelectComponents } from './customComponents';

const components = {
  MenuList: ({ children, ...props }) => {
    return <customSelectComponents.MenuList {...props}>{children}</customSelectComponents.MenuList>;
  },
  ValueContainer: ({ ...props }) => {
    const value = props.getValue();
    const children = React.Children.toArray(props.children);

    return (
      <customSelectComponents.ValueContainer {...props}>
        {value.length > 1 ? `${value.length} selected` : value[0]?.label}
        {children[1]}
      </customSelectComponents.ValueContainer>
    );
  },
};

const styles = {
  container: {
    minWidth: '8rem',
    maxWidth: '12rem',
  },
  menu: {
    minWidth: '10rem',
  },
  multiValue: {
    backgroundColor: 'transparent',
    color: 'text.default',
  },
  multiValueLabel: {
    paddingRight: 2,
    color: 'text.default',
  },

  multiValueRemove: {
    display: 'none',
    pointerEvents: 'none',
  },
};

const isOptionDisabled = (option, selectedOptions) => {
  return option.isFallback && selectedOptions.length === 1 && selectedOptions[0].isFallback;
};

const MultiSelect = ({ defaultSelectedOptions, onChange: onChangeProp, options, ...props }) => {
  const fallbackSelectedOptions = useMemo(() => options.filter(option => option.isFallback), [
    options,
  ]);

  const [selectedOptions, setSelectedOptionsValue] = useState(
    defaultSelectedOptions ?? fallbackSelectedOptions
  );

  const onChange = useCallback(
    (selectedOptions, { action, option }) => {
      if (selectedOptions.length === 0) {
        setSelectedOptionsValue(fallbackSelectedOptions);
      } else if (action === 'select-option' && option.isExclusive) {
        setSelectedOptionsValue([option]);
      } else {
        setSelectedOptionsValue(selectedOptions.filter(o => !o.isExclusive));
      }
    },
    [fallbackSelectedOptions]
  );

  useEffect(() => {
    onChangeProp(selectedOptions);
  }, [selectedOptions, onChangeProp]);

  return (
    <Select
      isMulti
      onChange={onChange}
      value={selectedOptions}
      options={options}
      isOptionDisabled={isOptionDisabled}
      controlShouldRenderValue={false}
      maxMultiValueCount={2}
      hideSelectedOptions={false}
      closeMenuOnSelect={false}
      isClearable={false}
      isSearchable={false}
      openMenuOnFocus={true}
      components={components}
      styles={styles}
      {...props}
    />
  );
};

export default MultiSelect;
