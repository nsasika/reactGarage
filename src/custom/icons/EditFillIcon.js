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
    <path fill="currentColor" d="M39.184 19.144L28.856 8.816l2.1-2.1a7.303 7.303 0 0 1 10.328 10.328l-2.1 2.1zm-2.828 2.829L16.328 42H6V31.672l20.027-20.028 10.329 10.329z"/>
  </SvgIcon>
));