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
    <path fill="currentColor" d="M17 38v-8h-6v8h6zm0-12V16h10V6h14v36H7V26h10zm4-6v18h6V20h-6zm10 18h6V10h-6v28z"/>
  </SvgIcon>
));