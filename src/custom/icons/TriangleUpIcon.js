import React from 'react';
import SvgIcon from '../components/SvgIcon';

export default React.forwardRef((props, ref) => (
  <SvgIcon
    ref={ref}
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 48 48'
    {...props}
  >
    <path fill="currentColor" d="M24,11 L40,36 L8,36 L24,11 Z M24,18.421 L15.309,32 L32.69,32 L24,18.421 Z"/>
  </SvgIcon>
));