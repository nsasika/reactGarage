import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

function initializeTranslations(languages) {
  const instance = i18n.use(LanguageDetector).use(initReactI18next); // passes i18n down to react-i18next

  console.log('Initializing translations', languages);

  return instance.init({
    resources: languages,

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'locale',
    },
  });
}

export default initializeTranslations;
