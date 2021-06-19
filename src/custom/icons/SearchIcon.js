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
    <path fill="currentColor" d="M35.208 32.38l9.206 9.206-2.828 2.828-9.206-9.206A17.426 17.426 0 0 1 21.5 39C11.835 39 4 31.165 4 21.5S11.835 4 21.5 4 39 11.835 39 21.5c0 4.112-1.418 7.893-3.792 10.88zM21.5 35C28.956 35 35 28.956 35 21.5S28.956 8 21.5 8 8 14.044 8 21.5 14.044 35 21.5 35z"/>
  </SvgIcon>
));