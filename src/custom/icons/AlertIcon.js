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
    <path fill="currentColor" d="M10 33h28v-.496l-5-3.47V17c0-5.399-3.801-9-9-9s-9 3.601-9 9v12.034l-5 3.47V33zm27-16v9.941l5 3.47V37H6v-6.588l5-3.47V17c0-8 6-13 13-13s13 5 13 13zM19 39h10a5 5 0 0 1-10 0z"/>
  </SvgIcon>
));