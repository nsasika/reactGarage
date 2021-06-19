import React, { useState, useEffect } from 'react';
import Stack from '../Stack';
import Box from '../Box';
import { CloseIcon, WarningCircledFillIcon } from '../../icons';

export default function HeaderNotificationBar({ messageComponent, isCloseIconVisible = true }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setIsExpanded(true), 2000);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    const id = setTimeout(() => setIsVisible(isExpanded), 200);
    return () => clearTimeout(id);
  }, [isExpanded]);

  return (
    <Stack
      direction='row'
      gap={2}
      splitAfter={2}
      sx={{
        position: 'relative',
        zIndex: '0',
        backgroundColor: 'yellow.15',
        height: !isDismissed && isExpanded ? '3.25rem' : '0rem',
        transition: 'height 0.1s linear',
        alignItems: 'center',
        pl: 4,
        pr: 6,
      }}
    >
      {!isDismissed && isVisible && (
        <>
            <WarningCircledFillIcon color='yellow.60' />
            <Box>{messageComponent}</Box>
            {isCloseIconVisible && (
                <CloseIcon
                    size={18}
                    sx={{
                     cursor: 'pointer',
                     color: 'gray.40',
                     '&:hover': {
                        color: 'green.40',
                     },
                     '&:focus': {
                        color: 'green.40',
                        outlineWidth: '2px',
                        outlineStyle: 'solid',
                        outlineColor: 'green.30',
                        outlineOffset: '2px',
                     },
                    }}
                    tabIndex='0'
                    onClick={() => setIsDismissed(true)}
                />
                )}
        </>
      )}
    </Stack>
  );
}
