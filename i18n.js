const NextI18Next = require('next-i18next').default;
const initialLang = process.env.NODE_ENV === 'production' ? 'pl' : 'en';

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: initialLang,
  otherLanguages: [initialLang],
  saveMissing: true,
  saveMissingTo: 'all',
  react: { wait: true },
  debug: true,
  backend: {
    allowMultiLoading: true,
    loadPath: '/static/locales/{{lng}}/{{ns}}.json',
    addPath: '/static/locales/add/{{lng}}/{{ns}}',
  },
  missingKeyHandler: (lng, ns, key, fallbackValue) => {
    const i18n = NextI18NextInstance.i18n;

    i18n.services.backendConnector.saveMissing(
      i18n.options.allLanguages,
      ns,
      key,
      fallbackValue
    );
  },
  serverLanguageDetection: false,
});

module.exports = NextI18NextInstance;
