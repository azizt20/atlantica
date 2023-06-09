import { createI18n } from "vue-i18n";
import en from "../locales/en.json";
import ru from "../locales/ru.json";
import zh from "../locales/zh.json";
let localeL = "";
if (process.client) {
  localeL = localStorage.getItem("locale") || "";
  localeL = JSON.parse(localeL)?.alpha;
}
export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: localeL || "ru",
    messages: {
      en,
      ru,
      zh,
    },
  });

  vueApp.use(i18n);
});
