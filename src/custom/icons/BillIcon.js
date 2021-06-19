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
    <path fill="currentColor" d="M8 21.678v4.64A12.018 12.018 0 0 1 16.679 35h14.637A12.018 12.018 0 0 1 40 26.316V21.68A12.018 12.018 0 0 1 31.318 13h-14.64A12.018 12.018 0 0 1 8 21.678zm0-4.197A8.03 8.03 0 0 0 12.481 13H8v4.481zm-4 4.716h-.005V8.995h13.202V9h13.601v-.005H44V39H3.995V25.798H4v-3.601zM40 13h-4.486A8.03 8.03 0 0 0 40 17.483V13zM8 35h4.483A8.03 8.03 0 0 0 8 30.514V35zm14-8v-6h-3v-4h7v10h3v4H19v-4h3zm13.512 8H40v-4.488A8.03 8.03 0 0 0 35.512 35z"/>
  </SvgIcon>
));