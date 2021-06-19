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
    <path fill="currentColor" d="M13.633 19h20.734l2.433-1.977L24 7.067l-12.8 9.956L13.633 19zm4.923 4L24 27.423 29.444 23H18.556zM10 21.202V38h28V21.202L24 32.577 10 21.202zM6 16L24 2l18 14v26H6V16z"/>
  </SvgIcon>
));