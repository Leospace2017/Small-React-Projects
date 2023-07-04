import { createContext, useContext, useState } from 'react'
const cardsImages = [
    { src: "src/component/memory/images/icons8-css3-64.png", matched: false },
    { src: "src/component/memory/images/icons8-html-5-64.png", matched: false },
    {
      src: "src/component/memory/images/icons8-javascript-64.png",
      matched: false,
    },
    { src: "src/component/memory/images/icons8-mongodb-64.png", matched: false },
    { src: "src/component/memory/images/icons8-nodejs-64.png", matched: false },
    {
      src: "src/component/memory/images/icons8-react-native-64.png",
      matched: false,
    },
    { src: "src/component/memory/images/icons8-sass-64.png", matched: false },
    {
      src: "src/component/memory/images/icons8-tailwind-css-64.png",
      matched: false,
    },
  ];
  
export default function ThemeProvider() {
  return (
    <div>ThemeProvider</div>
  )
}
