'use strict'

let userLanguage = (navigator.language || navigator.userLanguage).toLowerCase();
while (userLanguage && !messages[userLanguage]) {
  if (userLanguage.indexOf('-') === -1) {
    userLanguage = 'en';
    break;
  } else {
    userLanguage = userLanguage.substring(0, userLanguage.lastIndexOf('-'));
  }
}

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

app.use(i18n);
app.mount('body');
