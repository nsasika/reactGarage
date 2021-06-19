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
    <path fill="currentColor" d="M16 38.828L12.828 42H7V6h34v36h-5.828L32 38.828l-4 4-4-4-4 4-4-4zM11 10v28h.172L16 33.172l4 4 4-4 4 4 4-4L36.828 38H37V10H11zm26 28.172v.242l.414.172-.414-.414zm-26 0l-.414.414.414-.172v-.242zM15 14h18v4H15v-4zm0 8h18v4H15v-4z"/>
  </SvgIcon>
));