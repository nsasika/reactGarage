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
    <path fill="currentColor" d="M28 38v4h-8v-4h8zm8-10v4H12v-4h24zm6-10v4H6v-4h36zm0-16v4h4v4h-4v4h-4v-4h-4V6h4V2h4z"/>
  </SvgIcon>
));