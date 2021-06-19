export default function formatCurrency(value, locale, { currencyCode }) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
  }).format(value);
}
