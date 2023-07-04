/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
        'xl': '1440px'
      },
      fontFamily: {
        'body': 'var(--ff-primary)',
        'heading': 'var(--ff-secondary)'
      },
      colors: {
        primary: {
          intro: 'hsl(var(--intro-email-signUp-fill) / <alpha-value>)',
          main: 'hsl(var(--main-fill) / <alpha-value>)',
          footer: 'hsl(var(--footer-fill) / <alpha-value>)',
          testimonials: 'hsl(var(--testimonials-fill) / <alpha-value>)',
        },
        accent: {
          "cta-hover": 'hsl(var(--cta-gradient-1) / <alpha-value>)',
          "cta": 'hsl(var(--cta-gradient-2) / <alpha-value>)',
          error: 'hsl(var(--error) / <alpha-value>)',
        },
        light: {
          DEFAULT: 'hsl(var(--text-light) / <alpha-value>)',
          gray: 'hsl(var(--text-light-gray) / <alpha-value>)'
        }
      },
      fontSize: {
        200: 'clamp(0.643rem, 1vw + 0.5rem, 1rem)',
        300: 'clamp(0.929rem, 0.25vw + 1rem, 1.143rem)',
        400: 'clamp(0.857rem, 0.75vw + 1rem, 1.429rem)',
        500: 'clamp(1rem, 2vw + 0.25rem, 1.143rem)',
        600: 'clamp(1.143rem, 0.5vw + 1rem, 1.429rem)',
        700: 'clamp(1.143rem, 2vw + 1rem, 2.286rem)',
        800: 'clamp(1.571rem, 2vw + 1rem, 2.857rem)',
      },
      letterSpacing: {
        subhead: 'var(--tracking-subhead)',
        body: 'var(--tracking-body)',
        card: 'var(--tracking-card)',
      },
      lineHeight: {
        "wide-1-58": 'var(--leading-1-58)',
        "wide-1-55": 'var(--leading-1-55)',
        "wide-1-38": 'var(--leading-1-38)',
      }
    },
  },
  plugins: [plugin(function ({ addBase, theme }) {
    // addBase({
    //   'html': {
    //     '@apply text-[length:87.5%]': {}
    //   },
    //   'body': {
    //     '@apply font-body text-white leading-normal': {}
    //     /* color-scheme: dark; */
    //   },
    //   'h2, h3': {
    //     '@apply font-bold max-w-[30ch]': {}
    //   },

    //   'h2': {
    //     '@apply text-800 leading-normal': {}
    //   },

    //   'h3': {
    //     '@apply text-700 leading-wide-1-58': {}
    //   },

    //   'h4': {
    //     '@apply text-600 md:tracking-subhead max-w-[55ch] font-bold': {}
    //   },

    //   'p, li, dl': {
    //     '@apply max-w-[70ch] font-normal': {},
    //   },

    //   a: {
    //     '@apply text-white/50': {},
    //   },

    //   "a:hover": {
    //     '@apply text-white': {},
    //   },

    //   "a[data-element='nav']": {
    //     '@apply underline': {},
    //   }
    // })
  })],
}
