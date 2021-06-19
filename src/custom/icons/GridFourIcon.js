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
    <path fill="currentColor" d="M10 26v12h12V26H10zm0-4h12V10H10v12zm28 4H26v12h12V26zm0-4V10H26v12h12zM6 6h36v36H6V6z"/>
  </SvgIcon>
));