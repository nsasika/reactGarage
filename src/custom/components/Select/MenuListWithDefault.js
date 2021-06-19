import React from 'react';
import { customSelectComponents } from './customComponents';
import Flex from '../Flex';
import Box from '../Box';

const { MenuList } = customSelectComponents;

const MenuListWithDefault = ({ ...listProps }) => {
  const [{ props }, ...children] = React.Children.toArray(listProps.children);

  const { setValue, getValue, isSelected, getStyles, innerRef, innerProps, selectProps } = props;

  console.log(props, innerProps);

  const { fallbackValue = [] } = selectProps;

  const isDisabled = isSelected;

  return (
    <MenuList {...listProps}>
      <Flex
        sx={{
          alignItems: 'center',
          fontSize: 3,
          py: 2,
          borderBottom: '1px solid #ddd',
        }}
      >
        <Box
          ref={innerRef}
          {...innerProps}
          onClick={() => setValue(fallbackValue)}
          sx={{
            ...getStyles('option', {
              ...props,
              isDisabled,
            }),
          }}
        >
          {fallbackValue[0].label}
        </Box>
      </Flex>
      {children}
    </MenuList>
  );
};

export default MenuListWithDefault;
