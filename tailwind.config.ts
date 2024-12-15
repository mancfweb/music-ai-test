import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-articulat)'],
      },
      colors: {
        msprimary: '#1040FF',
        'msprimary-dark': '#0e37da',
        msalternative: '#75A5FF',
        mswhite: {
          25: 'rgba(255, 255, 255, 0.25)',
          40: 'rgba(255, 255, 255, 0.40)',
          60: 'rgba(255, 255, 255, 0.60)',
        },
        msgray: {
          100: '#A8A8A8',
          200: '#969696',
          300: '#858585',
          400: '#737373',
          500: '#636363',
          800: '#212121',
        },
      },
    },
  },
  plugins: [],
}
export default config
