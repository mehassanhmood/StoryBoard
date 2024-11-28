import React , { useRef } from 'react'
import Narrative from './Narrative';
import DynamicStory from './DynamicStory'
import { LoremIpsum } from '../assets/LoremIpsum';
import { useInView, motion } from 'framer-motion';
import "../App.css"




const YearsAnimation = ({refernece}) => {
  const housingRef = useRef(null);
  const inflationRef = useRef(null);
  const bondRef = useRef(null);

  const housingInView = useInView(housingRef, {once: false, amount:0.3})
  const InflationInView = useInView(inflationRef, {once: false, amount:0.3})
  const bondInView = useInView(bondRef, {once: false, amount:0.3})



  return (
    
    <div ref={refernece} className='flex flex-col h-screen md:h-[120vh] justify-between md:flex-row gap-2  bg-gradient-to-r from-cyan-500/50 to-purple-500/50 '>
      <motion.div 
 
      className='flex h-1/3 md:h-full w-[full] md:w-[50%] sticky top-0 md:mt-5 z-50'>
        <DynamicStory housingInView={housingInView} inflationInView={InflationInView} bondInView={bondInView}/>
      </motion.div>
      <div className='md:w-[50%]  md:h-full h-2/3 z-10 overflow-y-scroll'>
        <Narrative text={<LoremIpsum housingRef={ housingRef } inflationRef={inflationRef} bondRef={bondRef}/>} />
       </div>
    </div>
  )
}

export default YearsAnimation

