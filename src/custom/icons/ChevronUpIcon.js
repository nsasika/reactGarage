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
    <path fill="currentColor" d="M5.999 31.198l18-17.197 18.002 17.197-2.787 2.803-15.213-14.516L8.783 34.001z"/>
  </SvgIcon>
));