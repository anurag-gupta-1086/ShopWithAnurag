import React from 'react'
import { Modal } from '../container/Modal';
import { SpinnerCircular } from 'spinners-react';

export const MyProfilePresentational = (props) => {
  const {forgotPasswordModalState, closeForgotPasswordModal, openForgotPasswordModal, deleteAccountModalState, closeDeleteAccountModal, openDeleteAccountModal, formData, handleOnChange, handleOnSubmit, loading, setImageFile, handleForgotPassChange, forgotPassData, handleForgotPassSubmit, handleDeleteAccount } = props;
  console.log("AG15 : presentational formdata : ", formData)
  const {firstName, lastName, image, email, gender, country, dateOfBirth} = formData
  const {currPass, newPass, confirmNewPass} = forgotPassData;
  return (
    <div>
      {loading ? (<div className='flex justify-center items-center min-h-[561px]'><SpinnerCircular /></div>) :
      (<div className='flex justify-center items-center h-[562px]'>
        <div className='h-[500px] w-[650px] border-2 border-black shadow-lg'>
          <div className='flex justify-start border-b-[1px] border-black'>
            <div className=' m-8 relative'>
              <img className='w-20 h-20 rounded-full' src={image}/>
            </div>
            <div className='my-8 mr-8 flex justify-center items-center font-extrabold text-3xl'>
              {`${firstName} ${lastName}`}
            </div>
          </div>
          <div className='flex'>
            <div className='w-full m-6 border-r-[1px] border-black'>
              <div className=' text-green-700'>
                Edit Profile
              </div>
              <button onClick={openForgotPasswordModal} className=' -translate-x-[12px] hover:underline my-3' >
                Change Password
              </button>
              <Modal isOpen={forgotPasswordModalState} onClose={closeForgotPasswordModal}>
                <div className=' w-80 h-80 flex justify-center items-center'>
                  <div className=''>
                    <form onSubmit = {handleForgotPassSubmit}>
                      <div className='flex flex-col w-full m-3'>
                        <label className=' font-bold'>Current Password</label>  
                        <input className=' border-[1px] border-black rounded' type='password' name='currPass' onChange={handleForgotPassChange} value={currPass} required/>
                      </div>
                      <div className='flex flex-col w-full m-3'>
                        <label className=' font-bold'>New Password</label>  
                        <input className=' border-[1px] border-black rounded' type='password' name='newPass' onChange={handleForgotPassChange} value={newPass} required/>
                      </div>
                      <div className='flex flex-col w-full m-3'>
                        <label className=' font-bold'>Confirm New Password</label>  
                        <input className=' border-[1px] border-black rounded' type='password' name='confirmNewPass' onChange={handleForgotPassChange} value={confirmNewPass} required/>
                      </div>
                      <div className= ' mt-8 flex justify-center'>
                        <input className='font-semibold border-2 p-1 bg-blue-400 border-black cursor-pointer rounded transition-colors duration-500 ease-in-out hover:bg-blue-500' type='submit' value='Update Password'/>  
                      </div>
                    </form>
                  </div>
                </div>
              </Modal>
              <button onClick={openDeleteAccountModal} className=' -translate-x-[8px] hover:underline'>
                Delete Your Account
              </button>
              <Modal isOpen={deleteAccountModalState} onClose={closeDeleteAccountModal}>
                <div className=' w-60 h-60 flex justify-center items-center'>
                  <div className=' -translate-y-4'>
                    <div className='flex justify-center text-xl font-bold'>
                      Delete Your Account
                    </div>
                    <div className='flex justify-center mt-4'>
                      <span className='w-[60%]'>Are you sure you want to delete your account?</span>
                    </div>
                    <div className='flex justify-center mt-8 '>
                      <button className='font-semibold border-2 p-1 bg-blue-400 border-black cursor-pointer rounded transition-colors duration-500 ease-in-out hover:bg-blue-500' onClick={handleDeleteAccount}>Delete your account</button>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
            <div className='m-4'>
              <form onSubmit = {handleOnSubmit}>
                <div className='flex justify-between'>
                  <label className='mr-2'>First Name:</label>
                  <input className='pl-2 border-[1px] mr-[145px] border-black rounded' type='text' id='firstName' name='firstName' value={firstName} onChange={handleOnChange} required/>
                </div>
                <div className='mt-3 flex justify-between'>
                  <label className='mr-2'>Last Name:</label>
                  <input className='pl-2 border-[1px] mr-[145px] border-black rounded' type='text' id='lastName' name='lastName' value={lastName} onChange={handleOnChange} required/>
                </div>
                <div className='mt-3 flex justify-between'>
                  <label className='mr-2'>Email Address:</label>
                  <input className='pl-2 border-[1px] mr-[145px] border-black rounded' type='email' id='email' name='email' value={email} onChange={handleOnChange} required/>
                </div>
                <div className='mt-3 '>
                  <label className='mr-[79px]'>Gender:</label>
                  <input type='radio' id='male' name='gender' value='male' checked={gender==='male'} onChange={handleOnChange}/>
                  <label className='mr-3 ml-1' >Male</label>
                  <input type='radio' id='female' name='gender' value='female' checked={gender==='female'} onChange={handleOnChange}/>
                  <label className='mr-2 ml-1' >Female</label>
                </div>
                <div className='mt-3'>
                  <label className='mr-2'>Country:</label>
                  <select className=' pl-2 ml-[67px] w-20 border-[1px] border-black rounded' name='country' value={country} onChange={handleOnChange}>
                    <option value='india'>India</option>
                    <option value='uk'>UK</option>
                    <option value='usa'>USA</option>
                    <option value='germany'>Germany</option>
                  </select>
                </div>
                <div className='mt-3 '>
                  <label className='mr-2'>Date of Birth:</label>
                  <input className='ml-[33px] border-[1px] border-black rounded pl-2' type='date' id='dateOfBirth' name='dateOfBirth' value={dateOfBirth} onChange={handleOnChange}/>
                </div>
                <div className='flex mt-3'>
                <label className='mr-16 pt-1'>ProfilePic:</label>
                <input type='file' onChange={(e) => {setImageFile(e.target.files[0])}} />
                </div>
                <div className='flex justify-center items-center h-20 w-full'>
                  <input className='font-semibold border-2 p-1 bg-blue-400 border-black cursor-pointer rounded transition-colors duration-500 ease-in-out hover:bg-blue-500' type='submit' value='Update'/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>)}
    </div>
    
  )
}
