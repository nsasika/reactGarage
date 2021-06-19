import React from 'react';
import Navbar from '../Navbar';
import PageroLogo from '../PageroLogo';
import Flex from '../Flex';
import getPageroBaseUrls from "../../utils/getPageroBaseUrls";

const PrimaryNavbar = props => {

    const { WWW_BASE_URL } = getPageroBaseUrls();
  return (
    <Navbar variant='primary' {...props}>
      <PageroLogo color='inherit' />
      <a href={WWW_BASE_URL}style={{color: 'rgba(255, 255, 255, 0.7)',
        textDecoration: 'none',
        textAlign: 'center',
        fontFamily:
        "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
            fontSize: 11,
            fontWeight: '500',
            fontStyle: 'normal',
            fontStretch: 'normal',
            lineHeight: '1.45',
            letterSpacing: 0}} >
          BACK TO START
      </a>
      <Flex minWidth='104px' />
    </Navbar>
  )
};

export default PrimaryNavbar;
