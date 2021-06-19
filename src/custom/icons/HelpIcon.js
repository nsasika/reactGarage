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
    <path fill="currentColor" d="M26 33h-4v-4c0-3.763 1.286-5.83 4.602-9.07l.17-.164C29.261 17.333 30 16.158 30 14c0-2.805-2.556-5-6-5-3.423 0-6 2.224-6 5v3h-4v-3c0-5.127 4.488-9 10-9 5.53 0 10 3.84 10 9 0 3.539-1.235 5.502-4.433 8.627l-.17.165C26.788 25.342 26 26.607 26 29v4zm-2 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
  </SvgIcon>
));