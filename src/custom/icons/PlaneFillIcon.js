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
    <path fill="currentColor" d="M4 15h3.5l4 5H22L15 6h7l10.5 14H39c3 0 5 2 5 4s-2 4-5 4h-6.5L22 42h-7l7-14H11.5l-4 5H4l2-9-2-9z"/>
  </SvgIcon>
));