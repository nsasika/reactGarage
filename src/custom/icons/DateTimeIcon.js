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
    <path fill="currentColor" d="M17 42H6V6h8V2h4v4h12V2h4v4h8v11h-4v-7h-4v4h-4v-4H18v4h-4v-4h-4v28h7v4zm15 0c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm0 4c-7.732 0-14-6.268-14-14s6.268-14 14-14 14 6.268 14 14-6.268 14-14 14zm2-16h4v4h-8v-8h4v4z"/>
  </SvgIcon>
));