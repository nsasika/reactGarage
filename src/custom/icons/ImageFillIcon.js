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
    <path fill="currentColor" d="M42 6v36H6V6h36zm-4 4H10v18l8-8 8 8 5-5 7 7V10zm-7 4a3 3 0 110 6 3 3 0 010-6z"/>
  </SvgIcon>
));