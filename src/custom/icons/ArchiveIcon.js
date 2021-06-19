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
    <path fill="currentColor" d="M8 14h32v-4H8v4zm34 4v24H6V18H4V6h40v12h-2zm-4 0H10v20h28V18zm-20 4h12v4H18v-4z"/>
  </SvgIcon>
));