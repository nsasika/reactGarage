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
    <polygon fill="currentColor" points="22 35.46 22 5.997 26 5.997 26 35.46 39.217 22.566 42 25.429 24 43 6 25.429 8.786 22.566"/>
  </SvgIcon>
));