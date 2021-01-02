import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// (tip move them in a JSON file and import them)
const resources = {
  "zh-TW": {
    translation: {
      common: {
        username: "名稱",
        password: "密碼",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "zh-TW",
  fallbackLng: "zh-TW",
  // keySeparator: false,
  keySeparator: ".",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
