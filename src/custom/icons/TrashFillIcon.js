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
    <path fill="currentColor" d="M38 14H8v-4h6V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4h6v4h-2zm0 4v18.667A5.333 5.333 0 0 1 32.667 42H15.333A5.333 5.333 0 0 1 10 36.667V18h28zm-8-8V8H18v2h12z"/>
  </SvgIcon>
));