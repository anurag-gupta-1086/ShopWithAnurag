import React from 'react'
import { SpinnerCircular } from 'spinners-react';

export const ResetPasswordPresentational = (props) => {
  const {loading, newPass, setNewPass, handleResetPassword} = props;
  return (
    <div>
        {loading ? (<div className='flex justify-center items-center min-h-[561px]'><SpinnerCircular /></div>) :
        (
            <div className='flex justify-center items-center h-[562px]'>
                <div className=' w-96 h-56 border-2 border-black shadow-xl'>
                    <div className=' font-bold text-2xl border-b-[1px] border-black pb-2 pt-1 pl-4'>
                        Update new password
                    </div>
                    <div className=' pl-4 pt-1 mb-2'>
                        Please enter your new password
                    </div>
                    <div className='pl-4 w-[365px] mb-2'>
                        <label className=' font-bold'>New Password : </label>
                        <input className ='w-full h-10 rounded border-2 border-black' type='text' placeholder='Enter your new password' id='newPass' name='newPass' value={newPass} onChange={(e) => {setNewPass(e.target.value)}} />
                    </div>
                    <div className=' pt-5 flex justify-end'>
                        <button className='mr-4 border-2 border-black px-2 text-lg bg-blue-400 cursor-pointer rounded transition-colors duration-500 ease-in-out hover:bg-blue-500' onClick={handleResetPassword}>
                            Reset Password
                        </button>
                    </div>
                </div>
            </div>
        )}
    </div> 
  )
}
