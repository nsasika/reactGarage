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
    <path fill="currentColor" d="M35 13.002h-7.343L31 16.345l-2.828 2.828L20 11.002l8.172-8.172L31 5.658l-3.343 3.344H35L39 9v17h-4V13.002zM11 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 4a7 7 0 1 1 0-14 7 7 0 0 1 0 14zM9 39.002V22h4v13.002h7.343L17 31.658l2.828-2.828L28 37.002l-8.172 8.171L17 42.345l3.343-3.343H9zM37 34a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-4a7 7 0 1 1 0 14 7 7 0 0 1 0-14z"/>
  </SvgIcon>
));