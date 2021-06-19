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
    <path fill="currentColor" d="M40 24c0-8.837-7.163-16-16-16S8 15.163 8 24s7.163 16 16 16 16-7.163 16-16zm4 0c0 11.046-8.954 20-20 20S4 35.046 4 24 12.954 4 24 4s20 8.954 20 20zM24 40V8C15.163 8 8 15.163 8 24s7.163 16 16 16z"/>
  </SvgIcon>
));