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
    <path fill="currentColor" d="M24 4c11.046 0 20 8.954 20 20s-8.954 20-20 20S4 35.046 4 24 12.954 4 24 4zm-2 32h4v-4h-4v4zm4-7v-1c0-.624.148-.881.815-1.41.281-.223.385-.297 1.322-.945C30.718 23.861 32 21.995 32 19c0-4.966-3.277-8-8-8-4.706 0-8 3.068-8 8v2h4v-2c0-2.657 1.442-4 4-4 2.58 0 4 1.315 4 4 0 1.47-.534 2.246-2.137 3.355-1.04.718-1.15.797-1.533 1.1C22.773 24.689 22 26.037 22 28v1h4z"/>
  </SvgIcon>
));