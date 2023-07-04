import React from 'react';
import { motion } from 'framer-motion';

// HOC-Template
const withHOC = (WrappedComponent,xLine=0,yLine=0,rotate=0) => {
  const HOCComponent = (props) => {
    const modifiedProps = {
      ...props,
      //hocProp: 'HOC-Wert'
    };


    const variants = {
      initial: {
        opacity: 0,
        rotate:rotate,
        y: yLine,
        x: xLine
      },
      animate: {
        opacity: 1,
        rotate:0,
        y: 0,
        x:0,
        transition: {
          type: 'spring',
          stiffness: 25,
          damping: 5
        }
      }
    };

    return (
      <motion.div initial="initial" animate="animate" variants={variants}>
        <WrappedComponent {...modifiedProps} />
      </motion.div>
    );
  };

  return HOCComponent;
};

export default withHOC;


// import React from 'react';

// // HOC-Template
// const withHOC = (WrappedComponent) => {
//   const HOCComponent = (props) => {
//     const modifiedProps = {
//       ...props,
//       hocProp: 'HOC-Wert'
//     };

//     // HOC-spezifische Logik und Funktionen hier

//     // HOC-Komponente rendern, modifizierte Props übergeben
//     return <WrappedComponent {...modifiedProps} />;
//   };

//   return HOCComponent;
// };

//  export default withHOC;


// // Komponente, die vom HOC erweitert werden soll
// const MyComponent = (props) => {
//   return (
//     <div>
//       <h1>Meine Komponente</h1>
//       <p>{props.hocProp}</p>
//       {/* Weitere Inhalte der Komponente */}
//     </div>
//   );
// };

// // HOC auf die Komponente anwenden
// const MyComponentWithHOC = withHOC(MyComponent);

// // Komponente verwenden
// const App = () => {
//   return (
//     <div>
//       <MyComponentWithHOC />
//     </div>
//   );
// };

