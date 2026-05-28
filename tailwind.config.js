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
            h1: { color: "#FF2A2A" },
            h2: { color: "#FF2A2A" },
            h3: { color: "#FF2A2A" },

            a: {
              color: "#FF2A2A",
              textDecoration: "underline",
              fontWeight: "600",
            },
            "a:hover": {
              color: "#b91c1c",
            },

            code: {
              color: "#FF2A2A",
              backgroundColor: "rgba(0,0,0,0.05)",
              padding: "2px 4px",
              borderRadius: "4px",
              fontWeight: "600",
            },

            pre: {
              backgroundColor: "#2a0000", // very dark red
              color: "#ffb3b3",           // soft red text
              padding: "1rem",
              borderRadius: "8px",
              overflowX: "auto",
              border: "1px solid #ff2a2a33",
            },

            "pre code": {
              backgroundColor: "transparent",
              color: "#ffb3b3",
              padding: "0",
            },
          },
        },

        invert: {
          css: {
            h1: { color: "#00FFFF" },
            h2: { color: "#00FFFF" },
            h3: { color: "#00FFFF" },

            a: {
              color: "#00FFFF",
              textDecoration: "underline",
              fontWeight: "600",
            },
            "a:hover": {
              color: "#0891b2",
            },

            code: {
              color: "#00FFFF",
              backgroundColor: "rgba(255,255,255,0.1)",
            },
            
            pre: {
              backgroundColor: "#001f26", // very dark cyan
              color: "#a6f7ff",           // soft cyan text
              padding: "1rem",
              borderRadius: "8px",
              overflowX: "auto",
              border: "1px solid #00ffff33",
            },

            "pre code": {
              backgroundColor: "transparent",
              color: "#a6f7ff",
              padding: "0",
            },
          },
        },
      },     
    },
  },
  plugins: [typography],
};
