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
    <path fill="currentColor" d="M25.414 4.586l18 18a2 2 0 0 1 0 2.828l-18 18a2 2 0 0 1-2.828 0l-18-18a2 2 0 0 1 0-2.828l18-18a2 2 0 0 1 2.828 0zM22 27h4V12h-4v15zm2 9a3 3 0 0 0 0-6 3 3 0 0 0 0 6z"/>
  </SvgIcon>
));