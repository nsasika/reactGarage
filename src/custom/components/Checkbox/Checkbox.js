import React, { forwardRef, useRef, useEffect } from 'react';
import Box from '../Box';
import boxShadow from '../../style-helpers/boxShadow';
import { CheckSquaredFillIcon, RemoveSquaredFillIcon, RemoveSquaredIcon } from '../../icons';
import Flex from '../Flex';
import Label from '../Label';
import merge from '../../utils/merge';

const CheckboxIndeterminate = ({ size, color, ...props }) => (
  <RemoveSquaredFillIcon
    height={size}
    width={size}
    viewBox='6 6 36 36'
    sx={{
      cursor: 'pointer',
      color: `${color}.30`,
      display: 'block',
      'input:disabled ~ &': {
        color: 'gray.20',
        backgroundColor: 'white',
        cursor: 'default',
        boxShadow: 'none',
      },
      '&:hover': {
        color: `${color}.40`,
        borderColor: 'transparent',
        boxShadow: boxShadow('0 0 0 2px', `${color}.30`),
      },
    }}
    {...props}
  />
);

const CheckboxChecked = ({ size, color, ...props }) => (
  <CheckSquaredFillIcon
    height={size}
    width={size}
    viewBox='6 6 36 36'
    sx={{
      cursor: 'pointer',
      position: 'relative',
      backgroundColor: 'white',

      display: 'none',
      'input:checked ~ &': {
        display: 'block',
        color: `${color}.40`,
      },
      'input:focus ~ &': {
        borderColor: 'transparent',
        boxShadow: boxShadow('0 0 0 2px', `${color}.30`),
      },
      'input:disabled ~ &': {
        color: 'gray.30',
        backgroundColor: 'white',
        cursor: 'default',
        boxShadow: '0 0 0 2px transparent',
      },
      '&:hover': {
        color: `${color}.50`,
        backgroundColor: 'white',
        borderColor: 'transparent',
        boxShadow: boxShadow('0 0 0 2px', `${color}.30`),
      },
    }}
    {...props}
  />
);

const CheckboxUnchecked = ({ size, color, ...props }) => (
  <Box
    {...props}
    __css={{
      height: `${size}px`,
      width: `${size}px`,

      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'gray.20',

      backgroundColor: 'white',

      position: 'relative',
      cursor: 'pointer',

      display: 'block',
      'input:checked ~ &': {
        display: 'none',
      },
      'input:focus ~ &': {
        borderColor: 'transparent',
        boxShadow: boxShadow('0 0 0 2px', `${color}.30`),
      },
      'input:disabled ~ &': {
        borderColor: 'gray.15',
        backgroundColor: 'gray.15',
        cursor: 'default',
        boxShadow: '0 0 0 2px transparent',
      },
      '&:hover': {
        borderColor: 'transparent',
        boxShadow: boxShadow('0 0 0 2px', `${color}.30`),
      },
    }}
  />
);

const CheckboxIcon = ({ indeterminate, ...props }) => {
  return indeterminate ? (
    <CheckboxIndeterminate {...props} />
  ) : (
    <>
      <CheckboxChecked {...props} />
      <CheckboxUnchecked {...props} />
    </>
  );
};

const CheckboxInput = forwardRef(({ ...props }, ref) => (
  <Box
    ref={ref}
    as='input'
    type='checkbox'
    {...props}
    __css={{
      position: 'absolute',
      opacity: 0,
      zIndex: -1,
      width: '1px',
      height: '1px',
      overflow: 'hidden',
    }}
  />
));

const Checkbox = forwardRef(
  (
    {
      sx = {},
      size = '16',
      color = 'green',
      indeterminate,
      checked,
      defaultChecked,
      onChange,
      disabled,
      ...props
    },
    ref
  ) => {
    const defaultRef = useRef();
    const resolvedRef = ref || defaultRef;

    useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <Flex as='label' sx={merge({ flex: '0 0 auto' }, sx)} {...props}>
        <CheckboxInput
          ref={resolvedRef}
          checked={checked}
          defaultChecked={defaultChecked}
          indeterminate={indeterminate}
          onChange={onChange}
          disabled={disabled}
        />
        <CheckboxIcon aria-hidden='true' size={size} color={color} indeterminate={indeterminate} />
      </Flex>
    );
  }
);

