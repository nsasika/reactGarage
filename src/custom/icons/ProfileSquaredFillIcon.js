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
    <path fill="currentColor" d="M6 6h36v36H6V6zm4 27.058V38h28v-4.408C33.924 31.29 28.85 30 23.5 30c-4.915 0-9.6 1.087-13.5 3.058zM24 27a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"/>
  </SvgIcon>
));