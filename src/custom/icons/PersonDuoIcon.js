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
    <path fill="currentColor" d="M14 28a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13zm0-4a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm18-1a9 9 0 1 1 0-18 9 9 0 0 1 0 18zm0-4a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 10c-3.695 0-7.19 1.255-10 3.509V39h20v-6.491A15.924 15.924 0 0 0 32 29zm14 14H18V30.69l.666-.597A19.93 19.93 0 0 1 32 25a19.93 19.93 0 0 1 13.334 5.093l.666.596V43zm-32-4v4H2v-8.23l.777-.601C6.126 31.579 10.363 30 14 30v4c-2.454 0-5.465 1.036-8 2.769V39h8z"/>
  </SvgIcon>
));