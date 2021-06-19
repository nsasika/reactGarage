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
    <path fill="currentColor" d="M12 18v-2c0-6.627 5.373-12 12-12s12 5.373 12 12v2h6v24H6V18h6zm4 0h16v-2a8 8 0 1 0-16 0v2zm6 12.236a3 3 0 1 1 4 0V33a2 2 0 1 1-4 0v-2.764z"/>
  </SvgIcon>
));