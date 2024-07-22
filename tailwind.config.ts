import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        greenGradient: '#1EA483',
        purpleGradient: '#7465D4',
      },
      fontSize: {
        'md': '1.125rem',
        'lg': '1.25rem',
        'xl': '1.5rem',
        '2xl': '2rem',
      },
    },
  },
  plugins: [],
};
export default config;
