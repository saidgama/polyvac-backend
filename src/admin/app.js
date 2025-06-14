import logo from './extensions/logo.png';
import favicon from './extensions/favicon.png';

export default {
  config: {
    head: {
      favicon
    },
    auth: { 
      logo
    },
    menu: { 
      logo
    },
    
    locales: ["en", "es"],
    tutorials: false,
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "Panel de administración",
        "Auth.form.welcome.title": "Panel de administración",
        "Auth.form.welcome.subtitle": "Inicia sesión para continuar",

      },
      es: {
        "app.components.LeftMenu.navbrand.title": "Panel de administración",
        "Auth.form.welcome.title": "Panel de administración",
        "Auth.form.welcome.subtitle": "Inicia sesión para continuar",
        "app.components.LeftMenu.navbrand.workplace": "Panel de administración",
      },
    },
    theme: {
      // overwrite light theme properties
      light: {
        colors: {
          primary100: "#B5C6FF",
          primary200: "#2E3A62",
          primary500: "#2E3A62",
          primary600: "#2E3A62",
          primary700: "#2E3A62",
          danger700:  "red",
          buttonPrimary500: "#2E3A62",
          buttonPrimary600: "#2E3A62",
          
        },
      },

    },
  },
  bootstrap() {},
};