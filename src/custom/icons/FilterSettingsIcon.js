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
    <path fill="currentColor" d="M37.659 35H42v4h-4.341a6.002 6.002 0 0 1-11.318 0H6v-4h20.341a6.002 6.002 0 0 1 11.318 0zM32 35a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM10.341 22a6.002 6.002 0 0 1 11.318 0H42v4H21.659a6.002 6.002 0 0 1-11.318 0H6v-4h4.341zM16 22a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM37.659 9H42v4h-4.341a6.002 6.002 0 0 1-11.318 0H6V9h20.341A6.002 6.002 0 0 1 37.66 9zM32 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
  </SvgIcon>
));