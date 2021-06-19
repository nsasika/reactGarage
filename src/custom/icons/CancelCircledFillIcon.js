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
    <path fill="currentColor" d="M24 26.828l6.586 6.586 2.828-2.828L26.828 24l6.586-6.586-2.828-2.828L24 21.172l-6.586-6.586-2.828 2.828L21.172 24l-6.586 6.586 2.828 2.828L24 26.828zM24 4c11.046 0 20 8.954 20 20s-8.954 20-20 20S4 35.046 4 24 12.954 4 24 4z"/>
  </SvgIcon>
));