import React from 'react';
import Box from '../Box';

const __css = { display: 'block', flex: '0 0 auto' };

const SvgIcon = React.forwardRef(({ size, height, width, ...props }, ref) => (
  <Box
    ref={ref}
    as='svg'
    xmlns='http://www.w3.org/2000/svg'
    width={size ?? width ?? 24}
    height={size ?? height ?? 24}
    viewBox='0 0 48 48'
    {...props}
    __css={__css}
  />
));

export default SvgIcon;
