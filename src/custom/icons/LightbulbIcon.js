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
    <path fill="currentColor" d="M24 9c7.732 0 14 6.268 14 14 0 4.757-2.373 8.96-5.999 11.49L32 40a8 8 0 01-15.996.25L16 40v-5.51c-3.627-2.53-6-6.733-6-11.49 0-7.732 6.268-14 14-14zm4 28h-8v3a4 4 0 003.597 3.98l.203.015.2.005a4 4 0 003.995-3.8L28 40v-3zm-4-24c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm24 9v4h-6v-4h6zM6 22v4H0v-4h6zM39.556 5.615l2.829 2.829-4.243 4.242-2.828-2.828 4.242-4.243zm-31.112 0l4.242 4.243-2.828 2.828-4.243-4.242 2.829-2.829zM26 0v6h-4V0h4z"/>
  </SvgIcon>
));