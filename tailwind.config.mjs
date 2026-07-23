/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          800: '#142542',
          900: '#0B1B3D',
        },
        gold: {
          400: '#FCD34D',
          500: '#D4AF37',
          600: '#B49126',
        },
        ivory: '#FAF9F6'
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    }
  },
  plugins: [],
}
