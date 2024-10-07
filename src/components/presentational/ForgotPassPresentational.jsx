import React from 'react'
import { SpinnerCircular } from 'spinners-react';

export const ForgotPassPresentational = (props) => {
  const {email, setEmail, handleSetPassword, loading} = props;
  return (
    <div>
        {loading ? (<div className='flex justify-center items-center min-h-[561px]'><SpinnerCircular /></div>) :
        (
            <div className='flex justify-center items-center h-[562px]'>
                <div className=' w-96 h-52 border-2 border-black shadow-xl'>
                    <div className=' font-bold text-2xl border-b-[1px] border-black pb-2 pt-1 pl-4'>
                        Find Your Account
                    </div>
                    <div className=' pl-4 pt-1 mb-2'>
                        Please enter your registered email Id.
                    </div>
                    <div className='pl-4 w-[365px] mb-2'>
                        <label htmlFor='emailId'></label>
                        <input className ='w-full h-10 rounded border-2 border-black' type='text' placeholder='Enter your email address' id='emailId' name='emailId' value={email} onChange={(e) => {setEmail(e.target.value)}} />
                    </div>
                    <div className=' pt-5 flex justify-end'>
                        <button className='mr-4 border-2 border-black px-2 text-lg bg-blue-400 cursor-pointer rounded transition-colors duration-500 ease-in-out hover:bg-blue-500' onClick={handleSetPassword}>
                            Forgot Password
                        </button>
                    </div>
                </div>
            </div>
        )}
    </div>  
  )
}
