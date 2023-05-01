/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      josef: ["Josefin Sans", "sans-serif"],
      lato: ["Lato", "sans-serif"],
    },
    screens: {
      sm: "567px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        primary: " #FB2E86",
        secondary: "#7E33E0",
        heading: "#151875",
        heading2: "#0D0E43",
        "light-Pink": "#F2F0FF",
      },
    },
  },
  plugins: [],
};
