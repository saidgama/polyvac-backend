export default {
  config: {
    locales: ["en", "es"],
    tutorials: false,
    // Override or extend the theme
    theme: {
      // overwrite light theme properties
      light: {
        colors: {
          primary100: "#f6ecfc",
          primary200: "#e0c1f4",
          primary500: "#3651e8",
          primary600: "#3651e8",
          primary700: "#3651e8",
          danger700: "#b72b1a",
        },
      },

    },
  },
  bootstrap() {},
};