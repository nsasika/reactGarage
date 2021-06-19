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
    <path fill="currentColor" d="M43.901 25.901C42.963 35.351 35.45 42.864 26 43.802v-17.9h17.901zm0-4H26V4c9.449.938 16.963 8.452 17.901 17.901zM22 4v39.802c-10.107-1.003-18-9.53-18-19.9C4 13.53 11.893 5.002 22 4z"/>
  </SvgIcon>
));