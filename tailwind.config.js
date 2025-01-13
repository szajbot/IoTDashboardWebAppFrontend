import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    defaultTheme: "dark2",
    themes: {
      dark2: {
        layout: {},
        colors: {
          primary: "#00e835",
          DEFAULT: "#000000",
          background:"#190029",
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
