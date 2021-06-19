import React, { forwardRef } from 'react';
import Flex from '../Flex';

const Field = forwardRef((props, ref) => {
  return (
    <Flex
      ref={ref}
      as='label'
      {...props}
      sx={{
        flex: '0 0 auto',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        userSelect: 'contain',
      }}
    />
  );
});

export default Field;
