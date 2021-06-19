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
    <path fill="currentColor" d="M24 8.828L8.828 24 24 39.172 39.172 24 24 8.828zm1.414-4.242l18 18a2 2 0 0 1 0 2.828l-18 18a2 2 0 0 1-2.828 0l-18-18a2 2 0 0 1 0-2.828l18-18a2 2 0 0 1 2.828 0zM24 28a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm-2-13h4v11h-4V15z"/>
  </SvgIcon>
));