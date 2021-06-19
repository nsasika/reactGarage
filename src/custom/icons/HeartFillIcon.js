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
    <path fill="currentColor" d="M21.234 9.26L24 11.947l2.766-2.687c4.186-3.278 10.256-2.99 14.11.864 4.165 4.166 4.165 10.92 0 15.085A8924.166 8924.166 0 0 1 24 42 8924.14 8924.14 0 0 1 7.124 25.21c-4.165-4.166-4.165-10.92 0-15.086 3.854-3.854 9.924-4.142 14.11-.864z"/>
  </SvgIcon>
));