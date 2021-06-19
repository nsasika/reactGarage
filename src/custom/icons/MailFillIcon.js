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
    <path fill="currentColor" d="M7.622 10h32.756L24 23.423 7.622 10zM42 13.894V38H6V13.894l18 14.683 18-14.683z"/>
  </SvgIcon>
));