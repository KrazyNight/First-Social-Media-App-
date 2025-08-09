import React from 'react'

export default function SignUpPrompt() {
  return (
    <>
    <div
    className='fixed w-full h-[80px] bg-[#F4AF01]
    bottom-0 flex justify-center items-center space-x-5
    '>
        <div className='hidden md:flex flex-col text-white ' >
            <span className='text-xl font-bold '>Don't miss out on the buzz</span>
            <span>People on Busy Bee are always in the know.</span>
        </div>

        <div className='flex space-x-2' >
            <button className='
            w-[88px] h-[40px] text-sm border border-2 border-gray-1000
            rounded-full text-white font-bold 
            ' >Log In</button>
            <button
            className='w-[88px] h-[40px] text-sm font-bold bg-white
            rounded-full
            '>Sign Up</button>
        </div>
    </div>
    </>
  )
}
