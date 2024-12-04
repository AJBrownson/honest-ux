import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bg: "#121314",
        semiBg: "#1A1B1E",
        cardBg: "#232529",
        stroke: "#2F3037",
        strokeHover: "#474853",
        titleText: "#F9F9F9",
        bodyText: "#A7AAB4",
      },
      fontFamily: {
        neuePower: [`var(--font-neue-power)`],
        poppins: [`var(--font-poppins)`],
      },
    },
    animation: {
      "infinite-scroll": "infinite-scroll 10s linear infinite",
      "bounce": "bounce 1s infinte",
    },
    keyframes: {
      "infinite-scroll": {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(-100%)" },
      },
      "bounce": {
        "0%, 100%": { transform: "translateY(-25%); animation-timing-function: cubic-bezier(0.8, 0, 1, 1);" },
        "50%": { transform: "translateY(0); animation-timing-function: cubic-bezier(0, 0, 0.2, 1);" },
      },
    },
  },
  plugins: [],
};
export default config;
