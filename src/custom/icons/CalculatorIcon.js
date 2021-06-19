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
    <path fill="currentColor" d="M10 18v20h28V18H10zM6 6h36v36H6V6zm4 4v4h28v-4H10zm6 17a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm8 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm8 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm-16 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm8-6h8a3 3 0 0 1 0 6h-8a3 3 0 0 1 0-6z"/>
  </SvgIcon>
));