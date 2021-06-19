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
    <path fill="currentColor" d="M24 8C15.163 8 8 15.163 8 24s7.163 16 16 16 16-7.163 16-16S32.837 8 24 8zm0-4c11.046 0 20 8.954 20 20s-8.954 20-20 20S4 35.046 4 24 12.954 4 24 4zm-6 9.605v5.103a8 8 0 1 0 12 0v-5.103c3.587 2.075 6 5.953 6 10.395 0 6.627-5.373 12-12 12s-12-5.373-12-12c0-4.442 2.413-8.32 6-10.395zM22 12h4v14h-4V12z"/>
  </SvgIcon>
));