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
    <path fill="currentColor" d="M35.461 21.999L22.567 8.785l2.863-2.786 17.571 18-17.571 18-2.863-2.783 12.895-13.217H5.999v-4z"/>
  </SvgIcon>
));