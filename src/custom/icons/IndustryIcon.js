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
    <path fill="currentColor" d="M42 15v27H6V6h12v15l8-6v6l8-6v6l8-6zm-4 23V23l-8 6v-6l-8 6v-6l-8 6V10h-4v28h28z"/>
  </SvgIcon>
));