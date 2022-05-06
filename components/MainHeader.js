import React, {useState} from 'react'
import { BeakerIcon } from '@heroicons/react/solid'
import { Close } from '@mui/icons-material'
import Contact from './Contact';
import Contributions from './Contributions';
import Algorithms from "./Algorithms"
import NavButtons from './NavButtons';
import ModalMenu from './ModalMenu';
import Resume from "./Resume"

export default function MainHeader() {
    const [showModal, setShowModal] = useState(false);
    const [clickedText, setClickedText] = useState('');
    const [modalFocus, setModalFocus] = useState("")

    const focus = () => {
        clickedText ? (
            setModalFocus( "focus:bg-white focus:drop-shadow-md focus:border-md focus:scale-[102%]")
        ): setModalFocus('')}
    const handleClick = e => {
            setShowModal(true)
            e.target.value || e.target.ariaLabel ? (
            setClickedText(e.target.value)
            ): setClickedText('')
    }
  return (
    <div className='p-1 border flex rounded-full items-center h-12 text-sm max-w-[320px] min-w-max shadow-sm hover:shadow-md transition duration-105 m-auto'>
        <NavButtons 
        handleClick={handleClick}
        showModal={showModal}
        title={clickedText}
        />
        {/* repos made */}
        {/* gitHub icon and link */}
        {showModal &&(
            <div className=" flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className='w-full h-fit bg-white z-50'>
                    <ModalMenu 
                    title={clickedText}
                    handleClick={handleClick}
                    showModal={showModal}
                    focus={focus}
                    />
                    
                    <div className='grid grid-cols-3 items-center md:hidden pt-4 justify-items-center'>
                        <Close className='text-red-700 ' type="button" onClick={() => setShowModal(false)}/>
                        <h2 className='text-base '>{clickedText}</h2>
                        <BeakerIcon className=' w-8 text-red-700'/>
                    </div>
                    <div className="md:hidden border max-w-fit p-2 m-auto rounded-full mt-4">
                    <NavButtons 
                    handleClick={handleClick}
                    showModal={showModal}
                    title={clickedText}
                    />
                    </div>
                {clickedText === "Contact Me" ? (
                    <Contact/>
                ): false}
                {clickedText === "Contributions" ? (
                    <Contributions />
                ): false}
                {clickedText === "Algorithms" ? (
                    <Algorithms />
                ): false}
                {clickedText === "Resume" ? (
                    <Resume />
                ): false}
            </div>
                 <button className='z-40' onClick={() => setShowModal(false)}>
                 <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                 </button>
             </div>
        )}
    </div>
  )
}
