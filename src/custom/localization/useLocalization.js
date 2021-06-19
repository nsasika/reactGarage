import { useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';
import useLocale from './useLocale';

const useLocalization = () => {
  const { i18n } = useTranslation();
  const { locale } = useLocale();

  useLayoutEffect(() => {
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [i18n, locale]);

  useLayoutEffect(() => {
    if (dayjs.locale() !== locale) {
      dayjs.locale(locale);
    }
  }, [locale]);
};

export default useLocalization;
