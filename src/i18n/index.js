import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { LANGUAGES } from "./languages";

import en from "./locales/en.json";
import zh from "./locales/zh.json";
import es from "./locales/es.json";
import pt from "./locales/pt.json";
import id from "./locales/id.json";
import fr from "./locales/fr.json";
import ar from "./locales/ar.json";
import ja from "./locales/ja.json";

const resources = {
  en: { translation: en },
  zh: { translation: zh },
  es: { translation: es },
  pt: { translation: pt },
  id: { translation: id },
  fr: { translation: fr },
  ar: { translation: ar },
  ja: { translation: ja },
};

// Language badalte hi <html lang> aur dir (ltr/rtl) set karo
function applyLanguage(lng) {
  const code = (lng || "en").split("-")[0];
  const lang = LANGUAGES.find((l) => l.code === code);
  document.documentElement.lang = code;
  document.documentElement.dir = lang ? lang.dir : "ltr";
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: LANGUAGES.map((l) => l.code),
    nonExplicitSupportedLngs: true,
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

i18n.on("languageChanged", applyLanguage);
applyLanguage(i18n.language);

export default i18n;