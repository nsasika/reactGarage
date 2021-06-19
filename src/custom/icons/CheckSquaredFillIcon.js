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
    <path fill="currentColor" d="M6 6h36v36H6V6zm25.586 10.586L20.5 27.672l-4.086-4.086-2.828 2.828 6.914 6.914 13.914-13.914-2.828-2.828z"/>
  </SvgIcon>
));