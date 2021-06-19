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
    <path fill="currentColor" d="M6 32h10v10H6V32zm26 0h10v10H32V32zm-13 0h10v10H19V32zM6 19h10v10H6V19zm26 0h10v10H32V19zm-13 0h10v10H19V19zM6 6h10v10H6V6zm26 0h10v10H32V6zM19 6h10v10H19V6z"/>
  </SvgIcon>
));