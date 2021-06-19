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
    <path fill="currentColor" d="M18.682 8.917L17 9.637V14l-3 3H9.638l-.723 1.686L12 21v6l-3.085 2.314L9.638 31H14l3 3v4.362l1.686.723L21 36h6l2.314 3.085L31 38.362V34l3-3h4.362l.721-1.682L36 27.003v-6.006l3.083-2.315-.72-1.682H34l-3-3V9.638l-1.682-.721L27.004 12h-6.008l-2.314-3.083zM25 8.012L28 4l7 3v5c.342.313.686.658 1 1h5l3 7-4.011 3v2L44 28l-3 7h-5c-.313.342-.658.686-1 1v5l-7 3-3-4h-2l-3 4-7-3v-5a16.443 16.443 0 0 1-1-1H7l-3-7 4-3v-2l-4-3 3-7h5c.313-.342.658-.686 1-1V7l7-3 3 4.012h2zM24 28a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 4a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"/>
  </SvgIcon>
));