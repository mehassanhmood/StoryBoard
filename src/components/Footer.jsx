import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center bg-gradient-to-r from-cyan-500 to-purple-500  p-4 h-[30vh]'>
      <p className='text-white '>
        <h1 className='font-bold text-2xl '>References</h1>
        <ul className='list-disc ml-4'>
          <li>Yahoo Finance</li>
          <li>Statistics Canada</li>
          <li>Statista</li>
        </ul>
      </p>
    </div>
  )
}

export default Footer


