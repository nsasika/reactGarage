import React, { forwardRef } from 'react';
import Box from '../Box';

const Image = forwardRef((props, ref) => (
  <Box as='img' ref={ref} {...props} __css={{ maxWidth: '100%', height: 'auto' }} />
));

export default Image;
