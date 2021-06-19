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
    <path fill="currentColor" fill-rule="evenodd" d="M42 6v13c0 10.803-5.795 19.134-17.106 24.789l-.894.447-.894-.447C11.796 38.134 6 29.803 6 19V6h36zm-11.414 9.586l2.828 2.828L21.5 30.328l-6.914-6.914 2.828-2.828 4.086 4.086 9.086-9.086z"/>
  </SvgIcon>
));