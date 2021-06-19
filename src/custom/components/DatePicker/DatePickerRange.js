import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
  useImperativeHandle,
} from 'react';
import { usePopper } from 'react-popper';
import Input from '../Input';
import Flex from '../Flex';
import Box from '../Box';
import { CalendarIcon, ArrowRightIcon } from '../../icons';
import boxShadow from '../../style-helpers/boxShadow';
import useLocale from '../../localization/useLocale';
import { useClickAway } from 'react-use';
import Calendar from './DatePickerCalendar';

const useIsFocused = () => {
  const ref = useRef();
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      const onFocus = () => setIsFocused(true);
      const onBlur = () => setIsFocused(false);
      node.addEventListener('focus', onFocus);
      node.addEventListener('blur', onBlur);
      return () => {
        node.removeEventListener('focus', onFocus);
        node.removeEventListener('blur', onBlur);
      };
    }
  }, []);

  return [ref, isFocused];
};

const DatePicker = React.forwardRef(
  (
    {
      selectedDate,
      onChange,
      startDate,
      endDate,
      minDate,
      maxDate,
      selectsStart,
      selectsEnd,
      customIcon,
    },
    ref
  ) => {
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);

    const { styles, attributes } = usePopper(referenceElement, popperElement, {
      strategy: 'fixed',
      modifiers: [
        { name: 'arrow', options: { element: arrowElement } },
        { name: 'offset', options: { offset: [0, 5] } },
      ],
    });

    const calendarRef = useRef();

    const [inputRef, isInputFocused] = useIsFocused();
    const [isCalendarActive, setIsCalendarActive] = useState(false);

    const [isDatepickerActive, setIsDatePickerActive] = useState(
      () => isInputFocused || isCalendarActive
    );

    const onSelectedDateChange = val => {
      onChange(val);
    };

    useClickAway(calendarRef, () => {
      setIsCalendarActive(false);
    });

    useEffect(() => {
      setIsDatePickerActive(isInputFocused || isCalendarActive);
    }, [isInputFocused, isCalendarActive]);

    useEffect(() => {
      setIsCalendarActive(isDatepickerActive);
    }, [isDatepickerActive]);

    return (
      <>
        <InputContainer ref={setReferenceElement} isDatepickerActive={isDatepickerActive}>
          <InputCalendarIcon isDatepickerActive={isDatepickerActive} customIcon={customIcon} />
          <DatePickerInput
            ref={inputRef}
            selectedDate={selectedDate}
            onChange={onSelectedDateChange}
          />
          <InputCalendarIcon
            isDatepickerActive={isDatepickerActive}
            customIcon={ArrowRightIcon}
            sx={{ left: '7.5rem' }}
          />
          <DatePickerInput
            ref={inputRef}
            selectedDate={selectedDate}
            onChange={onSelectedDateChange}
            sx={{ paddingRight: 9 }}
          />
          <InputCalendarIcon
            isDatepickerActive={isDatepickerActive}
            sx={{ left: 'unset', right: '0.5rem' }}
          />
        </InputContainer>

        {isDatepickerActive && (
          <PopperElement ref={setPopperElement} style={styles.popper} {...attributes.popper}>
            <Calendar
              ref={calendarRef}
              selectedDate={selectedDate}
              onSelectedDateChange={onSelectedDateChange}
              startDate={startDate}
              endDate={endDate}
              selectsStart={selectsStart}
              selectsEnd={selectsEnd}
            />
            <PopperArrow ref={setArrowElement} style={styles.arrow} />
          </PopperElement>
        )}
      </>
    );
  }
);

const PopperElement = React.forwardRef((props, ref) => (
  <Box ref={ref} sx={{ '&&': { margin: 0 }, zIndex: '1' }} {...props} />
));

const PopperArrow = React.forwardRef((props, ref) => <Box ref={ref} {...props} />);

const InputCalendarIcon = React.memo(
  ({ isDatepickerActive, customIcon: Icon = CalendarIcon, sx }) => (
    <Icon
      size={20}
      sx={{
        position: 'absolute',
        top: '8px',
        left: '8px',
        pointerEvents: 'none',
        color: isDatepickerActive ? 'green.40' : 'gray.100',
        ...sx,
      }}
    />
  )
);

const DatePickerInput = React.forwardRef(({ selectedDate, sx, ...props }, ref) => {
  const { locale } = useLocale();

  const value = useMemo(() => Intl.DateTimeFormat(locale).format(new Date(selectedDate)), [
    locale,
    selectedDate,
  ]);

  return (
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
        ...sx,
      }}
      {...props}
    />
  );
});

const InputContainer = React.forwardRef(({ isDatepickerActive, ...props }, ref) => {
  return (
    <Flex
      ref={ref}
      sx={{
        position: 'relative',

        alignItems: 'center',
        justifyContent: 'flex-start',

        height: '2.25rem',
        width: '16rem',

        borderRadius: 'default',

        backgroundColor: 'gray.15',

        ...(isDatepickerActive && {
          backgroundColor: 'white',
          boxShadow: boxShadow('button.focus', 'green.30'),
          zIndex: '1',
        }),
      }}
      {...props}
    />
  );
});

export default DatePicker;
