/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ripple: {
          blue: '#0085FF',
          cyan: '#00B7FF',
          dark: '#1e293b',
          muted: '#64748b',
        },
        xrpl: {
          green: '#32E685',
          purple: '#7919FF',
          purpleLight: '#C890FF',
          dark: '#2A2A2A',
        },
        surface: {
          DEFAULT: '#f1f5f9',
          card: '#ffffff',
          sidebar: '#f8fafc',
          sidebarHover: '#f1f5f9',
        },
        /* Match Portfolio & Redemption reference */
        alert: {
          bg: '#e0f2fe',
          border: '#bae6fd',
          icon: '#0284c7',
        },
        positive: '#16a34a',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        /* Slightly raised cards to match reference */
        'card': '0 2px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 3px -1px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 4px 14px -2px rgba(0, 0, 0, 0.08), 0 2px 6px -2px rgba(0, 0, 0, 0.04)',
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 10px 40px -10px rgba(0, 0, 0, 0.1)',
        'sidebar': '4px 0 24px -4px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        'card': '1rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
