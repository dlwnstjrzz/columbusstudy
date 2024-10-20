/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Spoqa Han Sans Neo", "sans-serif"],
      },
      fontSize: {
        // 데스크탑 스타일
        "desktop-heading": ["42px", { lineHeight: "150%", fontWeight: "700" }],
        "desktop-paragraph1": [
          "24px",
          { lineHeight: "150%", fontWeight: "400" },
        ],
        "desktop-paragraph2": [
          "24px",
          { lineHeight: "150%", fontWeight: "700" },
        ],
        "desktop-description": [
          "16px",
          { lineHeight: "150%", fontWeight: "400" },
        ],
        "desktop-button": ["16px", { lineHeight: "150%", fontWeight: "500" }],

        // 모바일 스타일
        "mobile-heading": ["20px", { lineHeight: "150%", fontWeight: "700" }],
        "mobile-paragraph1": [
          "16px",
          { lineHeight: "150%", fontWeight: "400" },
        ],
        "mobile-paragraph2": [
          "16px",
          { lineHeight: "150%", fontWeight: "700" },
        ],
        "mobile-description": [
          "14px",
          { lineHeight: "150%", fontWeight: "400" },
        ],
        "mobile-button": ["14px", { lineHeight: "150%", fontWeight: "500" }],

        // 기존 스타일 유지
        subtitle1: ["24px", { lineHeight: "30px", fontWeight: "700" }],
        "mobile-headline": [
          "20px",
          { lineHeight: "25.04px", fontWeight: "700" },
        ],
        "mobile-subtitle": ["16px", { lineHeight: "24px", fontWeight: "700" }],
        "mobile-body": ["16px", { lineHeight: "24px", fontWeight: "400" }],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
