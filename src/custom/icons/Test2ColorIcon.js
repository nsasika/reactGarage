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
    <path fill="currentColor" d="M19.82 19.76H4.17V4.24h11.18v-2.2H4.17c-1.24 0-2.23.97-2.23 2.2v15.52c0 1.2 1 2.2 2.23 2.2h15.65c1.23 0 2.24-1 2.24-2.2V10.9h-2.23"/><path d="M6.42 10.57L5 12l5 5 9-9-1.4-1.42-7.6 7.6z"/>
  </SvgIcon>
));