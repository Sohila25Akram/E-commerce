/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hoverYellow: 'rgba(217, 192, 156, 1)',
        greenNotify: '#8fae1b',
        textPlaceholder: '#aaaaaa',
        textDark: '#303030',
        textMidDark: '#686868',
        borderColor: '#e6e6e6',
        tableTextColor: '#373a3c',
        required: 'red',
        blurColor: 'rgba(0, 0, 0, .8)',
        backgroundGray: '#f8f8f8',
        footTextColor: '#797979'
      },
      boxShadow: {
        'navShadow': '0 0px 7px rgba(0, 0, 0, 0.09)',
      }
    },
  },
  plugins: [],
}

