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
    <path fill="currentColor" d="M24.905 36.08c3.36-4.538 5.425-7.668 6.932-10.722C33.278 22.435 34 19.902 34 17.714 34 12.027 29.423 8 24 8s-10 4.027-10 9.714c0 2.189.722 4.72 2.163 7.644 1.507 3.054 3.572 6.184 6.932 10.722.069.093.424.57.905 1.213l.905-1.213zM24 44c-5.833-8-14-17.569-14-26.286C10 8.997 17.268 4 24 4s14 4.997 14 13.714S29.833 36 24 44zm0-22a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
  </SvgIcon>
));