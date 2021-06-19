import React from 'react';
import Flex from '../Flex';
import { customSelectComponents } from './customComponents';
import { CloseIcon } from '../../icons';

const MultiValueCounter = ({ ...props }) => {
  const { ValueContainer: Comp } = customSelectComponents;

  const { maxMultiValueCount } = props.selectProps;

  if (props.getValue().length < maxMultiValueCount) {
    return <Comp {...props} />;
  }

  return (
    <Comp {...props}>
      <Flex
        sx={{
          borderRadius: '12px',
          backgroundColor: 'green.40',
          paddingX: 0,
          paddingY: 0,
          margin: 0,
          lineHeight: 1.5,
          marginRight: 1,
        }}
        {...props.getStyles('multiValue', { ...props })}
        getValue={props.getValue}
      >
        <Flex
          sx={{
            color: 'white',
            fontSize: 2,
            paddingRight: 0,
            paddingLeft: 2,
            paddingY: 0,
            alignItems: 'center',
            flexWrap: 'nowrap',
            whiteSpace: 'nowrap',
          }}
        >
          {`${props.getValue().length} selected`}
          <Flex
            sx={{
              cursor: 'pointer',
              paddingRight: 2,
              paddingLeft: 1,
              paddingY: 0,
              '&:hover': {
                backgroundColor: 'green.40',
                borderRadius: '12px',
              },
            }}
            onClick={() => props.clearValue()}
          >
            <CloseIcon size={10} color='white' />
          </Flex>
        </Flex>
      </Flex>
    </Comp>
  );
};

export default MultiValueCounter;
