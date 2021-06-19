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
    <path fill="currentColor" d="M40,12 L24,37 L8,12 L40,12 Z M32.69,16 L15.309,16 L24,29.578 L32.69,16 Z"/>
  </SvgIcon>
));