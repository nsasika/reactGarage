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
    <path fill="currentColor" d="M6 26h16v16H6V26zM6 6h16v16H6V6zm20 20h16v16H26V26zm0-20h16v16H26V6z"/>
  </SvgIcon>
));