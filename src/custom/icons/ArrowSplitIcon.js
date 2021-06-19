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
    <path fill="currentColor" d="M14.115 26H6v-4h8.115l10-11h11.228L32 7.657l2.828-2.829L43 13l-8.172 8.172L32 18.343 35.343 15h-9.458l-8.182 9 8.182 9h9.458L32 29.657l2.828-2.829L43 35l-8.172 8.172L32 40.343 35.343 37H24.115l-10-11z"/>
  </SvgIcon>
));