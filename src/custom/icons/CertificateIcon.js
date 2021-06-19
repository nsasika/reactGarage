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
    <path fill="currentColor" d="M29.993 32.755A14.95 14.95 0 0124 34a14.95 14.95 0 01-5.993-1.245l-1.895 6.634 7.06-3.21a2 2 0 011.656 0l7.06 3.21-1.895-6.634zM24 4c8.284 0 15 6.716 15 15a14.97 14.97 0 01-5.468 11.582l3.391 11.869c.469 1.64-1.198 3.075-2.75 2.37L24 40.197 13.828 44.82c-1.553.705-3.22-.73-2.751-2.37l3.39-11.869A14.97 14.97 0 019 19c0-8.284 6.716-15 15-15zm5 9l-7.086 7.086L18.828 17 16 19.828l5.914 5.915 9.914-9.915L29 13z"/>
  </SvgIcon>
));