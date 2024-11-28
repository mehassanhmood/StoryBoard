import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Cumulative_tsx from "../assets/Cumulative_tsx.jsx";

const LineChart = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"] 
  }); 


  const scaleY = 250; 
  const scaleX = 5; 

  const [data, setData] = useState([]); 

  // Fetch data on component mount
  useEffect(() => {
    setData(Cumulative_tsx)
  }, []);


   const price = data

  

  // Generate the SVG path data
  const pathData = useMemo(() => {
    if (price.length === 0) return ""; // Prevent generating invalid path data

    const points = price.map((value, index) => {
      const x = index * scaleX;
      const y = 850 - value * scaleY; // Flip and scale Y-axis
      return `${x},${y}`;
    });

    return `M${points.join(" L")}`; // Join points into a valid SVG path
  }, [price]);
  console.log(pathData)

  const year_2000 = useTransform(scrollYProgress, [0.05,0.06], [0, 0.8]);
  const dot_com = useTransform(scrollYProgress, [0.10,0.12], [0, 0.8]);
  const dot_com_crisis = useTransform(scrollYProgress, [0.08,0.12, 0.18], [0, 1, 0]);
  const housing_crisis = useTransform(scrollYProgress, [0.3,0.4], [0, 0.8]);
  const housing_crisis_story = useTransform(scrollYProgress, [0.28,0.4, 0.5], [0, 1, 0]);
  const covid_strikes = useTransform(scrollYProgress, [0.72,0.8], [0, 0.8]);
  const covid_strikes_story = useTransform(scrollYProgress, [0.7, 0.8, 0.9], [0, 1, 0]);
  const inf_high = useTransform(scrollYProgress, [0.8,0.85], [0, 0.8]);
  const pre_housing = useTransform(scrollYProgress, [0.25,0.3], [0, 0.8]);
  const interval = useTransform(scrollYProgress, [0.5,0.55], [0, 0.8]);



  return (
    <div className="relative h-[950vh] w-full bg-cyan-950/50" ref={containerRef}>

      <motion.div className="sticky top-0 h-[100vh]">
      <h1
      className="text-3xl flex justify-center mt-6 pt-8 ml-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-300"
      > Lets relive as an investor through the economic and global events impacting economy: TSX</h1>
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
          className="absolute top-[69%] md:top-[65%] ml-10 md:left[4%] translate-x-[-50%] translate-y-[-50%] text-white text-sm md:text-md"
        >
          Year 2000
        </motion.div>

        <motion.div
          style={{ opacity: dot_com }} // Opacity controlled by scroll progress
          className="absolute top-[83%] left-[15%] md:top-[95%] md:left-[12%] translate-x-[-50%] translate-y-[-50%] text-center text-red-400 text-sm md:text-md w-[90px]"
        >
          Portfolio Value 720$
        </motion.div>
        <motion.div
          style={{ opacity: dot_com }} // Opacity controlled by scroll progress
          className="absolute top-[79%] left-[15%] md:top-[83%] md:left-[13%] translate-x-[-50%] translate-y-[-50%] text-white text-sm md:text-md"
        >
          Dot com bubble
        </motion.div>
        <motion.div
          style={{ opacity: dot_com_crisis }} // Opacity controlled by scroll progress
          className="absolute top-[30%] left-[10%]  md:left-[2%]  text-white text-sm md:text-md  md:w-[600px] p-2"
        >
          <p>
           <b>The Dot-Com Bubble (1995–2001)</b>  was a period of excessive speculation in internet-based companies. Investors poured money into startups with little or no profitability, driven by the promise of a booming tech-driven future. When many of these companies failed to deliver results, the bubble burst in 2000, wiping out trillions of dollars in market value and leading to a widespread market crash.
          </p>
        </motion.div>

        <motion.div
          style={{ opacity: housing_crisis }} // Opacity controlled by scroll progress
          className="absolute top-[77%] left-[50%]  md:top-[87%] md:left-[40%] translate-x-[-50%] translate-y-[-50%] text-white text-sm md:text-md "
        >
          The Housing Crisis
        </motion.div>
        <motion.div
          style={{ opacity: housing_crisis }} // Opacity controlled by scroll progress
          className="absolute top-[80%] left-[53%] md:top-[90%] md:left-[40%] translate-x-[-50%] translate-y-[-50%] text-green-400 text-white text-xs md:text-md text-center"
        >
          Lowest Infaltion in 24 years 0.3%
        </motion.div>
        <motion.div
          style={{ opacity: pre_housing }} // Opacity controlled by scroll progress
          className="absolute top-[65%] left-[35%] md:top-[50%] md:left-[35%] translate-x-[-50%] translate-y-[-50%] text-green-400 text-sm md:text-md"
        >
          Portfolio Value <br /> $1730
        </motion.div>
        <motion.div
          style={{ opacity: housing_crisis }} // Opacity controlled by scroll progress
          className="absolute top-[82%] md:top-[92%] left-[48%] md:left-[40%] translate-x-[-50%] translate-y-[-50%] text-red-400 text-sm md:text-md"
        >
          Portfolio Value $1025
        </motion.div>
        <motion.div
          style={{ opacity: housing_crisis_story }} // Opacity controlled by scroll progress
          className="absolute top-[30%] left-[10%]  md:left-[2%]  text-white text-sm md:text-md m md:w-[600px]"
        >
          <p>
          <b>The 2008 Housing Crisis</b>  was triggered by excessive lending to unqualified buyers and the proliferation of subprime mortgages. When homeowners defaulted en masse, the housing market collapsed, leading to a financial meltdown as mortgage-backed securities lost value. This caused a global recession, massive bank failures, and widespread economic hardship.
          </p>
        </motion.div>

        <motion.div
          style={{ opacity: interval }} // Opacity controlled by scroll progress
          className="absolute top-[65%] left-[65%] md:top-[45%] md:left-[63%] translate-x-[-50%] translate-y-[-50%] text-green-400 text-sm md:text-md"
        >
          Portfolio Value <br /> $1842
        </motion.div>

        <motion.div
          style={{ opacity: covid_strikes }} // Opacity controlled by scroll progress
          className="absolute top-[72%] md:top-[60%] left-[87%] translate-x-[-50%] translate-y-[-50%] text-white text-sm md:text-md "
        >
          Covid Strikes
        </motion.div>
        <motion.div
          style={{ opacity: covid_strikes }} // Opacity controlled by scroll progress
          className="absolute top-[79%] md:top-[63%] left-[87%] translate-x-[-50%] translate-y-[-50%] text-red-400 text-sm md:text-md "
        >
          Portfolio Value $1577
        </motion.div>
        <motion.div
          style={{ opacity: covid_strikes_story }} // Opacity controlled by scroll progress
          className="absolute top-[30%] left-[10%]  md:left-[2%]  text-white text-sm md:text-md m md:w-[600px]"
        >
          <p>
         <b>The COVID-19 pandemic</b> severely disrupted the global economy, causing widespread job losses, supply chain disruptions, and unprecedented declines in GDP. Governments implemented massive stimulus packages and central banks lowered interest rates to stabilize markets. While some sectors (like tech) thrived, others (like travel and hospitality) faced prolonged downturns, leading to a sharp economic divide and long-term inflationary pressures.
          </p>
        </motion.div>

        <motion.div
          style={{ opacity: inf_high }} // Opacity controlled by scroll progress
          className="absolute top-[55%] left-[89%] md:top-[15%] md:left-[95%] translate-x-[-50%] translate-y-[-50%] text-center text-white text-sm md:text-md text-red-400 w-[90px]"
        >
          24 Year High Infation 6.8%
        </motion.div>
        <motion.div
          style={{ opacity: inf_high }} // Opacity controlled by scroll progress
          className="absolute top-[50%] left-[88%] md:top-[21%] md:left-[92%] translate-x-[-50%] translate-y-[-50%] text-center text-green-400 text-sm md:text-md w-[90px]"
        >
          Portfolio Value $2581
        </motion.div>

      </motion.div>
    </div>
  );
};

export default LineChart;







