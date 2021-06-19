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
    <path fill="currentColor" d="M10 17.202V34h28V17.202L24 28.577 10 17.202zM35.598 14H12.402L24 23.423 35.598 14zM6 10h36v28H6V10z"/>
  </SvgIcon>
));