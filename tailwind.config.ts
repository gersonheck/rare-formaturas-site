import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        primary: {
          DEFAULT: '#C9A84C',
          light: '#E2C97E',
          dark: '#9E7B2C',
        },
        secondary: {
          DEFAULT: '#1A1A2E',
          mid: '#2D2D4E',
          deep: '#111122',
        },
        accent: '#F5F0E8',
        whatsapp: {
          DEFAULT: '#25D366',
          dark: '#1DA851',
        },
        neutral: {
          100: '#F8F6F2',
          300: '#D4CFC6',
          500: '#8C8880',
          700: '#4A4845',
          900: '#1C1B1A',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-gold': 'linear-gradient(135deg, #C9A84C 0%, #E2C97E 50%, #9E7B2C 100%)',
      },
      keyframes: {
        pulse_ring: {
          '0%': { transform: 'scale(1)', opacity: '0.8' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        fade_in_up: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        pulse_ring: 'pulse_ring 1.8s ease-out infinite',
        fade_in_up: 'fade_in_up 0.7s ease forwards',
      },
    },
  },
  plugins: [],
}

export default config
