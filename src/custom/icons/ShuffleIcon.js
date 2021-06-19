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
    <path fill="currentColor" d="M22.92 24l6.137 9h6.286L32 29.657l2.828-2.829L43 35l-8.172 8.172L32 40.343 35.343 37h-8.4l-15-22H6v-4h8.057l6.443 9.45L26.943 11h8.4L32 7.657l2.828-2.829L43 13l-8.172 8.172L32 18.343 35.343 15h-6.286l-6.136 9zM18 31.217L14.057 37H6v-4h5.943l3.636-5.333L18 31.217z"/>
  </SvgIcon>
));