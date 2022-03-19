import { createI18n } from "vue-i18n";
import zhCN from "./lang/zh-CN";
import enUS from "./lang/en-US";

const messages = {
  "zh-CN": {
    ...zhCN,
  },
  "en-US": {
    ...enUS,
  },
};

const i18n = createI18n({
  legacy: false,
  locale: "zh-CN",
  fallbackLocale: "en-US",
  messages,
});

export const i18nRender = (key: string) => i18n.global.t(key);

export default i18n;
