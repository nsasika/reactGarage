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
    <path fill="currentColor" d="M38 38V10h-4v4h-4v-4H18v4h-4v-4h-4v28h28zM34 6h8v36H6V6h8V2h4v4h12V2h4v4zM14 22h4v4h-4v-4zm8 0h4v4h-4v-4zm8 0h4v4h-4v-4zm-16 8h4v4h-4v-4zm8 0h4v4h-4v-4zm8 0h4v4h-4v-4z"/>
  </SvgIcon>
));