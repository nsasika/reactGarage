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
    <path fill="currentColor" d="M20 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-4a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm12 2h14v4H32v-4zm0-16h14v4H32V2zm0 8h14v4H32v-4zM20 27c-3.53 0-6.936.831-10 2.398V38h20v-8.602A21.898 21.898 0 0 0 20 27zm14 15H6V27.057l.999-.577A25.887 25.887 0 0 1 20 23c4.627 0 9.081 1.212 13.001 3.48l.999.577V42z"/>
  </SvgIcon>
));