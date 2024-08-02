/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        chubbo: ["Chubbo", "serif"],
        supreme: ["Supreme", "sans-serif"],
      },
      boxShadow: {
        bold: "6px 6px 0 0 rgba(0, 0, 0, 1)",
        "bold-sm": "4px 4px 0 0 rgba(0, 0, 0, 1)",
        "bold-lg": "8px 8px 0 0 rgba(0, 0, 0, 1)",
        "bold-xl": "12px 12px 0 0 rgba(0, 0, 0, 1)",
      },
    },
  },
  plugins: [],
};
