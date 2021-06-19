import React, { forwardRef, useRef, useEffect } from 'react';
import Box from '../Box';
import boxShadow from '../../style-helpers/boxShadow';
import { CheckSquaredFillIcon, CircleFillIcon, SquareFillIcon } from '../../icons';
import Flex from '../Flex';

const CheckboxInput = forwardRef(({ ...props }, ref) => (
  <Box
    ref={ref}
    as='input'
    type='checkbox'
    {...props}
    __css={{
      position: 'absolute',
      opacity: 0,
      zIndex: -1,
      width: '1px',
      height: '1px',
      overflow: 'hidden',
    }}
  />
));

const Checkbox = forwardRef(
  (
    {
      sx = {},
      size = '16',
      color = 'green',
      indeterminate,
      checked,
      defaultChecked,
      onChange,
      disabled,
      ...props
    },
    ref
  ) => {
    const defaultRef = useRef();
    const resolvedRef = ref || defaultRef;

    useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <Flex
        as='label'
        sx={{
          borderRadius: 'pill',
          position: 'relative',
          width: '3rem',
          justifyContent: 'space-between',
          cursor: 'pointer',
        }}
      >
        <CheckboxInput
          ref={resolvedRef}
          checked={checked}
          defaultChecked={defaultChecked}
          indeterminate={indeterminate}
          onChange={onChange}
          disabled={disabled}
        />
        <Box
          sx={{
            position: 'absolute',
            borderRadius: 'pill',
            boxShadow: boxShadow('0 0 0 1px', 'gray.20'),
            width: '3rem',
            height: '100%',
            transition: 'background-color 0.25s',
            'input:checked ~ &': {
              boxShadow: boxShadow('0 0 0 1px', 'green.40'),
            },
          }}
        />

        <CheckSquaredFillIcon
          size={24}
          viewBox='6 6 36 36'
          sx={{
            color: 'gray.20',
            backgroundColor: 'gray.20',
            borderTopLeftRadius: 'pill',
            borderBottomLeftRadius: 'pill',
            transition: 'color 0.25s',
            'input:checked ~ &': {
              color: 'green.40',
              backgroundColor: 'white',
            },
          }}
          {...props}
        />
        <SquareFillIcon
          size={24}
          viewBox='6 6 36 36'
          sx={{
            color: 'gray.20',
            backgroundColor: 'gray.20',
            borderTopRightRadius: 'pill',
            borderBottomRightRadius: 'pill',
            position: 'absolute',
            transform: 'translate(1.5rem)',
            transition: 'color 0.25s',
            'input:checked ~ &': {
              color: 'green.40',
            },
          }}
          {...props}
        />
        <CircleFillIcon
          size={24}
          viewBox='6 6 36 36'
          sx={{
            color: 'white',
            backgroundColor: 'gray.20',
            borderRadius: 'pill',
            position: 'relative',
            transform: 'translate(-1.5rem)',
            transition: 'transform 0.25s',
            'input:checked ~ &': {
              transform: 'translate(0rem)',
            },
          }}
          {...props}
        />
      </Flex>
    );
  }
);

export default Checkbox;
