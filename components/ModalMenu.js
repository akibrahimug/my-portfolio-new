import React from 'react'
import Logo from "./Logo.svg"
import { BeakerIcon} from '@heroicons/react/solid'
import { GitHub } from '@mui/icons-material'

export default function ModalMenu({title, handleClick}) {
  return (
    <div className='hidden md:block items-center'>
    <div className='grid grid-cols-3 items-center mt-4'>
        <Logo className="w-16 md:ml-10 "/>
        <h3 className=' text-lg border-b border-black w-fit m-auto'>{title}</h3>
        <div className='flex items-center justify-end mr-10'>
            <h3 className='text-red-700'>My Methodology</h3>
            <BeakerIcon className='hidden md:inline-flex w-6 text-red-700'/>
        </div>
    </div>
    <div className='relative flex border rounded-full mt-6 items-center justify-between bg-gray-100 max-w-[800px] m-auto'>
        <div className='border-r'>
            <button onClick={handleClick} value="Contact Me" className='hover:bg-gray-200 p-6 m-0 rounded-full w-[200px]'>Contact Me</button>
        </div>
        <div className='border-r'>
            <button onClick={handleClick} value="Algorithms" className=' hover:bg-gray-200 p-6 m-0 rounded-full  w-[200px]'>Algorithms</button>
        </div>
        <div className='border-r'>
            <button onClick={handleClick} value="Resume" className=' hover:bg-gray-200 p-6 m-0 rounded-full  w-[200px]'>Resume</button>
        </div>
        <button onClick={handleClick} value="Contributions" className=' hover:bg-gray-200 p-6 text-left rounded-full w-[200px]'>Contributions <a href='https://github.com/akibrahimug' className='bg-white p-[22px] top-0 right-0 m-0 hover:scale-105 hover:border hover:bg-red-700 transition transform ease-out duration-105  hover:text-white shadow-md rounded-full absolute'><GitHub aria-label="GitHub"/></a></button>
    </div>
</div>
  )
}
