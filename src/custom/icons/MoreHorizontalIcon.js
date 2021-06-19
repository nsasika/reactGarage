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
    <path fill="currentColor" d="M11 20a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm13 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm13 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"/>
  </SvgIcon>
));