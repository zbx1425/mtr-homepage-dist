var messages = {};

document.addEventListener("DOMContentLoaded", function() {
  const userLanguage = navigator.language || navigator.useLanguage;

  const i18n = VueI18n.createI18n({
    locale: userLanguage,
    fallbackLocale: 'en',
    messages,
  });

  const app = Vue.createApp({
    setup() {
      const langs = Vue.ref(messages);
      const showNavbar = Vue.ref(false);
      const scrolled = Vue.ref(false);
      
      return {
        langs,
        showNavbar,
        scrolled
      };
    },

    mounted() {
      window.addEventListener('scroll', () => {
        this.scrolled = window.scrollY > 0;
      });
    }
  });

  app.use(i18n)
  app.mount('body')
});
