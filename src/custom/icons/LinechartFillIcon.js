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
    <path fill="currentColor" fill-rule="evenodd" d="M25.663 23.116L34.4 10.8l3.2 2.4-11.263 15.684-5.772-4.81-6.822 11.907-3.486-1.962 9.178-16.093 6.228 5.19zM6 6h36v36H6V6z"/>
  </SvgIcon>
));