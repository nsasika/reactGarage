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
    <path fill="currentColor" d="M18 4.916v4.247C12.136 11.537 8 17.285 8 24c0 8.837 7.163 16 16 16s16-7.163 16-16c0-6.715-4.136-12.463-10-14.837V4.916C38.114 7.464 44 15.045 44 24c0 11.046-8.954 20-20 20S4 35.046 4 24C4 15.045 9.886 7.464 18 4.916zM22 4h4v22h-4V4z"/>
  </SvgIcon>
));