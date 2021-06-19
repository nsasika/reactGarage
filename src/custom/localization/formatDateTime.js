export default function formatDateTime(value, locale, options = {}) {
  const parsedValue = new Date(value);
  return new Intl.DateTimeFormat(locale, options).format(parsedValue);
}
