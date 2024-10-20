import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },

    ns: ["common"],
    defaultNS: "common",
    react: {
      bindI18n: "languageChanged loaded",
      nsMode: "default",
      useSuspense: true,
    },
  });

const useI18n = () => {
  const { t, i18n } = useTranslation();
  return { t, i18n };
};

export { useI18n, i18n };
