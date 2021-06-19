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
    <path fill="currentColor" d="M33.939 31.11c.04-.364.061-.735.061-1.11V13h4v17c0 1.556-.254 3.052-.722 4.45l6.136 6.136-2.828 2.828-36-36 2.828-2.828 4.108 4.108A9.993 9.993 0 0 1 20 4c5.523 0 10 4.477 10 10v13.172l3.939 3.939zM26 23.173V14a6 6 0 0 0-11.522-2.35L18 15.171V13h4v6.172l4 4zm6.943 17.6A13.943 13.943 0 0 1 24 44c-7.732 0-14-6.268-14-14V17.828l4 4V30c0 5.523 4.477 10 10 10 2.295 0 4.41-.773 6.098-2.074l2.845 2.846zM24 36a6 6 0 0 1-6-6v-4.172l9.23 9.23A5.972 5.972 0 0 1 24 36z"/>
  </SvgIcon>
));