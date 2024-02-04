import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from './locales/translation-en.json';
import es from './locales/translation-es.json';
import fr from './locales/translation-fr.json';
import pa from './locales/translation-pa.json';
import uk from './locales/translation-uk.json';

// the translations
const resources = {
  en: { translation: en },
  es: { translation: es },
  fr: { translation: fr },
  pa: { translation: pa },
  uk: { translation: uk },
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'en',
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    debug: false,  // set to true to debug if issues found
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
