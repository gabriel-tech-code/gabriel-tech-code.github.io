import typography from '@tailwindcss/typography';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'dark-bg': '#121212',
        'dark-accent': '#00FFFF',
        'dark-text': '#E0E0E0',

        'light-bg': '#D1D5DB',
        'light-accent': '#FF2A2A',
        'light-text': '#111111',
      },

      typography: {
        DEFAULT: {
          css: {
            h1: { color: "#FF2A2A" }, // light-accent (red)
            h2: { color: "#FF2A2A" },
            h3: { color: "#FF2A2A" },
          },
        },
        invert: {
          css: {
            h1: { color: "#00FFFF" }, // dark-accent (cyan)
            h2: { color: "#00FFFF" },
            h3: { color: "#00FFFF" },
          },
        },
      },
    },
  },
  plugins: [typography],
};
