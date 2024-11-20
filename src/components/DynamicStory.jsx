import React from 'react'

const DynamicStory = () => {
  return (
   
      <div className="relative flex flex-col justify-between items-center w-[96] h-[50%] p-4 m-4 mb- gap-4">
            <div className='flex flex-row justify-between items-center h-1/2 w-full'>
                <div className="sub-boxes justify-center items-center m-2 bg-teal-700 h-full w-1/2">
                    Line Chart
                </div>
                <div className="sub-boxes justify-center items-center m-2 bg-teal-700 h-full w-1/2">
                    Bar Chart
                </div>
            </div>
            <div className='flex flex-row justify-center items-center h-1/2 w-full'>
                <div className="sub-boxes justify-center items-center m-2 bg-teal-700 h-full w-1/2">
                    Donut Chart
                </div>
                <div className="sub-boxes justify-center items-center m-2 bg-teal-700 h-full w-1/2">
                    Some other Chart
                </div>
            </div>
        </div>
  )
}

export default DynamicStory
