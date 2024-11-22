import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import tsx from "./tsx_data.jsx"

const LineChart = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"] // Trigger from container's start to its end
  }); // Framer Motion scroll progress
  


  const scaleY = 0.02; // Scale Y-axis values
  const scaleX = 5; // Scale X-axis values
  const [data, setData] = useState([]); // State to hold fetched data

  // Fetch data on component mount
  useEffect(() => {
    // fetch("public/tsx_data.json")
    //   .then((response) => response.json())
    //   .then((tsx) => setData(tsx))
    //   .catch((error) => console.error("Error fetching data:", error));
    setData(tsx)
  }, []);

  // Extract stockMovement values from the data
  const price = useMemo(
    () => data.map((item) => item.stockMovement || 0), // Fallback to 0 if stockMovement is missing
    [data]
  );
  

  // Generate the SVG path data
  const pathData = useMemo(() => {
    if (price.length === 0) return ""; // Prevent generating invalid path data

    const points = price.map((value, index) => {
      const x = index * scaleX;
      const y = 600 - value * scaleY; // Flip and scale Y-axis
      return `${x},${y}`;
    });

    return `M${points.join(" L")}`; // Join points into a valid SVG path
  }, [price]);

  const year_2000 = useTransform(scrollYProgress, [0.1,0.2], [0, 0.8]);
  const dot_com = useTransform(scrollYProgress, [0.15,0.2], [0, 0.8]);
  const housing_crisis = useTransform(scrollYProgress, [0.3,0.4], [0, 0.8]);
  const covid_strikes = useTransform(scrollYProgress, [0.72,0.8], [0, 0.8]);
  const inf_high = useTransform(scrollYProgress, [0.8,0.85], [0, 0.8]);

  

  return (
    <div className="relative h-[950vh] w-full bg-cyan-950/50" ref={containerRef}>

      <motion.div className="sticky top-0 h-[100vh]">
      <h1
      className="text-2xl  flex justify-center mt-6 pt-6"
      > Lets relive he ups and downs of the candian economic indicator: TSX</h1>
        <motion.svg
          initial="hidden"
          animate="visible"
          viewBox="0 250 1400 400"
          className="sticky top-0 w-full h-full"
        >
          {/* Animated Path */}
          <motion.path
            d={pathData}
            fill="none"
            stroke="yellow"
            strokeWidth={2}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            style={{ pathLength: useTransform(scrollYProgress, [0, 1], [0, 1]) }}
          />
        </motion.svg>

        <motion.div
          style={{ opacity: year_2000 }} // Opacity controlled by scroll progress
          className="absolute top-[55%] md:top-[45%] ml-10 md:left[4%] translate-x-[-50%] translate-y-[-50%] text-white text-sm md:text-md"
        >
          Year 2000
        </motion.div>

        <motion.div
          style={{ opacity: dot_com }} // Opacity controlled by scroll progress
          className="absolute top-[62%] left-[15%]  md:left-[12%] translate-x-[-50%] translate-y-[-50%] text-white text-sm md:text-md"
        >
          Dot com bubble
        </motion.div>

        <motion.div
          style={{ opacity: housing_crisis }} // Opacity controlled by scroll progress
          className="absolute top-[60%] left-[40%] translate-x-[-50%] translate-y-[-50%] text-white text-sm md:text-md"
        >
          The Housing Crisis
        </motion.div>
        <motion.div
          style={{ opacity: housing_crisis }} // Opacity controlled by scroll progress
          className="absolute top-[67%] md:top-[67%] left-[40%] translate-x-[-50%] translate-y-[-50%] text-white text-xs md:text-md text-green-400 w-[20px]"
        >
          Lowest Infaltion in 24 years 0.3%
        </motion.div>

        <motion.div
          style={{ opacity: covid_strikes }} // Opacity controlled by scroll progress
          className="absolute top-[60%] md:top-[45%] left-[85%] translate-x-[-50%] translate-y-[-50%] text-white text-sm md:text-md "
        >
          Covid Strikes
        </motion.div>

        <motion.div
          style={{ opacity: inf_high }} // Opacity controlled by scroll progress
          className="absolute top-[45%] md:top-[18%] left-[95%] translate-x-[-50%] translate-y-[-50%] text-white text-sm md:text-md text-red-400"
        >
          24 Year High Infation 6.8%
        </motion.div>

     


      </motion.div>
    </div>
  );
};

export default LineChart;







