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
    <path fill="currentColor" d="M23.297 24l-8.182-9H6v-4h10.885l10 11h8.458L32 18.657l2.828-2.829L43 24l-8.172 8.172L32 29.343 35.343 26h-8.458l-10 11H6v-4h9.115l8.182-9z"/>
  </SvgIcon>
));