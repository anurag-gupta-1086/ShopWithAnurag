import React from 'react'
import OtpInput from 'react-otp-input';
import { SpinnerCircular } from 'spinners-react';

export const VerifyEmailPresentational = (props) => {
  const {otp, setOtp, handleVerifyOtp, loading} = props;
  console.log("AG14 otp : ", otp)
  return (
    <div>
      {loading ? (<div className='flex justify-center items-center h-[562px]'><SpinnerCircular /></div>) :
      (<div className='flex justify-center items-center h-[562px]'>
          <div className=' w-96 h-52 border-2 border-black shadow-xl'>
              <div className=' font-bold text-2xl border-b-[1px] border-black pb-2 pt-1 pl-4'>
                  Enter OTP
              </div>
              <div className=' ml-2 pt-1 mb-2'>
                  Please enter OTP sent on your registered email Id.
              </div>
              <div className=' mb-2 mt-4 flex justify-center'>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  renderSeparator={<span className='mx-2'>-</span>}
                  renderInput={(props) => <input {...props}
                  className=' h-8 border border-gray-300 rounded-md text-center focus:outline-none focus:border-blue-500' />}
                />
              </div>
              <div className=' pt-5 flex justify-center'>
                  <button onClick={handleVerifyOtp} className='mr-4 border-2 border-black px-2 text-lg bg-blue-400 cursor-pointer rounded transition-colors duration-500 ease-in-out hover:bg-blue-500'>
                      Verify OTP
                  </button>
              </div>
          </div>
      </div>)
      }
    </div>
  )
}
