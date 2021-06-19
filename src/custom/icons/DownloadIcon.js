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
    <path fill="currentColor" d="M22 27.46V5.997h4V27.46l9.217-8.894L38 21.429 24 35 10 21.429l2.786-2.863L22 27.46zM38 38v-8h4v12H6V30h4v8h28z"/>
  </SvgIcon>
));