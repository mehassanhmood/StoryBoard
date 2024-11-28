import React, {useRef} from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

const Narrative = ({text}) => {

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
  
    <div 
    // ref={containerRef}
    className='flex  w-full h-full m-4 my-12 py-12  mt-[10px] md:mt-[100px]'>
      <motion.div className="w-[25px] h-full absolute bg-cyan-500 sticky left-0 mt-10  border rounded-lg border-teal-600 z-20" style={{ scaleY, transformOrigin:"top" }} />
      <p 
      ref={containerRef}
      className='z-10 p-6 m-6 overflow-y-scroll text-xl'>
        {text}
      </p>
    </div>
  
  )
}

export default Narrative
