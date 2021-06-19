import React, {
  useState,
  useCallback,
  useReducer,
  useEffect,
  useLayoutEffect,
  useMemo,
} from 'react';
import dayjs from 'dayjs';
import weekday from 'dayjs/esm/plugin/weekday';
import isBetween from 'dayjs/esm/plugin/isBetween';
import localeData from 'dayjs/esm/plugin/localeData';
import utc from 'dayjs/esm/plugin/utc';
import objectSupport from 'dayjs/esm/plugin/objectSupport';
import toObject from 'dayjs/esm/plugin/toObject';
import Flex from '../Flex';
import Box from '../Box';
import Button from '../Button';
import Stack from '../Stack';
import { ChevronLeftIcon, ChevronRightIcon } from '../../icons';
import formatDateTime from '../../localization/formatDateTime';
import useLocale from '../../localization/useLocale';

dayjs.extend(isBetween);
dayjs.extend(objectSupport);
dayjs.extend(weekday);
dayjs.extend(toObject);
dayjs.extend(localeData);
dayjs.extend(utc);

const getCalendarWeeks = date => {
  const calendarStart = dayjs(date).startOf('month').startOf('week').startOf('day');
  const calendarEnd = dayjs(date).endOf('month').endOf('week').endOf('day');
  const weeks = new Array(calendarEnd.diff(calendarStart, 'd') + 1)
    .fill(null)
    .reduce((acc, d, i) => {
      if (Math.floor(i / 7) === acc.length) {
        acc.push([dayjs(calendarStart).add(i, 'day')]);
        return acc;
      }
      acc[acc.length - 1].push(dayjs(calendarStart).add(i, 'day'));
      return acc;
    }, []);
  return weeks;
};

const DatePickerCalendar = React.forwardRef(
  (
    {
      selectedDate,
      onSelectedDateChange,
      startDate,
      endDate,
      minDate,
      maxDate,
      selectsStart,
      selectsEnd,
    },
    ref
  ) => {
    const [isYearSelectorView, setIsYearSelectorView] = useState(false);
    const [viewDate, setViewDate] = useState(selectedDate);

    useLayoutEffect(() => {
      setViewDate(selectedDate);
    }, [selectedDate]);

    const modifyViewDate = useCallback(
      (value, unit) => {
        const method = value >= 0 ? 'add' : 'subtract';
        const result = dayjs(viewDate)[method](Math.abs(value), unit).toISOString();
        setViewDate(result);
      },
      [viewDate]
    );

    return (
      <CalendarContainer ref={ref}>
        <CalendarHeader
          viewDate={viewDate}
          modifyViewDate={modifyViewDate}
          isYearSelectorView={isYearSelectorView}
          setIsYearSelectorView={setIsYearSelectorView}
        />
        <CalendarBody
          selectedDate={selectedDate}
          viewDate={viewDate}
          modifyViewDate={modifyViewDate}
          onSelectedDateChange={onSelectedDateChange}
          startDate={startDate}
          endDate={endDate}
          selectsStart={selectsStart}
          selectsEnd={selectsEnd}
        >
          {isYearSelectorView ? <CalendarYearSelector /> : <CalendarMonth />}
        </CalendarBody>
        <CalendarFooter />
      </CalendarContainer>
    );
  }
);

const CalendarContainer = React.forwardRef((props, ref) => {
  return (
    <Stack
      ref={ref}
      gap={2}
      sx={{
        alignItems: 'center',
        backgroundColor: 'white',
        boxShadow: '0 8px 12px 0 rgba(24, 60, 52, 0.3), 0 0 1px 0 rgba(24, 60, 52, 0.3);',
        py: 4,
        zIndex: '2',
      }}
      {...props}
    />
  );
});

const CalendarHeaderButton = ({ icon: Icon, onClick, children, ...props }) => {
  return (
    <Button
      size='compact'
      sx={{ p: 2, color: 'text.default' }}
      variant='subtle'
      onClick={onClick}
      {...props}
    >
      {Icon ? <Icon size={20} /> : children}
    </Button>
  );
};

const CalendarHeader = React.forwardRef(
  (
    { viewDate, modifyViewDate, isYearSelectorView, setIsYearSelectorView, increment, decrement },
    ref
  ) => {
    const { locale } = useLocale();

    return (
      <Flex sx={{ justifyContent: 'space-between', width: '100%', alignItems: 'center', px: 4 }}>
        <CalendarHeaderButton icon={ChevronLeftIcon} onClick={() => modifyViewDate(-1, 'month')} />
        {formatDateTime(viewDate, locale, { month: 'long', year: 'numeric' })}
        <CalendarHeaderButton icon={ChevronRightIcon} onClick={() => modifyViewDate(1, 'month')} />
      </Flex>
    );
  }
);

