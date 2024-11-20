import React from 'react'
import Narrative from './Narrative';
import DynamicStory from './DynamicStory'
import { LoremIpsum } from './LoremIpsum';
import "../App.css"



const YearsAnimation = ({refernece}) => {




  return (
    
    <div ref={refernece} className='h-screen bg-gradient-to-r from-cyan-500/50 to-purple-500/50'>
       <Narrative text={<LoremIpsum />} />
       <DynamicStory />
    </div>
  )
}

export default YearsAnimation

