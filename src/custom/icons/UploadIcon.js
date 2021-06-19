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
    <path fill="currentColor" d="M22 12.538l-9.214 8.893L10 18.57 24 4.997l14 13.571-2.783 2.864L26 12.537V34h-4V12.538zM38 38v-8h4v12H6V30h4v8h28z"/>
  </SvgIcon>
));