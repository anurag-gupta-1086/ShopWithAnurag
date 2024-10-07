import React from 'react'

export const ModalPresentational = (props) => {
  const {isOpen, onClose, children, modalRef} = props;
  if (!isOpen) return null;
  return (
    <div className= 'fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center'>
        <div ref={modalRef} className=' bg-white rounded'>
            <div className='flex justify-end'>
              <button className=' text-gray-500 mr-2' onClick={onClose}>
                  &times;
              </button>
            </div>
            <div className='flex justify-center items-center w-[100%] h-[100%]'>
              {children}  
            </div>
        </div>
    </div>
  )
}
