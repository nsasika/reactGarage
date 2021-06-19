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
    <path fill="currentColor" d="M34.636 39H13.364C8.196 39 4 34.833 4 29.687c0-4.165 2.773-7.709 6.636-8.873C11.414 14.16 17.103 9 24 9c6.897 0 12.586 5.16 13.364 11.814C41.227 21.978 44 25.522 44 29.687 44 34.834 39.804 39 34.636 39z"/>
  </SvgIcon>
));