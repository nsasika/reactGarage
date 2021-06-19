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
    <path fill="currentColor" d="M18 38V24h12v14h8V20.956L24 10.067l-14 10.89V38h8zm6-33l18 14v23H6V19L24 5zm-2 23v10h4V28h-4z"/>
  </SvgIcon>
));