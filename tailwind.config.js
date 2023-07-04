/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode:"jit",
  // theme: {
  //   extend: {
  //     backgroundImage :{
  //       'crash' : "url(./component/drumkit/images/crash.png)",
  //       'kick' : "url(./component/drumkit/images/kick.png)",
  //       'snare' : "url(./component/drumkit/images/snare.png)",
  //       'tom1' : "url(./component/drumkit/images/tom1.png)",
  //       'tom2' : "url(./component/drumkit/images/tom2.png)",
  //       'tom3' : "url(./component/drumkit/images/tom3.png)",
  //       'tom4' : "url(./component/drumkit/images/tom4.png)",
  //     }
  //   },
  // },
  plugins: [
    {
      'tailwindcss/nesting': {},
        tailwindcss: {},
        autoprefixer: {},
    }
  ],
}

