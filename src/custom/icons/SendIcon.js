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
    <path fill="currentColor" d="M12.669 22h17.098L9.434 12.758 12.67 22zm0 4l-3.235 9.242L29.767 26H12.669zm-3.538-2L4.886 11.87a3 3 0 0 1 4.073-3.722L43.833 24 8.96 39.852a3 3 0 0 1-4.073-3.722L9.13 24z"/>
  </SvgIcon>
));