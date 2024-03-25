import favicon from "../extensions/logos/test_d5256bf134.png";

const config = {
  tutorials: false,
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
  theme: {
    light: {
      colors: {
        primary100: '#ffe3e3', // Lightest tint of red for hover states or backgrounds
        primary200: '#ffbab8', // Lighter tint of red for borders or lighter elements
        primary500: '#c91229', // Main brand red color for buttons, links, etc
        primary600: '#a10f22', // Slightly darker red for active states or highlights
        primary700: '#890c1d', // Even darker red for headers or important UI elements
        buttonPrimary500: '#c91229',
        buttonPrimary600: '#a10f22',
        secondary100: '#fff4e1', // Lightest tint of yellow
        secondary200: '#ffe8b3', // Lighter tint of yellow
        secondary500: '#f4ac31', // Main brand yellow color
        secondary600: '#db9814', // Slightly darker yellow
        secondary700: '#c6840e', // Even darker yellow
        // Other colors can be defined here as needed
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
