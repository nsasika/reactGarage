import React, { forwardRef } from 'react';
import Flex from '../Flex';
import Box from '../Box';
import boxShadow from '../../style-helpers/boxShadow';
import Input from '../Input';

const Container = ({ sx, ...props }) => (
  <Flex.Row
    sx={{
      flex: '0 0 auto',
      alignItems: 'center',
      backgroundColor: 'gray.15',
      paddingX: 0,
      paddingY: 0,
      margin: 0,
      overflow: 'hidden',
      height: '2.25rem',
      borderRadius: 'default',
      '&:focus-within': {
        bg: 'white',
        boxShadow: boxShadow('button.focus', 'green.30'),
        '& svg': {
          color: 'green.30',
        },
      },
      ...sx,
    }}
    {...props}
  />
);

const TextField = forwardRef(({ startComponent, endComponent, sx = {}, ...props }, ref) => {
  return (
    <Container sx={sx}>
      {startComponent && (
        <Box
          __css={{
            color: 'gray.40',
            marginRight: '-2rem',
            px: 2,
            flex: '0 0 auto',
            zIndex: '1',
          }}
        >
          {startComponent}
        </Box>
      )}
      <Input
        ref={ref}
        sx={{
          paddingY: 0,
          paddingLeft: startComponent ? 10 : 2,
          paddingRight: endComponent ? '4rem' : 2,
          flex: '1 1 auto',
          color: 'text.default',
          fontSize: 'default',
          lineHeight: 'xs',
          height: '100%',
          width: '100%',
          '&:focus': {
            outline: 'none',
            boxShadow: 'none',
          },
        }}
        {...props}
      />
      {endComponent && (
        <Box
          __css={{
            color: 'gray.50',
            marginLeft: '-4rem',
            px: 2,
            flex: '0 0 auto',
            'input:focus + & > *': {
              color: 'text.default',
              backgroundColor: 'green.20',
            },
          }}
        >
          <React.Suspense fallback={<Box>?</Box>}>{endComponent}</React.Suspense>
        </Box>
      )}
    </Container>
  );
});

export default TextField;
