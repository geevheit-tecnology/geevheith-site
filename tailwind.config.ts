import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          950: "rgb(15, 23, 42)",
          900: "rgb(15, 23, 42)",
          800: "rgb(30, 41, 59)",
          700: "rgb(51, 65, 85)",
          400: "rgb(148, 163, 184)",
          300: "rgb(203, 213, 225)",
          200: "rgb(226, 232, 240)",
          100: "rgb(241, 245, 249)",
        },
        cyan: {
          300: "rgb(165, 243, 252)",
          400: "rgb(34, 211, 238)",
          500: "rgb(6, 182, 212)",
        },
        blue: {
          400: "rgb(96, 165, 250)",
          500: "rgb(59, 130, 246)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
