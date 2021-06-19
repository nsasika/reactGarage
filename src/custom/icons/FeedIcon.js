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
    <path fill="currentColor" d="M14 22V6h28v28a8 8 0 0 1-8 8H12a6 6 0 0 1-6-6V22h8zm3.659 16H34a4 4 0 0 0 4-4V10H18v26a5.99 5.99 0 0 1-.341 2zM14 26h-4v10a2 2 0 1 0 4 0V26zm8-12h12v4H22v-4zm0 8h12v4H22v-4zm0 8h12v4H22v-4z"/>
  </SvgIcon>
));