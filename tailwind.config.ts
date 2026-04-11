import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        sac: {
          orange: "#f38221",
          "orange-soft": "rgb(250, 199, 170)",
          dark: "#1a1a1a",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "Poppins", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
