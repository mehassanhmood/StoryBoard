import React from 'react'
import Narrative from './Narrative';
import DynamicStory from './DynamicStory'
import { LoremIpsum } from './LoremIpsum';
import "../App.css"



const YearsAnimation = ({refernece}) => {




  return (
    
    <div ref={refernece} className='flex flex-col justify-between md:flex-row gap-6 h-screen bg-gradient-to-r from-cyan-500/50 to-purple-500/50 '>
      <div>
        <DynamicStory />
      </div>
      <div className='w-[50%]'>
        <Narrative text={<LoremIpsum />} />
       </div>
    </div>
  )
}

export default YearsAnimation

