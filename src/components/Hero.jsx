import React from 'react'
import placeholderImage from "/inflation.png"
import { motion } from "framer-motion"

const Hero = () => {

  const question = "In Canada, nearly 49% of Canadians are considered financially literate, yet only 31% have a budget to manage their expenses. Many struggle with understanding credit, debt management, and long-term savings strategies."

  return (
    <div className='flex flex-col h-[100vh] w-[100vw] overflow-hidden'>

      <div className='flex flex-col leading-8 jutify-center items-center relative p-6 m-6'>
        <h1 className='text-2xl md:text-6xl text-center tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-500'>The Ripple Effect: How Economic Trends Shape Canadian Lives</h1>
        <h4 className='mt-2 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-500' >Connecting the dots between wages, prices, and investments since 1999</h4>
      </div>

      <div className='flex flex-col md:flex-row h-full m-2 p-6 justify-around items-center relative gap-6'>
        <motion.div 
          className='w-[45%] mr-2'
          initial={{opacity:0, x:-900}}
          animate={{opacity:1, x:0}}
          transition={{duration:1}}
        >
          <p className="flex flex-wrap md:text-4xl text-pretty text-transparent bg-clip-text bg-gradient-to-r from-teal-100 to-cyan-300">
                {question}
          </p>
        </motion.div>

        <motion.div className='z-10 h-full w-[60%]'
        initial={{opacity:0}}
        animate={{opacity:0.9}}
        transition={{duration:2, ease:"easeInOut"}}
        >
          <img src={placeholderImage} alt="Hero image of inflation vs investment" 
          className='object-fill md:object-fill   justify-self-center  opacity-30 h-[80%] w-[80%]]'
          />
        </motion.div>
      </div>
  
    </div>
  )
}

export default Hero
