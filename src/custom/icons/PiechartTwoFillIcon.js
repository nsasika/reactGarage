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
    <path fill="currentColor" d="M22 4.099V26h21.901C42.898 36.107 34.371 44 24 44 12.954 44 4 35.046 4 24 4 13.63 11.893 5.102 22 4.099zm4 0C35.449 5.037 42.963 12.55 43.901 22H26V4.099z"/>
  </SvgIcon>
));