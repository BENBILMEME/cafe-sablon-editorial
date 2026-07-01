export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#0A0A0A', 80: '#2A2A2A', 50: '#6B6B6B', 20: '#D4D4D4', 10: '#F5F5F5' },
        accent: { DEFAULT: '#E0463A', light: '#FF6B5E' },
      },
      fontFamily: {
        display: ['DM Serif Display', 'Georgia', 'serif'],
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'mega': ['clamp(3.5rem, 8vw, 8rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display': ['clamp(2.5rem, 5vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.01em' }],
        'headline': ['clamp(1.5rem, 2.5vw, 2.25rem)', { lineHeight: '1.15' }],
      },
    },
  },
  plugins: [],
};
