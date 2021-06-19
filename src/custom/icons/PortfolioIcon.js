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
    <path fill="currentColor" d="M14 14c.051-5.526 4.503-10 10-10s9.949 4.474 10 10h8v28H6V14h8zm4 0h12c-.05-3.327-2.723-6-6-6s-5.95 2.673-6 6zm20 4H10v4h28v-4zm-28 8v12h28V26H10zm10 4h8v4h-8v-4z"/>
  </SvgIcon>
));