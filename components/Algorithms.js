import React from 'react'
import Image from 'next/image'
import CodeWars from '../public/CodeWars.png'

export default function Algorithms() {
  return (
    <div className="relative rounded-2xl w-[680px] h-[850px] mb-4 shadow-md m-auto">
      <Image 
      className='rounded-2xl '
      layout='fill'
      src={CodeWars} alt=''/>
    </div>
  )
}
