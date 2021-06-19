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
    <path fill="currentColor" d="M25 8.012L28 4l7 3v5c.342.313.686.658 1 1h5l3 7-4.011 3v2L44 28l-3 7h-5c-.313.342-.658.686-1 1v5l-7 3-3-4h-2l-3 4-7-3v-5a16.443 16.443 0 0 1-1-1H7l-3-7 4-3v-2l-4-3 3-7h5c.313-.342.658-.686 1-1V7l7-3 3 4.012h2zM16 24a8 8 0 1 0 16 0 8 8 0 0 0-16 0z"/>
  </SvgIcon>
));