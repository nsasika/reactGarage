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
    <path fill="currentColor" d="M10 12v26h28V15.995H20.541L17.341 12H10zm12.462-.005H42V42H6V8h13.262l3.2 3.995z"/>
  </SvgIcon>
));