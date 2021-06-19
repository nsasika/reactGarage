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
    <path fill="currentColor" d="M12.539 21.999h29.462v4H12.538l12.895 13.217-2.863 2.783-17.571-18 17.571-18 2.863 2.786z"/>
  </SvgIcon>
));