import React from 'react';
import Box from '../Box';

const variants = {
  primary: {
    color: 'text.inverse',
    backgroundColor: 'gray.100',
  },
  secondary: {
    color: 'text.default',
    backgroundColor: 'white',
  },
};

const styles = variant => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',

  height: '3rem',
  paddingX: 4,

  ...variants[variant],
});

const Navbar = ({ variant = 'primary', ...props }) => <Box {...props} __css={styles(variant)} />;

export default Navbar;
