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
    <path fill="currentColor" d="M12 38h30v4H12v-4zm-6-8h36v4H6v-4zm6-8h30v4H12v-4zm-6-8h36v4H6v-4zm6-8h30v4H12V6z"/>
  </SvgIcon>
));