import React, { forwardRef } from 'react';
import Box from '../Box';
import boxShadow from '../../style-helpers/boxShadow';
import contrastText from '../../style-helpers/contrastText';
import merge from '../../utils/merge';

export const styles = ({
  theme,
  variant = 'solid',
  size = 'normal',
  emphasis = 'primary',
  customColor,
}) => {
  const color = customColor ?? emphasis;

  return merge(
    {
      flex: '0 0 auto',

      appearance: 'none',

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      textAlign: 'center',
      textDecoration: 'none',

      borderWidth: '1px',
      borderStyle: 'solid',
      borderRadius: 1,

      cursor: 'pointer',
      userSelect: 'none',

      transition: 'background-color 0.05s, color 0.05s, border-color 0.05s',

      fontFamily: 'default',
      fontSize: 'body',
      fontWeight: 'default',

      '&:focus': {
        outline: 'none',
        zIndex: '1',
        borderColor: 'transparent',
        boxShadow: boxShadow('button.focus', `${color}.30`),
      },
      '& > *': {
        cursor: 'pointer',
      },
      '&:disabled, &:disabled > *': {
        cursor: 'default',
      },
    },
    /* variants: solid, outlined, subtle, link */
    {
      solid: {
        color: contrastText(color, 40),
        backgroundColor: `${color}.40`,
        borderColor: 'transparent',
        '&:hover': {
          backgroundColor: `${color}.50`,
        },
        '&:active': {
          color: contrastText(color, 60),
          backgroundColor: `${color}.60`,
        },
        '&:disabled': {
          color: 'text.subdued',
          backgroundColor: 'gray.15',
        },
      },
      outlined: {
        color: `${color}.40`,
        backgroundColor: 'transparent',
        borderColor: `${color}.40`,
        '&:hover': {
          color: contrastText(color, 40),
          backgroundColor: `${color}.40`,
        },
        '&:active': {
          color: contrastText(color, 60),
          backgroundColor: `${color}.60`,
        },
        '&:disabled': {
          color: 'text.subdued',
          borderColor: 'gray.20',
          backgroundColor: 'transparent',
        },
      },
      subtle: {
        color: `${color}.40`,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        '&:hover': {
          color: contrastText(color, 40),
          backgroundColor: `${color}.40`,
        },
        '&:active': {
          color: contrastText(color, 60),
          backgroundColor: `${color}.60`,
        },
        '&:disabled': {
          color: 'text.subdued',
          backgroundColor: 'white',
        },
      },
      link: {
        color: `${color}.40`,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        '&:focus': {
          boxShadow: boxShadow(`button.focus`, `${color}.30`),
        },
        '&:hover': {
          color: `${color}.50`,
          textDecoration: 'underline',
        },
        '&:active': {
          color: `${color}.50`,
          textDecoration: 'underline',
        },
        '&:disabled': {
          color: 'text.default',
          textDecoration: 'none',
        },
      },
      unstyled: {
        border: 'none',
      },
    }[variant],
    /* sizes: normal, compact */
    {
      normal: {
        paddingRight: 3,
        paddingLeft: 3,
        paddingTop: 1,
        paddingBottom: 1,

        height: 'auto',
        minHeight: '2.25rem',
        minWidth: '2.25rem',
      },
      compact: {
        paddingRight: 1,
        paddingLeft: 1,
        paddingTop: '2px',
        paddingBottom: '2px',

        height: 'auto',
        minHeight: 'auto',
        minWidth: 'auto',
      },
    }[size]
  );
};

const Button = forwardRef((props, ref) => <Box ref={ref} as='button' {...props} __css={styles} />);

export default Button;
