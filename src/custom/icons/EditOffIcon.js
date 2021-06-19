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
    <path fill="currentColor" d="M27.042 29.87L4.586 7.414l2.828-2.828L20.25 17.422 30.956 6.716a7.303 7.303 0 0 1 10.328 10.328L30.578 27.75l12.836 12.836-2.828 2.828L27.75 30.578l-.012.012-.696-.72zm.708-4.948L33.672 19 29 14.328l-5.922 5.922 4.672 4.672zm-3 8.656L16.328 42H6V31.672l8.422-8.422 2.828 2.828-7.25 7.25V38h4.672l7.25-7.25 2.828 2.828zm9.034-24.034L31.828 11.5l4.672 4.672 1.956-1.956a3.303 3.303 0 1 0-4.672-4.672z"/>
  </SvgIcon>
));