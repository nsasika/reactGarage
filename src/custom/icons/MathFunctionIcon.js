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
    <path fill="currentColor" d="M8 17V9a7 7 0 0 1 7-7h3v4h-3a3 3 0 0 0-3 3v8h4v4h-4v18a7 7 0 0 1-7 7H2v-4h3a3 3 0 0 0 3-3V21H4v-4h4zm21.5 11L25 21h4l3 5 3-5h4l-4.5 7 4.5 7h-4l-3-5-3 5h-4l4.5-7zM21 39c-2-3.379-3-7.046-3-11 0-3.954 1-7.621 3-11h4c-2 3.329-3 6.995-3 11s1 7.671 3 11h-4zm22 0h-4c2-3.329 3-6.995 3-11s-1-7.671-3-11h4c2 3.379 3 7.046 3 11 0 3.954-1 7.621-3 11z"/>
  </SvgIcon>
));