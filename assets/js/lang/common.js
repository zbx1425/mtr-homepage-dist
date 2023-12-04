var messages = {};

document.addEventListener("DOMContentLoaded", function() {
  const i18n = VueI18n.createI18n({
    locale: navigator.language || navigator.useLanguage,
    fallbackLocale: 'en',
    messages,
  });

  const app = Vue.createApp({
    
  });

  app.use(i18n)
  app.mount('body')
});
