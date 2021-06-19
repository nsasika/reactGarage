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
    <path fill="currentColor" d="M26 6h16v16h-4v-9.172L20.565 30.263l-2.828-2.828L35.172 10H26V6zm8 32V26h4v16H6V10h16v4H10v24h24z"/>
  </SvgIcon>
));