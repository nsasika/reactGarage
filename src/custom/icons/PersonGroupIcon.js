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
    <path fill="currentColor" d="M9 26a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm30 4a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-15-1a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-4a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm10 9.485V42H14V26.485l1.157-.537A20.927 20.927 0 0 1 24 24c3.093 0 6.096.67 8.843 1.948l1.157.537zm4 3.146a19.915 19.915 0 0 1 7.223 3.538l.777.6V42h-8v-4h4v-2.231a15.905 15.905 0 0 0-4-1.973v-4.165zM10 42H2v-8.23l.777-.601A19.915 19.915 0 0 1 10 29.63v4.165a15.905 15.905 0 0 0-4 1.973V38h4v4zm8-4h12v-8.912A16.959 16.959 0 0 0 24 28c-2.08 0-4.103.373-6 1.088V38z"/>
  </SvgIcon>
));