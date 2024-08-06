import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    variants: {
      extends: {
        display: ["group-hover"],
        boxShadow: {
          "custom-shadow": "0 0 20px 1px rgba(200, 200, 200, 0.1)",
        },
      },
    },
    screens: {
      sm: "480px",
      md: "872px",
      lg: "1135px",
      xl: "1440px",
      xxl: "1620px",
    },
    extend: {
      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
      },
      gridTemplateColumns: {
        "auto-fit-minmax": "repeat(auto-fit, minmax(240px, 1fr))",
      },
      height: {
        "calc-100": "calc(100vh - 4rem)",
      },
      spacing: {
        "128": "32rem",
        "144": "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      colors: {
        blue: "#3461FF",
        mediumblue: "#395DDB",
        semiblue: "#E9EEFF",
        normalblue: "#5171E2",
        lightblue: "#F7F8FB",
        deepsky: "#808BAB",
        description: "#888888",
        // pink: "#ff49db",
        // orange: "#ff7849",
        // green: "#13ce66",
        // yellow: "#ffc82c",
        // "gray-dark": "#273444",
        // gray: "#8492a6",
        // "gray-light": "#d3dce6",
        "gradient-start": "#00daef",
        "gradient-end": "#bc67ff",
      },
      animation: {
        moveGrad: "MoveGrad 5s ease infinite",
      },
      keyframes: {
        MoveGrad: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      backgroundSize: {
        "200%": "200% 200%",
      },
      backgroundImage: {
        "guide-intro": "url('/images/intro.png')",
      },
    },
  },
  plugins: [],
};
export default config;
