import { I18nextProvider, Trans } from 'react-i18next';

import { i18n } from './i18n';
import { useEffect } from 'react';

const LANGUAGE_KEY = 'i18nextLng';

export const I18TranslationProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const handleLanguageChange = (newLanguage: string) => {
      localStorage.setItem(LANGUAGE_KEY, newLanguage);
      document.documentElement.lang = newLanguage;
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export { Trans };
