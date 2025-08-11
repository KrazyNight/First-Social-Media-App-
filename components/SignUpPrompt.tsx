import React from 'react'
import SignUpModal from './modals/SignUpModal'

export default function SignUpPrompt() {
  return (
    <>
    <div
    className='fixed w-full h-[80px] bg-[#F4AF01]
    bottom-0 flex justify-center items-center md:space-x-5
    lg:justify-between lg:px-20 xl:px-40 2xl:px-80
    '>
        <div className='hidden md:flex flex-col text-white ' >
            <span className='text-xl font-bold '>Don't miss out on the buzz</span>
            <span>People on Busy Bee are always in the know.</span>
        </div>

        <div className='flex space-x-2 w-full md:w-fit p-3'>
            <button className='
            w-full h-[48px] md:w-[88px] md:h-[40px] text-md md:text-sm border-2 border-gray-1000
            rounded-full text-white font-bold hover:bg-white hover:bg-opacity-25
            transition 
            ' >Log In</button>
            <SignUpModal />
        </div>
    </div>
    </>
  )
}
