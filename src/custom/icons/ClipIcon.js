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
    <path fill="currentColor" d="M34 13h4v17c0 7.732-6.268 14-14 14s-14-6.268-14-14V14c0-5.523 4.477-10 10-10s10 4.477 10 10v16a6 6 0 1 1-12 0V13h4v17a2 2 0 1 0 4 0V14a6 6 0 1 0-12 0v16c0 5.523 4.477 10 10 10s10-4.477 10-10V13z"/>
  </SvgIcon>
));