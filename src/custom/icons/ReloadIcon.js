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
    <path fill="currentColor" d="M40 11.998V4h4v15H29v-4h8.23C34.35 10.774 29.5 8 24 8 15.163 8 8 15.163 8 24s7.163 16 16 16c7.811 0 14.315-5.597 15.72-13h4.056C42.33 36.623 34.026 44 24 44 12.954 44 4 35.046 4 24S12.954 4 24 4c6.542 0 12.351 3.141 16 7.998z"/>
  </SvgIcon>
));