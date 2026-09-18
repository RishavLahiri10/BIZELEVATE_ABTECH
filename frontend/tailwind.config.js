/** @type {import('tailwindcss').Config} */

// Shared brand colours and typography for the Tailwind utility classes.
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef3fb",
          100: "#d6e2f3",
          200: "#adc5e8",
          300: "#84a8dc",
          400: "#4d7dc9",
          500: "#2a5cb0",
          600: "#1d4488",
          700: "#183a70",
          DEFAULT: "#142e5e", // main navy brand color
          800: "#122650",
          900: "#0d1c3c",
        },
        secondary: {
          50: "#e6f5f5",
          100: "#c0e5e4",
          200: "#96d3d1",
          300: "#69c0bd",
          400: "#3aada9",
          DEFAULT: "#0d6e6e", // main teal accent color
          600: "#0a5a5a",
          700: "#084646",
          800: "#053232",
          900: "#031e1e",
        },
        accent: {
          DEFAULT: "#f5a524", // call-to-action highlight color (amber)
          600: "#d98d10",
        },
      },
      fontFamily: {
        heading: ["Poppins", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 20px rgba(20, 46, 94, 0.08)",
        cardHover: "0 10px 30px rgba(20, 46, 94, 0.15)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      animation: {
        fadeInUp: "fadeInUp 0.7s ease forwards",
        fadeIn: "fadeIn 0.6s ease forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
