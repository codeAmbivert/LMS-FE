/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lmsPrimary: "#5E4AD6",
        lmsSecondary1: "#8E4AD6",
        lmsSecondary2: "#F56630",
        lmsSuccess50: "#D7F5D7",
        lmsSuccess100: "#32CD32",
        lmsWarning: "#FF4500",
        lmsNeutral: "#F7F9FB",
        lmsBorder: "#D0D5DD",
        lmsGrayText: "#667185",
        lmsBlack: "#101928",
      },
    },
  },
  plugins: [],
};
