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
    <path fill="currentColor" d="M34 18v8h-4v-8H18v8h-4v-8h-4v20h28V18h-4zm-20-4c.051-5.526 4.503-10 10-10s9.949 4.474 10 10h8v28H6V14h8zm4 0h12c-.05-3.327-2.723-6-6-6s-5.95 2.673-6 6z"/>
  </SvgIcon>
));