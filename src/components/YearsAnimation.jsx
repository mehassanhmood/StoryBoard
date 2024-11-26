import React , { useRef } from 'react'
import Narrative from './Narrative';
import DynamicStory from './DynamicStory'
import { LoremIpsum } from '../assets/LoremIpsum';
import { useInView } from 'framer-motion';
import "../App.css"




const YearsAnimation = ({refernece}) => {
  const housingRef = useRef(null);
  const inflationRef = useRef(null);
  const bondRef = useRef(null);

  const housingInView = useInView(housingRef, {once: false, amount:0.7})
  const InflationInView = useInView(inflationRef, {once: false})
  const bondInView = useInView(bondRef, {once: false, amount:0.7})



  return (
    
    <div ref={refernece} className='flex flex-col h-[120vh] justify-between md:flex-row gap-2 h-screen bg-gradient-to-r from-cyan-500/50 to-purple-500/50 '>
      <div className='flex h-full w-[full] md:w-[50%] sticky top-0 mt-5'>
        <DynamicStory housingInView={housingInView} inflationInView={InflationInView} bondInView={bondInView}/>
      </div>
      <div className='md:w-[50%] md:h-full h-[80%]'>
        <Narrative text={<LoremIpsum housingRef={ housingRef } inflationRef={inflationRef} bondRef={bondRef}/>} />
       </div>
    </div>
  )
}

export default YearsAnimation

