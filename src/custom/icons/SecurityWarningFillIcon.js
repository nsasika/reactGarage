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
    <path fill="currentColor" d="M42 6v13c0 10.803-5.795 19.134-17.106 24.789l-.894.447-.894-.447C11.796 38.134 6 29.803 6 19V6h36zM22 26h4V12h-4v14zm2 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  </SvgIcon>
));