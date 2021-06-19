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
    <path fill="currentColor" d="M14 16h20v4H14v-4zm0 8h20v4H14v-4zm10 14.665L27.798 34H38V10H10v24h10.2l3.8 4.665zM6 6h36v32H29.7L24 45l-5.7-7H6V6z"/>
  </SvgIcon>
));