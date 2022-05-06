import React, { useState } from 'react'
import Logo from './Logo.svg'
import MainHeader from './MainHeader';
import { BeakerIcon } from '@heroicons/react/solid'


export default function Header() {
  return (
    <div className='border-b shadow-sd grid sm:grid-cols-2 md:grid-cols-3 pt-3 pb-4 justify-evenly'>
        {/* logo */}
        <div className='hidden md:inline-flex'>
            <Logo className="w-16 md:ml-10 "/>
        </div>
        {/* middle section */}
        <MainHeader />
        <div className='hidden sm:inline-flex m-2 md:mr-10 items-center justify-end text-red-700 cursor-pointer'>
            <p>My Methodology</p>
            <BeakerIcon  className='w-6'/>
       </div>
    </div>
  )
}
