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
    <path fill="currentColor" d="M38 22H10v16h28V22zm-26-4v-2c0-6.627 5.373-12 12-12 3.828 0 7.35 1.799 9.6 4.8l-3.2 2.4A7.962 7.962 0 0 0 24 8a8 8 0 0 0-8 8v2h26v24H6V18h6zm10 12.236a3 3 0 1 1 4 0V33a2 2 0 1 1-4 0v-2.764z"/>
  </SvgIcon>
));