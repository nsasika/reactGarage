import React, { useState, useEffect, useCallback, useRef, useImperativeHandle } from 'react';
import { usePopper } from 'react-popper';
import Flex from '../Flex';
import Box from '../Box';
import { CalendarIcon } from '../../icons';
import boxShadow from '../../style-helpers/boxShadow';
import { useClickAway, useEvent, useKeyPressEvent, useKeyPress } from 'react-use';
import DatePickerCalendar from './DatePickerCalendar';
import { DatePickerInput } from './DatePickerInput';

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
    { selectedDate, onChange, startDate, endDate, minDate, maxDate, selectsStart, selectsEnd },
    ref
  ) => {
    const calendarRef = useRef();

    const [inputRef, isInputFocused] = useIsFocused();
    const [isCalendarActive, setIsCalendarActive] = useState(false);

    const [isDatePickerActive, setIsDatePickerActive] = useState(
      () => isInputFocused || isCalendarActive
    );

    const onSelectedDateChange = val => {
      onChange(val);
    };

    useClickAway(
      calendarRef,
      () => {
        !isInputFocused && setIsCalendarActive(false);
      },
      ['mouseup']
    );

    useKeyPressEvent(
      'Tab',
      () => {},
      () => !calendarRef.current?.contains(document.activeElement) && setIsDatePickerActive(false)
    );

    useEffect(() => {
      setIsDatePickerActive(isInputFocused || isCalendarActive);
    }, [isInputFocused, isCalendarActive]);

    useEffect(() => {
      setIsCalendarActive(isDatePickerActive);
    }, [isDatePickerActive]);

    return (
      <PopperNest
        ReferenceElementComponent={
          <DatePickerInput
            ref={inputRef}
            selectedDate={selectedDate}
            onChange={onSelectedDateChange}
            isDatePickerActive={isDatePickerActive}
          />
        }
        PopperElementComponent={
          <DatePickerCalendar
            ref={calendarRef}
            selectedDate={selectedDate}
            onSelectedDateChange={onSelectedDateChange}
            startDate={startDate}
            endDate={endDate}
            selectsStart={selectsStart}
            selectsEnd={selectsEnd}
          />
        }
        isPopperOpen={isDatePickerActive}
      />
    );
  }
);

const PopperNest = React.forwardRef(
  ({ ReferenceElementComponent, PopperElementComponent, isPopperOpen }, ref) => {
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);

    const { styles, attributes } = usePopper(referenceElement, popperElement, {
      strategy: 'fixed',
      modifiers: [
        { name: 'arrow', options: { element: arrowElement } },
        { name: 'offset', options: { offset: [0, 7] } },
      ],
    });

    return (
      <>
        <PopperReferenceElement ref={setReferenceElement}>
          {ReferenceElementComponent}
        </PopperReferenceElement>

        {isPopperOpen && (
          <PopperElement ref={setPopperElement} style={styles.popper} {...attributes.popper}>
            {PopperElementComponent}
            <PopperArrow ref={setArrowElement} style={styles.arrow} />
          </PopperElement>
        )}
      </>
    );
  }
);

const PopperReferenceElement = React.forwardRef((props, ref) => <Box ref={ref} {...props} />);

const PopperElement = React.forwardRef((props, ref) => (
  <Box ref={ref} sx={{ '&&': { margin: 0 }, zIndex: '1' }} {...props} />
));

const PopperArrow = React.forwardRef((props, ref) => <Box ref={ref} {...props} />);

export default DatePicker;
