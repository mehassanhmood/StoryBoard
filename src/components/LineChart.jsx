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
      const y = 560 - value * scaleY; // Flip and scale Y-axis
      return `${x},${y}`;
    });

    return `M${points.join(" L")}`; // Join points into a valid SVG path
  }, [price]);

  
  

  return (
    <div className="relative h-[900vh] w-full bg-cyan-950/50" ref={containerRef}>
      <motion.div className="sticky top-0 h-[100vh]">
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
      </motion.div>
    </div>
  );
};

export default LineChart;







