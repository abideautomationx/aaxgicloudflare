/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
    'index.js',
    'main.js',
    'nav.js',


  ],
  // darkMode: false, // or 'media' or 'class'
  theme: {

    fontSize: {
      sm: '0.3rem',
      base: '0.5rem',
      xl: '1rem',
      '1xl': '1.3rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '35xl': '2.5rem',
      '4xl': '4rem',
      '5xl': '5rem',
      '6xl': '5.5rem',
      '7xl': '6rem',
      '8xl': '6.5rem',
      '9xl': '7rem',
      '10xl': '7.5rem',
    },
  
    screens: {

      'xxsm': '280px',


      'xsm': '380px',


      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        // 'body': '#861f3e',//#861f3e
        // 'body2': '#17171F',//#17171F
        // 'selected-text': '#f8acbe',// f890a8  //  #f8acbe                           //defaut - #A3A3FF
        // 'theme': '#430f1f',//4F224A  430f1f
        // 'theme2': '#AB1B39',//4F224A  430f1f        
        // 'nav': '#AB1B39',
        // 'secondary': '#e5e5e5',//darker #501225 // default #9191A4
        // 'badge': '#3F3F51',
        // 'input-border': '#565666',
        // 'input': '#2A2A35',
        // 'arduino': '#008085',
        // 'python': '#1F405E',
        // 'lightRed': '#AB1C37',
        // 'darkRed': '#4E224A',
        
        
      },
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif'],
        'Darker_Grotesque': ["'Darker Grotesque'", 'sans-serif'],
        'Lobster': ["'Lobster'", 'cursive'],
        'Alkatra': ["'Alkatra'", 'cursive'],
        'Montserrat': ["'Montserrat'", 'sans-serif'],
        'Nova_Square': ["'Nova Square'", 'cursive'],
       
        
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '5rem',
      }
    },
  },
  // variants: {
  //   fontSmoothing: ['responsive', 'hover', 'focus'],
    
  // },
  plugins: [],
}

