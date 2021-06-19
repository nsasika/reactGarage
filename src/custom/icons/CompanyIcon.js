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
    <path fill="currentColor" d="M18 10v28h4v-8h4v8h4V10H18zm24 32H6V26h8V6h4V2h4v4h12v8.683c4.66 1.647 8 6.092 8 11.317v16zm-28-4v-8h-4v8h4zm20 0h4V26a7.997 7.997 0 0 0-4-6.93V38zM22 14h4v4h-4v-4zm0 8h4v4h-4v-4z"/>
  </SvgIcon>
));