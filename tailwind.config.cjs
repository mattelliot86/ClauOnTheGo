module.exports = {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        bg: 'var(--bg)',
        text: 'var(--text)',
        primary: 'var(--primary)',
        accent: 'var(--accent)',
        neutral: 'var(--neutral)',
      },
    },
  },
  plugins: [],
};
