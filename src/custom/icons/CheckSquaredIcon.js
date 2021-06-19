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
    <path fill="currentColor" d="M31.586 16.586l2.828 2.828L20.5 33.328l-6.914-6.914 2.828-2.828 4.086 4.086 11.086-11.086zM10 10v28h28V10H10zM6 6h36v36H6V6z"/>
  </SvgIcon>
));