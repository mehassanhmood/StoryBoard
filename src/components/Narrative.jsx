import React from 'react'

const Narrative = ({text}) => {
  
  return (
    <div className='flex flex-col  overflow-y-scroll border rounded-3xl border-teal-600 w-[96] h-80 m-4 p-2 scroll-y'>
      {text}
    </div>
  )
}

export default Narrative
