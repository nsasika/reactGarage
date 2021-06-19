import React from 'react';
import Text from '../Text';

const Currency = ({ ...props }) => {
  return <Text format='currency' {...props} />;
};

export default Currency;
