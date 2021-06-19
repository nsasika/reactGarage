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
    <path fill="currentColor" d="M16 7h26v4H16V7zm0 10h26v4H16v-4zm0 20h26v4H16v-4zM9 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm7 5h26v4H16v-4zm-7 5a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
  </SvgIcon>
));