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
        bg: "#0D0D0D",
        semiBg: "#171717",
        semiBg2: "#131313",
        stroke: "#292929",
        strokeHover: "#474853",
        titleText: "#E3E3E3",
        bodyText: "#A8A8A8",
        softBodyText: "#8A8A8A",
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
