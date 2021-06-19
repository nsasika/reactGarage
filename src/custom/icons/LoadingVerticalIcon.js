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
    <path fill="currentColor" d="M20.998 39.721v4.057c-9.622-1.447-17-9.75-17-19.776 0-6.543 3.142-12.351 7.998-16H3.998v-4h15v15h-4v-8.23c-4.225 2.88-7 7.73-7 13.23 0 7.81 5.598 14.315 13 15.719zm6-35.5c9.623 1.448 17 9.751 17 19.777 0 6.543-3.141 12.351-7.998 16h7.998v4h-15v-15h4v8.23c4.226-2.88 7-7.73 7-13.23 0-7.81-5.597-14.315-13-15.719V4.222z"/>
  </SvgIcon>
));