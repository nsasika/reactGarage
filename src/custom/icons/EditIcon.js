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
    <path fill="currentColor" d="M41.284 17.044L16.328 42H6V31.672L30.956 6.716a7.303 7.303 0 0 1 10.328 10.328zm-7.5-7.5L31.828 11.5l4.672 4.672 1.956-1.956a3.303 3.303 0 1 0-4.672-4.672zM29 14.328l-19 19V38h4.672l19-19L29 14.328z"/>
  </SvgIcon>
));