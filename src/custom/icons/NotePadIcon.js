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
    <path fill="currentColor" d="M34 10v4h-4v-4h-4v4h-4v-4h-4v4h-4v-4h-4v28h28V10h-4zm-4-4V2h4v4h8v36H6V6h8V2h4v4h4V2h4v4h4zM14 22h20v4H14v-4zm0 8h20v4H14v-4z"/>
  </SvgIcon>
));