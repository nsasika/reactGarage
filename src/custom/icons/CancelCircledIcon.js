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
    <path fill="currentColor" d="M21.172 24l-6.586-6.586 2.828-2.828L24 21.172l6.586-6.586 2.828 2.828L26.828 24l6.586 6.586-2.828 2.828L24 26.828l-6.586 6.586-2.828-2.828L21.172 24zM24 8C15.163 8 8 15.163 8 24s7.163 16 16 16 16-7.163 16-16S32.837 8 24 8zm0-4c11.046 0 20 8.954 20 20s-8.954 20-20 20S4 35.046 4 24 12.954 4 24 4z"/>
  </SvgIcon>
));