import React from 'react'
import placeholderImage from "/Hero-placeHolder.jpg"

const Hero = () => {
  return (
    <div className='flex flex-row gap-2 m-4 p-6 border rounded-3xl border-teal-600'>
      <div className='flex w-[40%] relative justify-center items-center text-justify p-6'>
        Compelling Question or a stat to engage the user
      </div>
      <div className='flex w-[60%] relative'>
        <img src={placeholderImage} alt="Hero image of inflation vs investment" />
      </div>
    </div>
  )
}

export default Hero
