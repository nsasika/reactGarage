import React, { forwardRef } from 'react';
import Box from '../Box';

const Paper = forwardRef((props, ref) => (
  <Box
    ref={ref}
    {...props}
    __css={{
      backgroundColor: 'paper.backgroundColor',
      boxShadow: 'paper',
      borderRadius: 'default',
    }}
  />
));

export default Paper;
