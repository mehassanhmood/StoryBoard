import React from 'react'
import placeholderImage from "/dollar1.jpg"
import { delay, motion } from "framer-motion"

const Hero = () => {

  const question = "Compelling Question or a statistics to engage the user"
  const letters = question.split(" ")
  const letterAnimation = {
    hidden: {opacity:0, y:20},
    visible: (i) => ({
      opacity: 1,
      y:0,
      transition: {
        delay: i * 0.2,
        duration: 3,
        ease:"easeInOut"
      }
    })
  }


  return (
    <div className='flex flex-col h-[100vh] w-[100vw] overflow-hidden'>

      <div className='flex flex-col leading-8 jutify-center items-center relative p-6 m-6'>
        <h1 className='text-2xl md:text-6xl text-center tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-500'>The Ripple Effect: How Economic Trends Shape Canadian Lives</h1>
        <h4 className='mt-2 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-500' >Connecting the dots between wages, prices, and investments since 1999</h4>
      </div>

      <div className='flex flex-col md:flex-row h-full m-2 p-6 justify-around items-center relative gap-6'>
        <motion.div className="w-[35%]">
          <p className="flex flex-wrap md:text-4xl text-pretty text-transparent bg-clip-text bg-gradient-to-r from-teal-100 to-cyan-300">
            {letters.map((letter, index) => (
                <motion.span
                className='mr-2'
                key={index}
                custom={index}
                initial={"hidden"}
                animate={"visible"}
                variants={letterAnimation}
                >
                  {/* {letter === " " ? "\u00A0": letter} */}
                  {letter}
                   
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
          className='object-fill md:object-fill  border justify-self-center border-teal-600 rounded-3xl opacity-80 h-[80%] w-[80%]]'
          />
        </motion.div>
      </div>
  
    </div>
  )
}

export default Hero
