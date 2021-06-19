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
    <path fill="currentColor" d="M24 44C12.954 44 4 35.046 4 24S12.954 4 24 4s20 8.954 20 20-8.954 20-20 20zm-12.473-9.978A15.97 15.97 0 0 0 24 40a15.97 15.97 0 0 0 12.473-5.978A17.94 17.94 0 0 0 24 29a17.94 17.94 0 0 0-12.473 5.022zM24 25a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"/>
  </SvgIcon>
));