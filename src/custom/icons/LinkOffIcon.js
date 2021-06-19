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
    <path fill="currentColor" d="M20 14V6h4v36h-4v-8h-6C8.477 34 4 29.523 4 24s4.477-10 10-10h6zm0 16v-4h-6v-4h6v-4h-6a6 6 0 1 0 0 12h6zm8-12v-4h6c5.523 0 10 4.477 10 10s-4.477 10-10 10h-6v-4h6a6 6 0 1 0 0-12h-6zm6 8h-6v-4h6v4z"/>
  </SvgIcon>
));