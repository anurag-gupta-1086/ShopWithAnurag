import React from 'react'
import { SpinnerCircular } from 'spinners-react';

export const SignupPresentational = (props) => {
  const {formData, handleOnChange, handleOnSubmit, loading} = props;
  const {firstName, lastName, email, newPass, confirmNewPass, gender, country} = formData;
  return (
    <div>
        {loading ? (<div className='flex justify-center items-center min-h-[561px]'><SpinnerCircular /></div>) :
        (<div className='flex justify-center items-center w-full min-h-[561px]'>
            <div className='flex flex-col justify-evenly items-center border-[1px] h-[450px] w-[450px] border-black shadow-lg'>
                <div className='flex justify-center items-center w-full font-bold text-2xl'>
                    Create a new account
                </div>
                <div>
                    <form onSubmit={handleOnSubmit}>
                        <div className='m-2 w-96 flex justify-between'>
                            <div>
                                <input className='border-black border-2 my-2 rounded' placeholder='First Name' type="text" name="firstName" value={firstName} onChange={handleOnChange} required/>
                            </div>
                            <div>
                                <input className='border-black border-2 my-2 rounded' placeholder='Last Name' type="text" id="lastname" name="lastName" value={lastName} onChange={handleOnChange} required/>
                            </div>
                        </div>

                        <div className='m-2 w-96'>
                            <input className='border-black border-2 my-2 w-full overflow-hidden rounded' placeholder='Email address' type="email" name="email" value={email} onChange={handleOnChange} required/>
                        </div>

                        <div className='m-2 w-96'>
                            <input className='border-black border-2 my-2 w-full rounded' placeholder='New password' type="password" name="newPass" value={newPass} onChange={handleOnChange} required/>
                        </div>

                        <div className='m-2 w-96'>
                            <input className='border-black border-2 my-2 w-full rounded' placeholder='Confirm new password' type="password" name="confirmNewPass" value={confirmNewPass} onChange={handleOnChange} required/>
                        </div>

                        <div className='m-2 w-96'>
                            <label className='font-semibold mr-2' >Gender: </label>
                            <input className='border-black border-2 mr-1' type="radio" name="gender" value="male" onChange={handleOnChange} checked={gender==='male'}/>
                            <label className='font-semibold' >Male </label>
                            <input className='border-black border-2 ml-4 mr-1' type="radio" name="gender" value="female" onChange={handleOnChange} checked={gender==='female'}/>
                            <label className='font-semibold' >Female </label>
                        </div>

                        <div className='mt-4 m-2 w-96'>
                            <label className='font-semibold mr-2' >Country: </label>
                            <select className='border-[1px] border-black rounded' name='country' value={country} onChange={handleOnChange}>
                                <option value='india'>India</option>
                                <option value='uk' >UK</option>
                                <option value='usa'>USA</option>
                                <option value='germany'>Germany</option>
                            </select>
                        </div>

                        <div className='m-2 w-96 mt-12 flex justify-center items-center'>
                            <input className='font-semibold border-2 p-1 bg-blue-400 border-black cursor-pointer rounded transition-colors duration-500 ease-in-out hover:bg-blue-500' type='submit' value='Create Account'/>
                        </div>
                    </form>
                </div>
            </div>
        </div>)
        }
    </div>
  )
}
