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
    <path fill="currentColor" d="M27.657 10l-17 17L21 37.343l17-17V10H27.657zM42 6v16L21 43 5 27 26 6h16zM31 20a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
  </SvgIcon>
));