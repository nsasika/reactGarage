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
    <path fill="currentColor" d="M5.999 16.803l2.784-2.802 15.218 14.516 15.213-14.516 2.787 2.802-18.002 17.198z"/>
  </SvgIcon>
));