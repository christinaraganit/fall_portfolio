import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/case-studies/components/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      outlineWidth: {
        20: '20px',
        24: '24px',
        40: '40px',
      },
      outlineOffset: {
        20: '20px',
        24: '24px',
        40: '40px',
      },
      typography: {
        base: {
          css: {
            h1: {
              marginBottom: '1rem',
            },
            h2: {
              marginTop: '0.5rem',
              marginBottom: '1rem',
            },
            h3: {
              marginTop: '0.5rem',
            },
            p: {
              marginTop: '0rem',
            },
            img: {
              marginBottom: '0rem',
            },
            video: {
              marginTop: '0rem',
              marginBottom: '0rem',
            }
          }
        },
        xl: {
          css: {
            h1: {
              marginBottom: '1.5rem',
            },
            h2: {
              marginTop: '0.5rem',
              marginBottom: '1.5rem',
            },
            h3: {
              marginTop: '0.5rem',
            },
            img: {
              marginBottom: '0rem',
            },
            video: {
              marginTop: '0rem',
              marginBottom: '0rem',
            }
          }
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config
