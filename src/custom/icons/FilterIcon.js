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
    <path fill="currentColor" d="M13.268 10L22 21v17h4V21l8.732-11H13.268zM18 22.421L5 6h38L30 22.421V42H18V22.421z"/>
  </SvgIcon>
));