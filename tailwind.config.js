import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        myDarkGrey: "#1a1a1a",
        myGrey: "#262626",
        myLightGrey: "#333333",
        myDarkPurple: "#400080",
        myPurple: "#6600cc",
        myLightPurple: "#9933ff",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui({
    defaultTheme: "dark2",
    themes: {
      dark2: {
        layout: {},
        colors: {
          primary: "#00e835",
          DEFAULT: "#000000",
          background:"#1a1a1a",
          foreground:"#ffffff",
          divider:"#000000",
          overlay:"#00e835",
          focus: "#00e835",
          content1: "#660061",
          content2: "#00e835",
          content3: "#363535",
          content4: "#00e835",
        },
      }
    }
  })],
}
