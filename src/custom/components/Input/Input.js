import React from 'react';
import Box from '../Box';
import boxShadow from '../../style-helpers/boxShadow';

function Input(props, ref) {
  return (
    <Box
      ref={ref}
      as='input'
      type='text'
      {...props}
      __css={{
        display: 'block',
        width: '100%',
        p: 2,

        appearance: 'none',

        fontSize: 'body',
        lineHeight: 'default',

        border: 'none',
        borderRadius: 'default',

        color: 'inherit',
        backgroundColor: 'gray.15',
        '&:focus': {
          backgroundColor: 'white',
          boxShadow: boxShadow('0 0 0 2px', 'green.30'),
          outline: 'none',
        },
        '&:disabled': {
          backgroundColor: 'gray.15',
          boxShadow: 'none',
          outline: 'none',
        },
        '&:invalid': {
          color: 'red.40',
          backgroundColor: 'red.10',
          boxShadow: boxShadow('button.focus', 'red.40'),
        },
        
      }}
    />
  );
}

export default React.forwardRef(Input);
