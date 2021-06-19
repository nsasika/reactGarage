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
    <path fill="currentColor" d="M35 12h3.828L44 17.172V40h-5.341a6.002 6.002 0 0 1-11.318 0H20.66A6.002 6.002 0 0 1 9.34 40H4v-4h5.341a6.002 6.002 0 0 1 11.318 0h6.682a6.002 6.002 0 0 1 11.318 0H40V26h-9V12H4V8h31v4zM15 40a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm18 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm2-18h5v-3.172L37.172 16H35v6zM4 22h19v4H4v-4z"/>
  </SvgIcon>
));