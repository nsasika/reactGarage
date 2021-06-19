import Box from '../Box';
import React, { forwardRef } from 'react';

const Flex = forwardRef(({ __css, ...props }, ref) => (
  <Box
    ref={ref}
    __css={{
      ...__css,
      display: 'flex',
    }}
    {...props}
  />
));

Flex.Row = forwardRef(({ __css, ...props }, ref) => (
  <Box
    ref={ref}
    __css={{
      ...__css,
      display: 'flex',
      flexDirection: 'row',
    }}
    {...props}
  />
));

Flex.Column = forwardRef(({ __css, ...props }, ref) => (
  <Box
    ref={ref}
    __css={{
      ...__css,
      display: 'flex',
      flexDirection: 'column',
    }}
    {...props}
  />
));

export default Flex;
