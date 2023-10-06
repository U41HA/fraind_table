/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './components/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      suisse: ['Suisse Intl', 'sans-serif'],
    },

    fontSize: {
      xs: ['12px', '16px'],
      sm: ['20px', '28px'],
      base: ['16px', '24px'],
      lg: ['26px', '30px'],
      xl: [
        '36px',
        {
          lineHeight: '48px',
          letterSpacing: '0em',
          fontWeight: '700',
        },
      ],
    },

    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        tahiti: {
          DEFAULT: '#ffaa00',
          // For rgb
          100: 'rgb(var(--color-primary) / <alpha-value>)',
          // For rgba
          200: 'rgba(var(--color-secondary))',
        },
      },

      screens: {
        sm: '576px',
        // => @media (min-width: 576px) { ... }
        md: '960px',
        // => @media (min-width: 960px) { ... }
        lg: '1440px',
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
  plugins: [],
};
