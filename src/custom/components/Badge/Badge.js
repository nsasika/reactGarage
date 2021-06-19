import React, { forwardRef } from 'react';
import Box from '../Box';
import Flex from '../Flex';

const Badge = forwardRef(({ variant, size, ...props }, ref) => (
  <Flex
    ref={ref}
    {...props}
    __css={{
      borderRadius: '10px',
      paddingY: 0,
      paddingX: 2,
      backgroundColor: 'gray.20',
      userSelect: 'none',
    }}
  />
));

export default Badge;
