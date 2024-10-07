import React from 'react'
import { Link } from 'react-router-dom'
import { SpinnerCircular } from 'spinners-react';

export const LoginPresentational = (props) => {
  const {loginData, handleOnChange, handleOnSubmit, loading} = props;
  const {email, pass} = loginData;
  return (
    <div>
        {loading ? (<div className='flex justify-center items-center min-h-[561px]'><SpinnerCircular /></div>) :
        (<div className='flex justify-center items-center w-full min-h-[561px]'>
            <div className='flex flex-col justify-evenly items-center border-[1px] h-[450px] w-[450px] border-black shadow-lg'>
                <div className='flex justify-center items-center w-full font-bold text-2xl'>
                    Login to your account
                </div>
                <div>
                    <form onSubmit={handleOnSubmit}>

                        <div className='m-1 w-72'>
                            <input onChange={handleOnChange} value={email} className='border-black border-2 my-2 w-full overflow-hidden rounded' placeholder='Email address' type="email" id="email" name="email" required/>
                        </div>

                        <div className='m-1 w-72'>
                            <input onChange={handleOnChange} value={pass} className='border-black border-2 my-2 w-full rounded' placeholder='Password' type="password" id="pass" name="pass" required/>
                        </div>

                        <div className='mx-1 w-72 mt-4 flex flex-col justify-center items-center'>
                            <div>
                                <input className='font-semibold w-72 border-2 p-1 bg-blue-400 border-black cursor-pointer rounded transition-colors duration-500 ease-in-out hover:bg-blue-500' type='submit' value='Log In'/>
                            </div>
                        </div>
                    </form>
                        <div className='mx-1 mb-2 w-72 flex flex-col justify-center items-center'>
                            <Link className='mt-1 text-blue-500 hover:underline' to='/forgotpassword'>
                                Forgot Password?
                            </Link>
                        </div>
                        <div className='mt-8 flex justify-center items-center'>
                            <Link className=' font-semibold bg-blue-400 p-2 border-2 border-black cursor-pointer rounded transition-colors duration-500 ease-in-out hover:bg-blue-500' to='/signup'>
                                Create New Account
                            </Link>
                        </div>
                </div>
            </div>
        </div>)
        }
    </div>
  )
}
