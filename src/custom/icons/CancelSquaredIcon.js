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
    <path fill="currentColor" d="M10 10v28h28V10H10zM6 6h36v36H6V6zm15.172 18l-6.586-6.586 2.828-2.828L24 21.172l6.586-6.586 2.828 2.828L26.828 24l6.586 6.586-2.828 2.828L24 26.828l-6.586 6.586-2.828-2.828L21.172 24z"/>
  </SvgIcon>
));