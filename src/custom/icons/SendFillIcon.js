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
    <path fill="currentColor" d="M8.453 22.063L4.886 11.87a3 3 0 014.073-3.722L43.833 24 8.96 39.852a3 3 0 01-4.073-3.722l3.567-10.193L30 25v-2l-21.547-.937z"/>
  </SvgIcon>
));