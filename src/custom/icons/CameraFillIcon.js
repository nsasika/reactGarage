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
    <path fill="currentColor" d="M28 8c2.1422 0 3.89108 1.68397 3.9951 3.80036L32 12h10v28H6V12h10c0-2.20914 1.79086-4 4-4h8zm-4 11c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zm0 4c1.65685 0 3 1.34315 3 3s-1.34315 3-3 3-3-1.34315-3-3 1.34315-3 3-3zm10-5c-1.10457 0-2 .89543-2 2s.89543 2 2 2 2-.89543 2-2-.89543-2-2-2z"/>
  </SvgIcon>
));