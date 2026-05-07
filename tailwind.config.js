/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF5E00', // Relats Orange
          hover: '#E65500',
        },
        relats: {
          dark: '#111111',
          light: '#DEDAD6',
          text: '#111111',
          secondary: '#666666',
        }
      },
      fontFamily: {
        hanken: ['"Hanken Grotesk"', 'sans-serif'],
      },
      spacing: {
        section: '120px',
      },
      maxWidth: {
        '8xl': '1440px',
      },
      borderRadius: {
        pill: '100px',
      },
    },
  },
  plugins: [],
}
