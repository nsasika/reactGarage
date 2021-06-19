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
    <path fill="currentColor" d="M10 20H6v-7.716L24 5.14l18 7.143V20h-4v18h4v4H6v-4h4V20zm4 0v18h4V20h-4zm8 0v18h4V20h-4zm8 0v18h4V20h-4zm8-4v-1L24 9.444 10 15v1h28z"/>
  </SvgIcon>
));