import React from 'react';
import { components } from 'react-select';
import { ArrowheadUpIcon, ArrowheadDownIcon, CloseIcon } from '../../icons';
import Checkbox from '../Checkbox';
import Box from '../Box';
import boxShadow from '../../style-helpers/boxShadow';
import contrastText from '../../style-helpers/contrastText';
import Stack from '../Stack';
import Text from '../Text';

/* Select */

const SelectContainer = null;
const container = ({ isFocused, selectProps }) => ({
  marginLeft: '0',
  marginRight: '0',

  fontFamily: 'default',
  fontSize: 3,
  fontWeight: 'body',

  color: 'text.default',

  backgroundColor: isFocused ? 'white' : 'gray.15',
  borderRadius: 'default',

  flex: '0 0 auto',

  minWidth: '8rem',
  width: 'auto',
});

const Control = null;
const control = ({ isFocused, isDisabled }) => ({
  borderWidth: '0',
  boxShadow: isFocused && boxShadow('0 0 0 2px', 'green.30'),

  borderRadius: 'inherit',
  backgroundColor: 'inherit',

  height: '2.25rem',

  cursor: isDisabled ? 'default' : 'pointer',
});

/* Group */

const Group = null;
const group = {
  paddingY: 0,
  paddingBottom: 3,
  borderBottom: '1px solid #ddd',
  '&:last-child': {
    paddingBottom: 2,
    borderBottom: 'none',
  },
};

const GroupHeading = null;
const groupHeading = {
  paddingTop: 3,
  paddingBottom: 2,
  fontSize: 2,
  color: 'text.subdued',
  margin: 0,
  textTransform: 'none',
};

/* Indicators */

const IndicatorsContainer = null;
const indicatorsContainer = {
  paddingRight: 2,
  paddingLeft: 1,
  paddingY: 0,
};

const IndicatorSeparator = null;
const indicatorSeparator = {
  display: 'none',
};

const DropdownIndicator = ({ selectProps, ...props }) => {
  const { menuIsOpen } = selectProps;
  const Icon = menuIsOpen ? ArrowheadUpIcon : ArrowheadDownIcon;
  return <Icon size={24} color='gray.40' />;
};
const dropdownIndicator = {
  paddingX: 0,
};

const LoadingIndicator = null;
const loadingIndicator = null;

const ClearIndicator = null;
const clearIndicator = {
  color: 'ink.90',
  cursor: 'pointer',
};

/* Input */

const Input = null;
const input = {
  display: 'block',
  margin: 0,
  maxWidth: '100px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  '& > * > input': {
    lineHeight: 'default',
  },
};

/* Menu */

const Menu = null;
const menu = {
  borderRadius: 'default',
  paddingTop: 2,
  paddingBottom: 2,
  color: 'text.default',
  boxShadow: '0 8px 12px 0 rgba(24, 60, 52, 0.3), 0 0 1px 0 rgba(24, 60, 52, 0.3)',
};

const MenuList = null;
const menuList = {
  padding: 0,
};

const MenuPortal = null;
const menuPortal = null;

/* Messages */

const LoadingMessage = null;
const loadingMessage = null;

const NoOptionsMessage = null;
const noOptionsMessage = null;

/* Placeholder */

const Placeholder = null;
const placeholder = null;

/* MultiValue */

const MultiValue = null;
const multiValue = {
  borderRadius: 3,
  backgroundColor: 'green.40',
  paddingX: 0,
  paddingY: 0,
  margin: 0,
  marginRight: 1,
};

const MultiValueContainer = null;

const MultiValueLabel = null;
const multiValueLabel = {
  color: 'white',
  fontSize: 3,
  lineHeight: '1.15',

  paddingRight: 1,
  paddingLeft: 2,
  paddingY: 1,
};

const MultiValueRemove = ({ innerProps, data, selectProps }) => (
  <Box {...innerProps}>
    <CloseIcon size={10} color='white' sx={{ flex: '0 0 auto' }} />
  </Box>
);
const multiValueRemove = {
  paddingRight: 2,
  paddingLeft: 0,
  paddingY: 0,

  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'green.40',
    borderRadius: '12px',
  },
};

