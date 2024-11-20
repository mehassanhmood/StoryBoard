import React, {useRef} from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

const Narrative = ({text}) => {

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: containerRef
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
  
    <div 
    // ref={containerRef}
    className='flex flex-col  w-[96] h-[39%] m-4 p-2'>
      <motion.div className="h-[40px] absolute text-center bg-cyan-500 sticky top-1 border rounded-lg border-teal-600 z-20" style={{ scaleX }} />
      <p 
      ref={containerRef}
      className='z-10 p-6 m-6 overflow-y-scroll'>
        {text}
      </p>
    </div>
  
  )
}

export default Narrative
