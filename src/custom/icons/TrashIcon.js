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
    <path fill="currentColor" d="M14 14v22.667c0 .736.597 1.333 1.333 1.333h17.334c.736 0 1.333-.597 1.333-1.333V14H14zm-6-4h6V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4h6v4h-2v22.667A5.333 5.333 0 0 1 32.667 42H15.333A5.333 5.333 0 0 1 10 36.667V14H8v-4zm22 0V8H18v2h12zm0 24h-4V18h4v16zm-8 0h-4V18h4v16z"/>
  </SvgIcon>
));