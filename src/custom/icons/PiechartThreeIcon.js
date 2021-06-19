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
    <path fill="currentColor" d="M22 39.876V8.124C14.107 9.108 8 15.84 8 24c0 8.16 6.107 14.892 14 15.876zM39.876 26H26v13.876c7.237-.902 12.974-6.639 13.876-13.876zm0-4C38.974 14.763 33.237 9.026 26 8.124V22h13.876zM24 4c11.046 0 20 8.954 20 20s-8.954 20-20 20S4 35.046 4 24 12.954 4 24 4z"/>
  </SvgIcon>
));