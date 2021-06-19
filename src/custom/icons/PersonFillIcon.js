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
    <path fill="currentColor" d="M24 23a9.5 9.5 0 1 1 0-19 9.5 9.5 0 0 1 0 19zm0 3c6.034 0 12.034 1.71 18 5.127V42H6V31.127C11.966 27.71 17.966 26 24 26z"/>
  </SvgIcon>
));