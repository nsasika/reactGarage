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
    <path fill="currentColor" d="M27.453 39.626a15.929 15.929 0 0 0 6.143-2.822A13.962 13.962 0 0 0 24 33c-3.643 0-7.045 1.4-9.596 3.804A15.929 15.929 0 0 0 24 40c1.178 0 2.334-.128 3.453-.374zm9.02-5.604A15.933 15.933 0 0 0 40 24c0-8.837-7.163-16-16-16S8 15.163 8 24c0 3.794 1.32 7.28 3.527 10.022A17.94 17.94 0 0 1 24 29a17.94 17.94 0 0 1 12.473 5.022zM24 44C12.954 44 4 35.046 4 24S12.954 4 24 4s20 8.954 20 20-8.954 20-20 20zm0-21a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 4a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"/>
  </SvgIcon>
));