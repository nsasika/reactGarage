import React, { forwardRef } from 'react';
import Flex from '../Flex';
import Stack from '../Stack';
import Text from '../Text';
import merge from '../../utils/merge';

const Label = forwardRef((props, ref) => (
  <Stack
    ref={ref}
    as='label'
    gap={1}
    {...props}
    __css={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      flex: '0 0 auto',
    }}
  />
));

export default Label;
