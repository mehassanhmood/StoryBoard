import React from 'react'
import placeholderImage from "/Hero-placeHolder.jpg"
import { delay, motion } from "framer-motion"

const Hero = () => {

  const question = "Compelling Question or a stat to engage the user"
  const letterAnimation = {
    hidden: {opacity:0},
    visible: (i) => ({
      opacity: 1,
      y:0,
      transition: {
        delay: i * 0.05,
        duration: 2,
        ease:"easeIn"
      }
    })
  }


  return (
    <div className='flex flex-col h-[100vh] w-[100vw]'>

      <div className='flex flex-col leading-8 jutify-center items-center relative p-6 m-6'>
        <h1 className='text-6xl text-center tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-500'>The Ripple Effect: How Economic Trends Shape Canadian Lives</h1>
        <h4 className='mt-2 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-500' >Connecting the dots between wages, prices, and investments since 1999</h4>
      </div>

      <div className='flex h-full m-2 p-6 justify-center items-center relative gap-6'>
        <motion.div className="w-[35%]">
          <p className="flex flex-wrap text-4xl text-pretty text-transparent bg-clip-text bg-gradient-to-r from-teal-100 to-cyan-300">
            {question.split("").map((letter, index) => (
                <motion.span
                key={index}
                custom={index}
                initial={"hidden"}
                animate={"visible"}
                variants={letterAnimation}
                >
                  {letter === " " ? "\u00A0": letter}
                  
                   
                </motion.span>
            ))
            }
          </p>
        </motion.div>

        <motion.div className='z-10 h-full w-[60%]'
        initial={{opacity:0}}
        animate={{opacity:0.9}}
        transition={{duration:2, ease:"easeInOut"}}
        >
          <img src={placeholderImage} alt="Hero image of inflation vs investment" 
          className='h-full object-cover border border-teal-600 rounded-3xl opacity-80'
          />
        </motion.div>
      </div>
  
    </div>
  )
}

export default Hero
