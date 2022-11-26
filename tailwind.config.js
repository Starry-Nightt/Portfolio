/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.html'],
  theme: {
    screens: {
      sm:'480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '100%': '100%',
    },
    fontFamily: {
      'body': "'Montserrat', sans-serif"
    },
    extend: {
      colors: {
        darkGray: 'rgb(41, 50, 60)',
        brightGray: 'rgb(72, 85, 99)',
        crimson: 'rgb(220,20,60)',
        darkGray: 'rgb(31, 30,30)'
      },
      backgroundImage: {
        'hero': "url('../img/hero-bg.png')",
        'project': "url('../img/project-bg.png')",
        'avatar': "url('../img/avatar.png)",
        'grayItem': 'linear-gradient(60deg, rgb(41, 50, 60) 0%, rgb(72, 85, 99) 100%)'
      },
      boxShadow: {
        'normal': '0px 0px 18px 0 #0000002c',
        'standout': '0px 0px 5px #0000002c'
      }
    },
  },
  plugins: [],
}
