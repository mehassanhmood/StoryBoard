import React from 'react'

const DynamicStory = () => {
  return (
   
      <div className="flex flex-col border rounded-3xl border-teal-600 justify-between items-center w-[96] h-[600px] p-4 m-4 gap-4">
            <div className='flex flex-row justify-between items-center h-1/2 w-full'>
                <div className="sub-boxes justify-center items-center text-center m-2 bg-teal-700 h-full w-1/2">
                    Box 1
                </div>
                <div className="sub-boxes justify-center items-center text-center  m-2 bg-teal-700 h-full w-1/2">
                    Box 2
                </div>
            </div>
            <div className='flex flex-row justify-center items-center h-1/2 w-full'>
                <div className="sub-boxes justify-center items-center text-center  m-2 bg-teal-700 h-full w-1/2">
                    Box 3
                </div>
                <div className="sub-boxes justify-center items-center text-center  m-2 bg-teal-700 h-full w-1/2">
                    Box 4
                </div>
            </div>
        </div>
  )
}

export default DynamicStory
