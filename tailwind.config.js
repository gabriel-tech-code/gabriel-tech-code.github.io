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
    },
  },
  plugins: [],
}