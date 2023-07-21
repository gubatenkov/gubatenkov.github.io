/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateY(0%)' },
          '75%': { transform: 'translateY(-25%)' },
          '25%': { transform: 'translateY(45%)' },
        },
        spin: {
          '100%': { transform: 'rotate(360deg)' },
          '0%': { transform: 'rotate(0deg)' },
        },
      },
      fontFamily: {
        gochi: ['GochiHand', ...fontFamily.sans],
        lexend: ['Lexend', ...fontFamily.sans],
        inter: ['Inter', ...fontFamily.sans],
        sans: ['Inter', ...fontFamily.sans],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  plugins: [require('tailwindcss-animated')],
}
