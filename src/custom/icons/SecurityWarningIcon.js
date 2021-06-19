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
    <path fill="currentColor" d="M10 10v9c0 8.92 4.582 15.774 14 20.751C33.418 34.774 38 27.92 38 19v-9H10zm32-4v13c0 10.803-5.795 19.134-17.106 24.789l-.894.447-.894-.447C11.796 38.134 6 29.803 6 19V6h36zM22 25V14h4v11h-4zm2 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
  </SvgIcon>
));