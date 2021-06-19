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
    <path fill="currentColor" d="M24 10c7.732 0 14 6.268 14 14 0 4.47-2.115 8.575-5.575 11.183l-.291.214-.133.091L32 40a8 8 0 01-7.504 7.985l-.247.011L24 48a8 8 0 01-7.996-7.75L16 40l-.001-4.511-.132-.092a13.987 13.987 0 01-5.849-10.682l-.014-.371L10 24c0-7.732 6.268-14 14-14zm4 27h-8v3a4 4 0 003.8 3.995L24 44a4 4 0 003.995-3.8L28 40v-3zm20-15v4h-6v-4h6zM6 22v4H0v-4h6zM39.556 5.615l2.829 2.829-4.243 4.242-2.828-2.828 4.242-4.243zm-31.112 0l4.242 4.243-2.828 2.828-4.243-4.242 2.829-2.829zM26 0v6h-4V0h4z"/>
  </SvgIcon>
));