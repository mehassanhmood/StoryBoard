import React from 'react'
import Narrative from './Narrative';
import DynamicStory from './DynamicStory'
import { LoremIpsum } from '../assets/LoremIpsum';
import "../App.css"



const YearsAnimation = ({refernece}) => {




  return (
    
    <div ref={refernece} className='flex flex-col justify-between md:flex-row gap-6 h-screen bg-gradient-to-r from-cyan-500/50 to-purple-500/50 '>
      <div className='flex h-full w-[50%]'>
        <DynamicStory />
      </div>
      <div className='w-[50%] h-full h-[70%]'>
        <Narrative text={<LoremIpsum />} />
       </div>
    </div>
  )
}

export default YearsAnimation

