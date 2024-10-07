import React, { useState } from 'react'
import { ForgotPassPresentational } from '../presentational/ForgotPassPresentational'
import toast from 'react-hot-toast';
import { apiConnector } from '../../services/apiConnector';
import { authEndpoints } from '../../services/apis';

export const ForgotPass = () => {
  const [email, setEmail] = useState('');
  const {FORGOT_PASSWORD_API} = authEndpoints;
  const [loading, setLoading] = useState(false)
  const handleSetPassword = async () => {
    try{
      setLoading(true)
      const inputData = {email}
      const response = await apiConnector('POST', FORGOT_PASSWORD_API, inputData)
      if (response.data.success) {
        toast('Update password link has been sent to your email id')
      } else {
        toast('We could not send update password link to your email id')
      }
    }catch(err) {
      console.log(err)
      toast('We could not send update password link to your email id')
    }
    setLoading(false)
  }
  return (
    <div><ForgotPassPresentational email={email} setEmail={setEmail} handleSetPassword={handleSetPassword} loading={loading}/></div>
  )
}
