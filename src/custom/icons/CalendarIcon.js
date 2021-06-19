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
    <path fill="currentColor" d="M10 18h28v-8h-4v4h-4v-4H18v4h-4v-4h-4v8zm0 4v16h28V22H10zM34 6h8v36H6V6h8V2h4v4h12V2h4v4z"/>
  </SvgIcon>
));