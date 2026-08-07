/** @type {import('tailwindcss').Config} */
export default {
  // main.ts is scanned because it toggles the `hidden` class on the mobile
  // drawer; without it that utility would be purged out of the build.
  content: ["./index.html", "./src/**/*.ts"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#f6fafe",
        surface: "#f6fafe",
        "surface-container-lowest": "#ffffff",
        "surface-container-high": "#e4e9ed",
        "on-background": "#171c1f",
        "on-surface": "#171c1f",
        "on-surface-variant": "#3d494c",
        "outline-variant": "#bcc9cd",
        "primary-container": "#06b6d4",
        "on-primary-container": "#00424f",
      },
      borderRadius: {
        DEFAULT: "0.125rem",
      },
      fontFamily: {
        "display-lg": ["Geist"],
        "headline-lg": ["Geist"],
        "headline-md": ["Geist"],
        "body-md": ["Geist"],
        "body-sm": ["Geist"],
        "mono-label-md": ["JetBrains Mono"],
        "mono-label-sm": ["JetBrains Mono"],
      },
    },
  },
};
