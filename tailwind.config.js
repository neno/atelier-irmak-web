module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      aspectRatio: {
        '2/1': '2 / 1',
        '4/3': '4 / 3',
        '3/4': '3 / 4',
      },
      fontFamily: {
        title: ['ivymode', 'sans-serif'],
      },
    },
    colors: {
      primary: '#333D98',
      'primary-dark': '#12184D',
      'primary-light': '#4E5DE6',
      light: '#939BE5',
      // gray: '#f9f7f7',
      gray: '#f1f5f9',
      black: '#2d2d2d',
      white: '#ffffff',
      'slate-100': '#f1f5f9',
      'slate-200': '#e2e8f0',
      'slate-300': '#cbd5e1',
      'slate-400': '#9ca3af',
      'slate-500': '#64748b',
    },
  },
  plugins: [],
};
