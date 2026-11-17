/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316', // Main Orange
          600: '#ea580c', // Darker Orange
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        charcoal: {
          50: '#f6f7f9',
          100: '#eceff2',
          200: '#d9dee4',
          300: '#b8c1cd',
          400: '#8e9caa',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          850: '#17202e',
          900: '#0f172a', // Deep Charcoal
          950: '#0a0f18',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace']
      }
    },
  },
  plugins: [],
}
