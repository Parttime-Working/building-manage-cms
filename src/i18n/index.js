import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// (tip move them in a JSON file and import them)
const resources = {
  "zh-TW": {
    translation: {
      common: {
        username: "名稱",
        password: "密碼",
        submit: "提交",
      },
      loginForm: {
        remember: "記住我",
        errorMessages: {
          usernameRequired: "請輸入名稱!",
          passwordRequired: "請輸入密碼!",
        },
      },
    },
  },
  en: {
    translation: {
      common: {
        username: "Username",
        password: "Password",
        submit: "Submit",
      },
      loginForm: {
        remember: "Remember me",
        errorMessages: {
          usernameRequired: "Please input your username!",
          passwordRequired: "Please input your password!",
        },
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
