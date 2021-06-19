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
    <path fill="currentColor" d="M32 37.343V6h4v31.343l6.172-6.171L45 34 34 45 23 34l2.828-2.828L32 37.343zM16 10.657V42h-4V10.657l-6.172 6.171L3 14 14 3l11 11-2.828 2.828L16 10.657z"/>
  </SvgIcon>
));