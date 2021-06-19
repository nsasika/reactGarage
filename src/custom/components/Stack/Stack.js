import React, { useMemo } from 'react';
import Box from '../Box';

const styleFn = ({ direction, gap, splitAfter }) => {
  const directionArr = Array.isArray(direction) ? direction : [direction];
  const gapArr = Array.isArray(gap) ? gap : [gap];

  directionArr.forEach((e, i) => {
    if (gapArr[i] === undefined) {
      gapArr[i] = gapArr[gapArr.length - 1];
    }
  });

  gapArr.forEach((e, i) => {
    if (directionArr[i] === undefined) {
      directionArr[i] = directionArr[directionArr.length - 1];
    }
  });

  return {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: directionArr,

    '&& > *': {
      margin: 0,
    },

    '&& > * + *': {
      marginTop: directionArr.map((d, i) => (d === 'column' ? gapArr[i] : 0)),
      marginLeft: directionArr.map((d, i) => (d === 'column' ? 0 : gapArr[i])),
    },
    ...(splitAfter && {
      [`&& > :nth-child(${splitAfter})`]: {
        marginBottom: directionArr.map(d => (d === 'column' ? 'auto' : 0)),
        marginRight: directionArr.map(d => (d === 'column' ? 0 : 'auto')),
      },
    }),
  };
};

const Stack = React.forwardRef(({ direction = 'column', gap = 6, splitAfter, ...props }, ref) => {
  const styles = useMemo(() => styleFn({ direction, gap, splitAfter }), [
    direction,
    gap,
    splitAfter,
  ]);

  return <Box ref={ref} {...props} __css={styles} />;
});

export default Stack;
