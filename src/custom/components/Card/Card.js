import React, { forwardRef } from 'react';
import Box from '../Box';

const styles = {
  backgroundColor: 'background.component',
  boxShadow: 'surface',
  borderRadius: 2,
};

const Card = forwardRef((props, ref) => <Box ref={ref} {...props} __css={styles} />);

export default Card;