/* Option */

const Option = ({ ...props }) => {
  return (
    <components.Option {...props}>
      <Stack direction='row' gap={4} sx={{ alignItems: 'center' }}>
        {props.isMulti && (
          <Checkbox
            size={16}
            checked={props.isSelected}
            sx={{ pointerEvents: 'none' }}
            disabled={props.isDisabled}
            readOnly
            tabIndex='-1'
          />
        )}
        <Text>{props.children}</Text>
      </Stack>
    </components.Option>
  );
};

const option = ({ isMulti, isFocused, isSelected, isDisabled }) => {
  const [backgroundColor, active] = !isMulti
    ? isSelected && isFocused
      ? ['green.40', 'green.50']
      : isSelected && !isFocused
      ? ['green.40', 'green.50']
      : isFocused && !isSelected
      ? ['gray.15', 'gray.20']
      : ['white', 'white']
    : isMulti && isSelected && isFocused
    ? ['gray.15', 'gray.20']
    : isSelected && !isFocused
    ? ['white', 'white']
    : isFocused && !isSelected
    ? ['gray.15', 'gray.20']
    : ['white', 'white'];

  const isDisabledStyles = isDisabled && {
    cursor: 'default',
    color: 'text.subdued',
    backgroundColor: 'white',
    '&:active': {
      color: 'text.subdued',
      backgroundColor: 'white',
    },
  };

  return {
    cursor: 'pointer',
    outline: 'none',
    paddingY: 2,
    color: contrastText(backgroundColor),
    backgroundColor,
    '&:active': {
      backgroundColor: active,
    },
    ...isDisabledStyles,
  };
};

/* Value */

const SingleValue = null;
const singleValue = {
  maxWidth: '100%',
  position: 'relative',
  transform: 'none',

  fontSize: 3,

  paddingY: 1,
};

const ValueContainer = null;
const valueContainer = {
  flexWrap: 'nowrap',
  alignItems: 'center',

  fontSize: 3,
};

/* Icons */

const DownChevron = null;
const CrossIcon = null;

const customSelectComponents = Object.fromEntries(
  Object.entries({
    ClearIndicator,
    Control,
    DropdownIndicator,
    DownChevron,
    CrossIcon,
    Group,
    GroupHeading,
    IndicatorsContainer,
    IndicatorSeparator,
    Input,
    LoadingIndicator,
    Menu,
    MenuList,
    MenuPortal,
    LoadingMessage,
    NoOptionsMessage,
    MultiValue,
    MultiValueContainer,
    MultiValueLabel,
    MultiValueRemove,
    Option,
    Placeholder,
    SelectContainer,
    SingleValue,
    ValueContainer,
  }).map(([key, value]) => {
    return [key, value ?? components[key]];
  })
);

const customSelectComponentStyles = Object.fromEntries(
  Object.entries({
    clearIndicator,
    control,
    dropdownIndicator,
    group,
    groupHeading,
    indicatorsContainer,
    indicatorSeparator,
    input,
    loadingIndicator,
    menu,
    menuList,
    menuPortal,
    loadingMessage,
    noOptionsMessage,
    multiValue,
    multiValueLabel,
    multiValueRemove,
    option,
    placeholder,
    container,
    singleValue,
    valueContainer,
  }).filter(([key, value]) => Boolean(value))
);

const createCustomSelectTheme = ({ colors: { green, gray, red } }) => ({
  borderRadius: 0,
  colors: {
    primary25: green['15'],
    primary50: green['20'],
    primary75: green['30'],
    primary: green['40'],
    danger: red['40'],
    dangerLight: red['30'],
    neutral0: 'white',
    neutral5: gray['10'],
    neutral10: gray['15'],
    neutral20: gray['20'],
    neutral30: gray['30'],
    neutral40: gray['40'],
    neutral50: gray['50'],
    neutral60: gray['60'],
    neutral70: gray['70'],
    neutral80: gray['80'],
    neutral90: gray['90'],
  },
  spacing: {
    baseUnit: 4,
    menuGutter: 4,
    controlHeight: '2.25rem',
  },
});

export { customSelectComponents, customSelectComponentStyles, createCustomSelectTheme };
