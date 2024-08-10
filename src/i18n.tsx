import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import direct des fichiers de traduction
import enTranslation from './locales/en/common.json';
import frTranslation from './locales/fr/common.json';
import cnTranslation from './locales/cn/common.json';

const isBrowser = typeof window !== 'undefined';

if (isBrowser) {
  i18n.use(LanguageDetector); // Ajout du détecteur de langue uniquement en environnement client
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      fr: { translation: frTranslation },
      cn: { translation: cnTranslation },
    },
    lng: 'fr', // Langue par défaut au chargement
    fallbackLng: 'fr', // Langue de secours
    debug: false, // Pour voir les logs de détection en mode développement
    detection: {
      // Configuration du détecteur (uniquement en mode client)
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'cookie'], // Où stocker la langue détectée
    },
    interpolation: {
      escapeValue: false, // React échappe déjà les valeurs
    },
  });

export default i18n;