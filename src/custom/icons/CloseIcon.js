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
    <path fill="currentColor" d="M21 24L11 14l3-3 10 10 10-10 3 3-10 10 10 10-3 3-10-10-10 10-3-3z"/>
  </SvgIcon>
));