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
    <path fill="currentColor" d="M14 10v28h4V10h-4zm-4-4h12v36H10V6zm20 4v28h4V10h-4zm-4-4h12v36H26V6z"/>
  </SvgIcon>
));