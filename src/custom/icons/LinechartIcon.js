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
    <path fill="currentColor" d="M10 38h32v4H6V6h4v32zm19.663-18.884L40.4 4.8l3.2 2.4-13.263 17.684-5.772-4.81-7.822 13.907-3.486-1.962 10.178-18.093 6.228 5.19z"/>
  </SvgIcon>
));