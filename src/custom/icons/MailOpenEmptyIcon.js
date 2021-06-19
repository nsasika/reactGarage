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
    <path fill="currentColor" d="M10 21.202V38h28V21.202L24 32.577 10 21.202zm26.8-4.179L24 7.067l-12.8 9.956 12.8 10.4 12.8-10.4zM6 16L24 2l18 14v26H6V16z"/>
  </SvgIcon>
));