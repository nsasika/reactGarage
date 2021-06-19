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
    <path fill="currentColor" d="M39.876 26H22V8.124C14.107 9.108 8 15.84 8 24c0 8.837 7.163 16 16 16 8.16 0 14.892-6.107 15.876-14zm0-4C38.974 14.763 33.237 9.026 26 8.124V22h13.876zM24 4c11.046 0 20 8.954 20 20s-8.954 20-20 20S4 35.046 4 24 12.954 4 24 4z"/>
  </SvgIcon>
));