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
    <path fill="currentColor" d="M11.485 6H45.44l-3.514 16.569A8 8 0 0 1 34.08 29H16.735l.875 4H38v4H14.39l-7-31H2V2h8.61l.875 4zm4.375 19H34.08a4 4 0 0 0 3.922-3.216L40.56 10h-28.2l3.5 15zM15 46a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm22 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
  </SvgIcon>
));