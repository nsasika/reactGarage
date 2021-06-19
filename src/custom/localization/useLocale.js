import { useMemo } from 'react';
import { useLocalStorage } from 'react-use';

const PAGERO_USER_LOCALE_STORAGE_KEY = 'locale';
const PAGERO_USER_LOCALE_DEFAULT = 'en';

const CONFIG = { raw: true };

const useLocale = () => {
  const [locale, setLocale] = useLocalStorage(
    PAGERO_USER_LOCALE_STORAGE_KEY,
    PAGERO_USER_LOCALE_DEFAULT,
    CONFIG
  );

  /**
   * If the locale value in localStorage has underscores (ie. en_GB) they will be replaced
   * with hyphens (en-GB) to match the Intl standard before being returned. It is important
   * that the localStorage value is not corrected as it is used by external components.
   */

  return useMemo(() => {
    const standardizedLocaleString = locale.replace('_', '-');
    return { locale: standardizedLocaleString, setLocale };
  }, [locale, setLocale]);
};

export default useLocale;
