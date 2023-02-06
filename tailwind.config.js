const { Component } = require('react')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    screens:{
            sm:'550px',
            md:'900px',
            lg:'1200px',
            xl:'1440px',
           },
    colors: {
      primary:'#292929',
      secondary:'#333333',
      white:'#fff',
      cyan:'#4693ED',
      byan:'#79C2D2',
      ayan:'#C05609',
      flair:'#E2E2E2',
    },
  },
  plugins: [],
}