const CalendarBody = React.forwardRef(
  (
    {
      selectedDate,
      viewDate,
      modifyViewDate,
      onSelectedDateChange,
      startDate,
      endDate,
      selectsStart,
      selectsEnd,
      ...props
    },
    ref
  ) => {
    const weeks = useMemo(() => getCalendarWeeks(viewDate), [viewDate]);
    const { locale } = useLocale();

    const onCalendarDayClick = val => {
      onSelectedDateChange(val.format('YYYY-MM-DD'));
    };

    const isDisabled = day =>
      selectsStart
        ? dayjs(day).isAfter(endDate)
        : selectsEnd
        ? dayjs(day).isBefore(startDate)
        : false;

    return (
      <Stack gap={0} sx={{ px: 4 }}>
        <CalendarDayNames />
        {weeks.map(week => (
          <CalendarWeek key={dayjs(week[0]).toISOString()}>
            {week.map(day => (
              <CalendarDay
                key={dayjs(day).toISOString()}
                isOutsideMonth={!dayjs(day).isSame(viewDate, 'month')}
                isToday={dayjs(day).isSame(dayjs(), 'day')}
                isSelected={dayjs(day).isSame(selectedDate, 'day')}
                isStart={dayjs(day).isSame(startDate, 'day')}
                isEnd={dayjs(day).isSame(endDate, 'day')}
                isInRange={dayjs(day).isBetween(dayjs(startDate), dayjs(endDate))}
                onClick={() => onCalendarDayClick(day)}
                isDisabled={isDisabled(day)}
              >
                {dayjs(day).format('D')}
              </CalendarDay>
            ))}
          </CalendarWeek>
        ))}
      </Stack>
    );
  }
);

const CalendarFooter = React.forwardRef((props, ref) => {
  return null;
});

const getDayNames = () =>
  dayjs
    .localeData()
    .weekdaysMin()
    .map((e, index, arr) => arr[(index + dayjs.localeData().firstDayOfWeek()) % arr.length]);

const CalendarDayNames = React.forwardRef((props, ref) => {
  return (
    <Flex.Row>
      {getDayNames().map(d => (
        <Box
          key={d}
          sx={{
            width: '2rem',
            lineHeight: '2rem',
            textAlign: 'center',
            margin: '0',
            color: 'gray.40',
            fontSize: 2,
          }}
        >
          {d}
        </Box>
      ))}
    </Flex.Row>
  );
});

const CalendarDay = React.forwardRef(
  (
    {
      isToday,
      isOutsideMonth,
      isSelected,
      isStart,
      isEnd,
      isInRange,
      isDisabled,
      onClick,
      children,
    },
    ref
  ) => {
    return (
      <Box
        tabIndex={!isDisabled ? '0' : undefined}
        onClick={!isDisabled ? onClick : () => null}
        sx={{
          display: 'inline-block',
          width: '2rem',
          textAlign: 'center',
          margin: '0',
          lineHeight: '2rem',
          cursor: 'pointer',
          fontSize: 2,
          '&:hover': {
            backgroundColor: 'gray.15',
          },
          '&:focus': {
            outline: `2px solid`,
            outlineColor: 'green.30',
            outlineOffset: '-1px',
            zIndex: '1',
          },
          '&:active': {
            backgroundColor: 'green.15',
          },
          transition: 'background-color 0.1s',
          ...(isInRange && {
            backgroundColor: 'green.15',
            '&:hover': { backgroundColor: 'green.20' },
          }),
          ...(isOutsideMonth && { color: 'gray.30' }),
          ...((isSelected || isStart || isEnd) && {
            color: 'white',
            backgroundColor: 'green.40',
            '&:hover': {
              backgroundColor: 'green.40',
            },
            '&:active': {
              backgroundColor: 'green.50',
            },
          }),
          ...(isToday && { textDecoration: 'underline' }),
          ...(isDisabled && {
            color: 'text.subdued',
            backgroundColor: 'gray.10',
            pointerEvents: 'none',
          }),
        }}
      >
        {children}
      </Box>
    );
  }
);

const CalendarWeek = React.forwardRef((props, ref) => {
  return <Flex.Row>{props.children}</Flex.Row>;
});

const CalendarMonth = React.forwardRef((props, ref) => {
  return null;
});

const CalendarYearSelector = React.forwardRef((props, ref) => {
  return null;
});

export default DatePickerCalendar;
