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
    <path fill="currentColor" d="M6 26h4v16H6V26zm8-12h4v28h-4V14zm16 8h4v20h-4V22zM22 6h4v36h-4V6zm16 8h4v28h-4V14z"/>
  </SvgIcon>
));