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
    <path fill="currentColor" d="M40.366 4.847l3.268 2.306-25.259 35.784-14.667-12.41 2.584-3.054 11.333 9.59z"/>
  </SvgIcon>
));