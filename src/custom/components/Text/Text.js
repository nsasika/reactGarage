import React, { forwardRef } from 'react';
import Box from '../Box';

const variants = {
  heading: {
    fontFamily: 'default',
    lineHeight: 'heading',
    fontWeight: 'bold',
    fontSize: 'heading',
  },
  body: {
    fontFamily: 'default',
    lineHeight: 'body',
    fontWeight: 'normal',
    fontSize: 'body',
  },
};

const Text = forwardRef(({ variant = 'body', ...props }, ref) => (
  <Box as='span' ref={ref} {...props} __css={variants[variant]} />
));

export default Text;
