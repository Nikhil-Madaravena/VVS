/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'baby-pink': {
          50: '#fef1f7',
          100: '#fee5f0',
          200: '#fecce3',
          300: '#ffa2ca',
          400: '#ff77b0',
          500: '#fc4d93',
          600: '#ed2872',
          700: '#d91a5c',
          800: '#b1184d',
          900: '#931a44',
        },
        'lavender': {
          50: '#f4f3ff',
          100: '#ebecff',
          200: '#d9d8fe',
          300: '#bfb8fc',
          400: '#a28ff8',
          500: '#8a6cf2',
          600: '#764be6',
          700: '#6639cb',
          800: '#5531a6',
          900: '#472d85',
        }
      },
      fontFamily: {
        'dancing': ['"Dancing Script"', 'cursive'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay-1': 'float 6s ease-in-out 1s infinite',
        'float-delay-2': 'float 6s ease-in-out 2s infinite',
        'float-delay-3': 'float 6s ease-in-out 3s infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
};