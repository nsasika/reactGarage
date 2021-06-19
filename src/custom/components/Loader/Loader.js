import React from 'react';
import Stack from '../Stack';
import styled, { keyframes, css } from 'styled-components';
import useParentClientRect from '../../utils/useParentClientRect';
import PageroLogo from '../PageroLogo';
import defaultTheme from '@pagero/pagero-ui-theme';
import Flex from '../Flex';

const pulsate = keyframes`
0% {
  transform: scale(0.1);
  opacity: 0;
}
50% {
  opacity: 1;
}
100% {
  transform: scale(1.2);
  opacity: 0;
}`;

const PulseLoader = styled('div').attrs(({ theme }) => ({ theme: { ...defaultTheme, ...theme } }))(
  ({ size = 80, theme, color = 'green' }) => {
    const height = Math.max(size / 12, 80);
    const width = Math.max(size / 12, 80);
    const borderRadius = Math.max(size / 12, 80);

    return {
      color: 'rgb(0, 114, 35)',
      height: `${height}px`,
      width: `${width}px`,
      borderWidth: '4px',
      borderStyle: 'solid',
      borderColor: theme.colors[color]['40'],
      borderImage: 'initial',
      borderRadius: `${borderRadius}px`,
    };
  },
  css`
    animation: 1s ease-out 0s infinite normal none running ${pulsate};
  `
);

const Loader = ({ variant, ...props }) => {
  return variant === 'fullscreen' ? (
    <Stack
      sx={{
        position: 'absolute',
        top: '0',
        bottom: '0',
        zIndex: '0',
        backgroundColor: 'body',
        color: 'gray.90',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <PageroLogo color='green.40' mb={8} />
      <PulseLoader {...props} />
    </Stack>
  ) : (
    <Flex
      sx={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
      }}
    >
      <PulseLoader {...props} />
    </Flex>
  );
};

export default Loader;
