import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import { BeakerIcon } from '@heroicons/react/solid';
import Logo from "./Logo.svg"
import { GitHub } from '@mui/icons-material';

export default function NavButtons({handleClick}) {
  return (
    <div className='flex justify-center'>
    {/* contact me */}
    <button className='border-r px-2' type='button' value="Contact Me" onClick={handleClick}>Contact Me</button>
    {/* Algorithms */}
    <button className='border-r px-2 text-gray-500 font-extralight' type='button' value="Algorithms" onClick={handleClick}>Algorithms</button>
        {/* code wars */}
        {/* Leet Code */}
    {/* github with its icon */}
    <div className='ml-2 flex items-center space-x-2'>
    <button type='button' value="Contributions" onClick={handleClick}>Contributions</button>
    <GitHubIcon className='p-0 text-[35px]'/>
    </div>
    </div>
  )
}
