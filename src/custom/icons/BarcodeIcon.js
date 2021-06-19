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
    <path fill="currentColor" d="M6 12h4v24H6V12zm8 0h4v16h-4V12zm8 0h4v16h-4V12zm8 0h4v16h-4V12zM14 32h4v4h-4v-4zm8 0h4v4h-4v-4zm8 0h4v4h-4v-4zm8-20h4v24h-4V12z"/>
  </SvgIcon>
));