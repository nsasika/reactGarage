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
    <path fill="currentColor" d="M20.56 6H6v8c0 17.27 11.33 28 29 28h7V27.44l-10.8-2.7-3.16 4.2h-.1a10.22 10.22 0 01-8.88-8.83l-.01-.15 4.21-3.16L20.56 6z"/>
  </SvgIcon>
));