import React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Narrative from './Narrative';
import DynamicStory from './DynamicStory'
import { LoremIpsum } from './LoremIpsum';
import "../App.css"



const YearsAnimation = () => {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })



  return (
    
    <>
      <motion.div className="h-[50px] text-center sticky top-0 border rounded-3xl border-teal-600 py-3 m-4 " style={{ scaleX }} />
       <Narrative text={<LoremIpsum />} />
       <DynamicStory />
    </>
    // </div>
  )
}

export default YearsAnimation

// import React, { useState, useEffect } from "react";
// import { motion, useScroll, useSpring, useTransform } from "framer-motion";
// import Narrative from "./Narrative";
// import DynamicStory from "./DynamicStory";
// import { LoremIpsum } from "./LoremIpsum";
// import "../App.css";

// const YearsAnimation = () => {
//   const { scrollYProgress } = useScroll();

//   // Smooth scaling for the progress bar
//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 80,
//     damping: 20,
//     restDelta: 0.001,
//   });

//   // Translate effect to keep the section at the top
//   const translateY = useTransform(scrollYProgress, [0, 0.1], [0, 0]);

//   // State to track the current year
//   const [currentYear, setCurrentYear] = useState(1990);

//   // Adjust the current year as the horizontal bar fills
//   useEffect(() => {
//     const unsubscribe = scrollYProgress.onChange((progress) => {
//       const startYear = 1990;
//       const endYear = 2024;
//       const totalYears = endYear - startYear;

//       // Map progress to year
//       const year = Math.min(
//         endYear,
//         startYear + Math.floor(progress * totalYears)
//       );

//       setCurrentYear(year);
//     });

//     return () => unsubscribe();
//   }, [scrollYProgress]);

//   return (
//     <div className="relative h-[200vh]">
//       {/* Sticky progress bar */}
//       <motion.div
//         className="sticky top-0 bg-white z-50 flex flex-col items-center w-full"
//         style={{ translateY }}
//       >
//         <motion.div
//           className="h-2 w-full bg-teal-500"
//           style={{ scaleX, transformOrigin: "left" }}
//         />
//         <h1 className="text-3xl font-bold py-4">{currentYear}</h1>
//       </motion.div>

//       {/* Additional content below */}
//       <div className="mt-[200px]">
//         <Narrative text={<LoremIpsum />} />
//         <DynamicStory />
//       </div>
//     </div>
//   );
// };

// export default YearsAnimation;

