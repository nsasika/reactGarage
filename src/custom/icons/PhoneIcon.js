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
    <path fill="currentColor" d="M20.56 6H6v8c0 17.27 11.33 28 29 28h7V27.44l-10.8-2.7-3.16 4.2h-.1a10.22 10.22 0 01-8.88-8.83l-.01-.15 4.21-3.16L20.56 6zM10 10h7.44l1.3 5.2L15 18v1c0 7.8 6.57 14 14 14h1l2.8-3.74 5.2 1.3V38h-3.46C19.3 37.82 10 28.86 10 14v-4z"/>
  </SvgIcon>
));