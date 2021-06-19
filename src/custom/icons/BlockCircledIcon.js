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
    <path fill="currentColor" d="M36.418 13.91L13.91 36.418A15.934 15.934 0 0 0 24 40c8.837 0 16-7.163 16-16 0-3.825-1.342-7.337-3.582-10.09zm-2.89-2.766A15.929 15.929 0 0 0 24 8C15.163 8 8 15.163 8 24c0 3.57 1.169 6.866 3.144 9.527l22.383-22.383zM24 44C12.954 44 4 35.046 4 24S12.954 4 24 4s20 8.954 20 20-8.954 20-20 20z"/>
  </SvgIcon>
));