import React, { useMemo } from 'react';
import Input from '../Input';
import Flex from '../Flex';
import useLocale from '../../localization/useLocale';
import { CalendarIcon } from '../../icons';
import boxShadow from '../../style-helpers/boxShadow';

export const DatePickerInput = React.forwardRef(
  ({ selectedDate, isDatePickerActive, ...props }, ref) => {
    const { locale } = useLocale();

    const value = useMemo(() => Intl.DateTimeFormat(locale).format(new Date(selectedDate)), [
      locale,
      selectedDate,
    ]);

    return (
      <InputContainer isDatePickerActive={isDatePickerActive}>
        <InputCalendarIcon isDatePickerActive={isDatePickerActive} />
        <Input
          ref={ref}
          type='text'
          readOnly
          value={value}
          sx={{
            color: 'text.default',
            height: '2.25rem',
            paddingLeft: 9,
            backgroundColor: 'transparent',
            cursor: 'pointer',
            '&:focus': {
              outline: 'none',
              boxShadow: 'none',
              backgroundColor: 'transparent',
            },
          }}
          {...props}
        />
      </InputContainer>
    );
  }
);

const InputCalendarIcon = React.memo(({ isDatePickerActive }) => (
  <CalendarIcon
    size={20}
    sx={{
      position: 'absolute',
      top: '8px',
      left: '8px',
      pointerEvents: 'none',
      color: isDatePickerActive ? 'green.40' : 'gray.100',
    }}
  />
));

const InputContainer = React.forwardRef(({ isDatePickerActive, ...props }, ref) => {
  return (
    <Flex
      ref={ref}
      sx={{
        position: 'relative',

        alignItems: 'center',
        justifyContent: 'flex-start',

        height: '2.25rem',
        width: '8rem',

        borderRadius: 'default',

        backgroundColor: 'gray.15',

        ...(isDatePickerActive && {
          backgroundColor: 'white',
          boxShadow: boxShadow('button.focus', 'green.30'),
          zIndex: '1',
        }),
      }}
      {...props}
    />
  );
});
