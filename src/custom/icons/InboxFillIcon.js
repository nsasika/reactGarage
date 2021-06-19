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
    <path fill="currentColor" d="M42 25H28v2a4 4 0 1 1-8 0v-2H6V6h36v19zm0 4v13H6V29h10.252a8.003 8.003 0 0 0 15.496 0H42z"/>
  </SvgIcon>
));