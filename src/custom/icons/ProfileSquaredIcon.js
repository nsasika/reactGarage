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
    <path fill="currentColor" d="M10 33.161C14.023 31.126 18.89 30 24 30c5.11 0 9.977 1.126 14 3.161V10H10v23.161zM6 6h36v36H6V6zm18 28c-5.322 0-10.293 1.38-14 3.761V38h28v-.239C34.293 35.38 29.322 34 24 34zm0-11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 4a7 7 0 1 1 0-14 7 7 0 0 1 0 14z"/>
  </SvgIcon>
));