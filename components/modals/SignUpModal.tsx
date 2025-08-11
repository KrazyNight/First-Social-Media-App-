'use client'
import React from 'react';
import { Modal } from '@mui/material';
import { AppDispatch, RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { closeSignUpModal, openSignUpModal } from '@/redux/slices/modalSlice';


export default function SignUpModal() {



const isOpen = useSelector(
  (state: RootState ) => state.modals.signUpModalOpen
);
const dispatch: AppDispatch = useDispatch()

// console.log(isOpen)

  return (
    <>
                <button
            className='w-full h-[48px] md:w-[88px] md:h-[40px] text-sm font-bold bg-white
            rounded-full
            '
            onClick={
              () => dispatch(openSignUpModal())
            }
            >Sign Up</button>

            <Modal
              open={isOpen}
              onClose={() => dispatch(closeSignUpModal())}
              className="flex justify- items-center"
              >
                <div className='w-[200px] h-[400px] bg-white ' ></div>
            </Modal>


    </>
  )
}
