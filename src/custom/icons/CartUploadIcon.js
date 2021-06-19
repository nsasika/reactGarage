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
    <path fill="currentColor" d="M15 46a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm22 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm-9-30.341V23h-4v-7.341l-2.938 2.791-2.755-2.9L26 8.241l7.693 7.309-2.755 2.9L28 15.659zM11.485 6H20v4h-7.64l3.5 16H34.08a4 4 0 0 0 3.922-3.216L40.56 10H32V6h13.44l-3.514 17.569A8 8 0 0 1 34.08 30H16.735l.875 4H38v4H14.39l-7-32H2V2h8.61l.875 4z"/>
  </SvgIcon>
));