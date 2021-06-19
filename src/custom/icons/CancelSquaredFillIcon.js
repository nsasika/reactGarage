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
    <path fill="currentColor" d="M6 6h36v36H6V6zm15.17 18l-6.58 6.59 2.82 2.82L24 26.83l6.59 6.58 2.82-2.82L26.83 24l6.58-6.59-2.82-2.82L24 21.17l-6.59-6.58-2.82 2.82L21.17 24z"/>
  </SvgIcon>
));