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
    <path fill="currentColor" d="M24 34c6.704 0 12.713-3.945 15.645-10C36.713 17.945 30.704 14 24 14c-6.704 0-12.713 3.945-15.645 10C11.287 30.055 17.296 34 24 34zm0-24c9.09 0 16.855 5.805 20 14-3.145 8.195-10.91 14-20 14S7.145 32.195 4 24c3.145-8.195 10.91-14 20-14zm0 18a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 4a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"/>
  </SvgIcon>
));