export default Checkbox;

/**
 * Tricky way to create a custom checkbox without svg:
 */

/*

const styles = ({ theme, variant = 'default', size = 1.5 }) => {
  const { colors } = theme;

  const variants = {
    default: {
      primaryColor: colors.green,
      secondaryColor: colors.neutral,
    },
    error: {
      primaryColor: colors.red,
      secondaryColor: colors.red,
    },
  };

  const { primaryColor, secondaryColor } = variants[variant];

  return {
    position: 'absolute',
    opacity: 0,
    zIndex: '-1',
    width: '1',
    height: '1',
    overflow: 'hidden',
    pointerEvents: 'none',
    '& + div': {
      display: 'inline-flex',

      position: 'relative',
      alignItems: 'center',
      flexShrink: '0',

      width: `${size}rem`,
      height: `${size}rem`,

      lineHeight: '1',
      outline: 'none',

      userSelect: 'none',

      '::before': {
        display: 'inline-block',
        content: '""',
        flexShrink: '0',

        height: `${size * 0.9167}rem`,
        width: `${size * 0.9167}rem`,

        margin: '0',

        borderWidth: `${size * 0.041666667}rem`,
        borderStyle: 'solid',
        borderColor: secondaryColor['30'],
      },
      '::after': {
        content: 'none',
        flexShrink: '0',

        width: `${size * 0.20833}rem`,
        height: `${size * 0.45833}rem`,

        position: 'absolute',
        top: `${size * 0.15}rem`,
        left: `${size * 0.345}rem`,

        border: 'solid white',
        borderWidth: '0px 2px 2px 0px',

        transform: 'rotate(40deg)',

        color: '#ffffff',

        opacity: '0',
        transition: 'opacity 0.1s',
      },
    },
    '&:checked + div': {
      '::before': {
        backgroundColor: primaryColor['40'],
        borderColor: primaryColor['40'],
      },
      '::after': {
        content: '""',
        opacity: '1',
      },
    },
    '&:focus + div,&:active + div': {
      '::before': {
        height: `${size * 0.9167}rem`,
        width: `${size * 0.9167}rem`,

        margin: '0px',

        boxShadow: boxShadow('0 0 0 2px', primaryColor['30']),
        borderWidth: `${size * 0.041666667}rem`,
        borderColor: 'transparent',
      },
      '::after': {},
    },
    '&:focus:checked + div, &:active:checked + div': {
      '::before': {
        height: `${size * 0.9167}rem`,
        width: `${size * 0.9167}rem`,

        margin: '0px',

        boxShadow: boxShadow('0 0 0 2px', primaryColor['30']),
        borderWidth: `${size * 0.041666667}rem`,
        borderColor: 'transparent',
      },
      '::after': {},
    },
    '&:disabled + div': {
      '::before': {
        height: `${size * 0.9167}rem`,
        width: `${size * 0.9167}rem`,

        margin: `${size * 0.041666667}rem`,

        backgroundColor: 'gray.15',

        borderWidth: `${size * 0.041666667}rem`,
        borderStyle: 'solid',
        borderColor: 'gray.15',
      },
      '::after': {},
    },
    '&:disabled:checked + div': {
      '::before': {
        height: `${size * 0.9167}rem`,
        width: `${size * 0.9167}rem`,

        margin: `${size * 0.041666667}rem`,

        backgroundColor: colors['neutral']['30'],

        borderWidth: `${size * 0.041666667}rem`,
        borderColor: colors['neutral']['30'],
      },
      '::after': {},
    },
  };
};

const Checkbox = forwardRef(({ sx = {}, ...props }, ref) => {
  return (
    <Flex as='label' sx={sx} __css={{ alignItems: 'center', cursor: 'pointer' }}>
      <Box ref={ref} as='input' type='checkbox' {...props} __css={styles} />
      <Box />
    </Flex>
  );
});

*/
