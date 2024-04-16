import favicon from "../extensions/logos/test_d5256bf134.png";

const config = {
  tutorials: false,
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "Albilad Branch System",
      // "app.components.LeftMenu.navbrand.workplace": "...",
    },
  },
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
  head: {
    favicon: favicon,
  },
  auth: {
    logo: favicon,
  },
  // Add a new locale, other than 'en'
  locales: ["ar", "en"],
  // Replace the Strapi logo in the main navigation
  menu: {
    logo: favicon,
  },
  theme: {
    light: {
      colors: {
        primary100: '#ffffff', // Lightest possible (white, you might need to adjust this manually)
        primary200: '#ffe3e3', // Was primary100
        primary500: '#ffbab8', // Was primary200
        primary600: '#c91229', // Was primary500
        primary700: '#a10f22', // Was primary600
        buttonPrimary500: '#ffbab8', // Was primary200
        buttonPrimary600: '#c91229', // Was primary500
        secondary100: '#ffffff', // Lightest possible (white, adjust as needed)
        secondary200: '#fff4e1', // Was secondary100
        secondary500: '#ffe8b3', // Was secondary200
        secondary600: '#f4ac31', // Was secondary500
        secondary700: '#db9814', // Was secondary600
      },
      // Additional theme settings for light mode...
    },
    dark: {
      colors: {
        primary100: '#a10f22', // Dark theme, lighter red for hover states or backgrounds
        primary200: '#890c1d', // Dark theme, darker red for borders or elements
        primary500: '#c91229', // Main brand red color for buttons, links, etc
        primary600: '#750a18', // Even darker red for active states or highlights
        primary700: '#5e0814', // Dark theme, darkest red for headers or important UI elements
        buttonPrimary500: '#c91229',
        buttonPrimary600: '#a10f22',
        secondary100: '#db9814', // Lighter yellow for dark theme
        secondary200: '#c6840e', // Darker yellow for dark theme
        secondary500: '#f4ac31', // Main brand yellow color
        secondary600: '#d1921a', // Slightly darker yellow for dark theme
        secondary700: '#b78016', // Even darker yellow for dark theme
        // Other colors can be defined here as needed
      },
      // Additional theme settings for dark mode...
    },
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
