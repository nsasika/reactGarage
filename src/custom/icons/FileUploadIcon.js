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
    <path fill="currentColor" d="M26 32.757V42h-4v-9.243l-3.657 3.657-2.828-2.828L24 25.1l8.485 8.485-2.828 2.828L26 32.757zM13 42H9V6h16.828L39 19.172V42h-4V21H24V10H13v32z"/>
  </SvgIcon>
));