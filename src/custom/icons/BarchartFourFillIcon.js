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
    <path fill="currentColor" d="M6 6h36v36H6V6zm4 24v8h4v-8h-4zm8-12v20h4V18h-4zm16 8v12h4V26h-4zm-8-16v28h4V10h-4z"/>
  </SvgIcon>
));