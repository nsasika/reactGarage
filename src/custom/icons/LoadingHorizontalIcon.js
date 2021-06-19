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
    <path fill="currentColor" d="M39.72 27h4.056C42.33 36.623 34.026 44 24 44c-6.542 0-12.351-3.141-16-7.998V44H4V29h15v4h-8.23c2.88 4.226 7.73 7 13.23 7 7.811 0 14.315-5.597 15.72-13zm-35.5-6c1.447-9.623 9.75-17 19.776-17 6.543 0 12.352 3.141 16 7.998V4h4v15h-15v-4h8.231c-2.88-4.226-7.731-7-13.23-7-7.812 0-14.315 5.597-15.72 13H4.22z"/>
  </SvgIcon>
));