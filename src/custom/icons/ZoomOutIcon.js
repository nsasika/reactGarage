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
    <path fill="currentColor" d="M36.064 33.235l8.35 8.35-2.828 2.83-8.35-8.351A17.924 17.924 0 0 1 22 40c-9.941 0-18-8.059-18-18S12.059 4 22 4s18 8.059 18 18c0 4.25-1.473 8.156-3.936 11.235zM22 36c7.732 0 14-6.268 14-14S29.732 8 22 8 8 14.268 8 22s6.268 14 14 14zm8-16v4H14v-4h16z"/>
  </SvgIcon>
));