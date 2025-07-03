/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Dark Green Trading Platform Colors
        primary: {
          DEFAULT: "#00ff88", // accent-green
          dark: "#0a0f0a",
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#1a1f1a",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#00ff88",
          bright: "#39ff14",
          dark: "#004d2b",
          foreground: "#000000",
        },
        background: {
          DEFAULT: "#0a0f0a",
          secondary: "#1a1f1a",
          card: "#1e2f1e",
        },
        foreground: "#ffffff",
        text: {
          primary: "#ffffff",
          secondary: "#b3b3b3",
          accent: "#00ff88",
          muted: "#666666",
        },
        green: {
          50: "#f0fff4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#00ff88", // Primary accent green
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
          neon: "#39ff14", // Bright neon green
          dark: "#004d2b", // Dark green
        },
        muted: {
          DEFAULT: "#666666",
          foreground: "#b3b3b3",
        },
        border: "rgba(0, 255, 136, 0.2)",
        input: "rgba(30, 47, 30, 0.8)",
        ring: "#00ff88",
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff",
        },
        // Additional trading platform colors
        success: "#00ff88",
        warning: "#f59e0b",
        error: "#ef4444",
        info: "#3b82f6",
      },
      backgroundImage: {
        "gradient-green": "linear-gradient(135deg, #003d2b, #00ff88, #39ff14)",
        "gradient-radial":
          "radial-gradient(circle at center, #003d2b 0%, #0a0f0a 70%)",
        "grid-pattern": `
          linear-gradient(rgba(0, 255, 136, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 136, 0.03) 1px, transparent 1px)
        `,
      },
      boxShadow: {
        glow: "0 0 20px rgba(0, 255, 136, 0.5)",
        "glow-lg": "0 0 30px rgba(0, 255, 136, 0.8)",
        card: "0 20px 40px rgba(0, 255, 136, 0.1)",
        button: "0 15px 30px rgba(0, 255, 136, 0.4)",
      },
      backdropBlur: {
        xs: "2px",
      },
      fontFamily: {
        sans: ["Inter", "Segoe UI", "Roboto", "sans-serif"],
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
      },
      fontWeight: {
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      borderRadius: {
        lg: "16px",
        md: "12px",
        sm: "8px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "30px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeInUp: {
          from: {
            opacity: "0",
            transform: "translateY(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        glow: {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(0, 255, 136, 0.5)",
          },
          "50%": {
            boxShadow: "0 0 30px rgba(0, 255, 136, 0.8)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fadeInUp 0.8s ease forwards",
        glow: "glow 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
        bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
