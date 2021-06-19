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
    <path fill="currentColor" d="M10 10v28h28V10H10zM6 6h36v36H6V6zm16 16v-8h4v8h8v4h-8v8h-4v-8h-8v-4h8z"/>
  </SvgIcon>
));