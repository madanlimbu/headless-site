/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rosy: {
          100: "#F9F1F0",
          200: "#FADCD9",
          300: "#F8AFA6",
          400: "#F79489",
        },
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-pre-bg": theme("colors.rosy[100]"),
            "--tw-prose-pre-code": "#24292e",
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
