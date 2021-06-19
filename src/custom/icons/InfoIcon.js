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
    <path fill="currentColor" d="M24 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm-2 31V15h4v27h-4z"/>
  </SvgIcon>
));