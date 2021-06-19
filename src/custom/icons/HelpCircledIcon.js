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
    <path fill="currentColor" d="M24 8C15.163 8 8 15.163 8 24s7.163 16 16 16 16-7.163 16-16S32.837 8 24 8zm0-4c11.046 0 20 8.954 20 20s-8.954 20-20 20S4 35.046 4 24 12.954 4 24 4zm0 33a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm2-8h-4v-1c0-1.963.773-3.31 2.33-4.545.382-.303.494-.382 1.533-1.1C27.466 21.246 28 20.469 28 19c0-2.685-1.42-4-4-4-2.558 0-4 1.343-4 4v2h-4v-2c0-4.932 3.294-8 8-8 4.723 0 8 3.034 8 8 0 2.995-1.282 4.86-3.863 6.645-.937.648-1.041.722-1.322.944-.667.53-.815.787-.815 1.411v1z"/>
  </SvgIcon>
));