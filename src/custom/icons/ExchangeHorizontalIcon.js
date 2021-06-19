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
    <path fill="currentColor" d="M37.343 16H6v-4h31.343l-6.171-6.172L34 3l11 11-11 11-2.828-2.828L37.343 16zM10.657 32H42v4H10.657l6.171 6.172L14 45 3 34l11-11 2.828 2.828L10.657 32z"/>
  </SvgIcon>
));