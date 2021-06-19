import React from 'react';
import Box from '../Box';
import boxShadow from '../../style-helpers/boxShadow';

const styles = {
  flex: '0 0 auto',
  backgroundColor: 'gray.15',
  paddingX: 2,
  paddingY: 2,
  margin: 0,
  overflow: 'hidden',
  minHeight: '2.25rem',
  border: 'none',
  borderRadius: 'default',
  resize: 'none',
  '&:focus': {
    outline: 'none',
    bg: 'white',
    boxShadow: boxShadow('button.focus', 'green.30'),
  },
  '&::placeholder': {
    fontFamily: 'body',
    lineHeight: 'body',
    fontWeight: 'body',
    fontSize: 'body',
  },
};

function Textarea(props, ref) {
  return <Box ref={ref} as='textarea' {...props} __css={styles} />;
}

export default React.forwardRef(Textarea);
