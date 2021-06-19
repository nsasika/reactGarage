import React from 'react';
import Navbar from '../Navbar';
import Text from '../Text';
import Flex from '../Flex';

const SecondaryNavbar = ({ appName, start, center, end }) => {
  return (
    <Navbar variant='secondary' sx={{ boxShadow: 'surface', position: 'relative', zIndex: '1' }}>
      <Flex sx={{ width: 6, justifyContent: 'flex-start', alignItems: 'center' }}>
        {start ?? <Text variant='heading'>{appName}</Text>}
      </Flex>
      <Flex flexDirection='row' height='100%'>
        {center ?? null}
      </Flex>
      <Flex sx={{ width: 6, justifyContent: 'flex-end', alignItems: 'center' }}>{end ?? null}</Flex>
    </Navbar>
  );
};

export default SecondaryNavbar;
