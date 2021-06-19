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
    <path fill="currentColor" d="M24 44c-5.833-8-14-17.569-14-26.286C10 8.997 17.268 4 24 4s14 4.997 14 13.714S29.833 36 24 44zm0-22a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
  </SvgIcon>
));