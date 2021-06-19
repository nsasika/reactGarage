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
    <path fill="currentColor" d="M26 42v-8h-4v8H6V26h8V6h4V2h4v4h12v8.683c4.66 1.647 8 6.092 8 11.317v16H26zm-4-28v4h4v-4h-4zm0 8v4h4v-4h-4z"/>
  </SvgIcon>
));