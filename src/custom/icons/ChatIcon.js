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
    <path fill="currentColor" d="M9.101 38.5l5.478-1.46 1.432.827A15.906 15.906 0 0 0 24 40c8.837 0 16-7.163 16-16S32.837 8 24 8 8 15.163 8 24c0 2.507.574 4.924 1.664 7.114l.597 1.2L9.1 38.5zM4 44l2.082-11.105A19.918 19.918 0 0 1 4 24C4 12.954 12.954 4 24 4s20 8.954 20 20-8.954 20-20 20c-3.638 0-7.05-.972-9.99-2.67L4 44zm11-17a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm9 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm9 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
  </SvgIcon>
));