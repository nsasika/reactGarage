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
    <path fill="currentColor" d="M10 25h10v2a4 4 0 1 0 8 0v-2h10V10H10v15zm0 4v9h28v-9h-6.252a8.003 8.003 0 0 1-15.496 0H10zm32 13H6V6h36v36z"/>
  </SvgIcon>
));