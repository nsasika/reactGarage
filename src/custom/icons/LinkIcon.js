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
    <path fill="currentColor" d="M26 18v-4h8c5.523 0 10 4.477 10 10s-4.477 10-10 10h-8v-4h8a6 6 0 1 0 0-12h-8zm-4 0h-8a6 6 0 1 0 0 12h8v4h-8C8.477 34 4 29.523 4 24s4.477-10 10-10h8v4zm-8 8v-4h20v4H14z"/>
  </SvgIcon>
));