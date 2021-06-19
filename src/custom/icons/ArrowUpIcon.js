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
    <path fill="currentColor" d="M22 12.538L8.786 25.431 6 22.569 24 4.997l18 17.571-2.783 2.864L26 12.537V42h-4z"/>
  </SvgIcon>
));