import React, {useState} from 'react'
import { ResetPasswordPresentational } from '../presentational/ResetPasswordPresentational'
import toast from 'react-hot-toast';
import { apiConnector } from '../../services/apiConnector';
import { authEndpoints } from '../../services/apis';
import { useParams } from 'react-router-dom';

export const ResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const [newPass, setNewPass] =  useState('');
  const {RESET_PASSWORD_API} = authEndpoints;
  const { token } = useParams();

  const handleResetPassword = async (e) => {
    try{
        setLoading(true)
        const inputData = {newPass,token}
        const response = await apiConnector('POST', RESET_PASSWORD_API, inputData)
        if (response.data.success) {
          toast('New password is set for the user')
        } else {
          toast('We could not send update password')
        }
      }catch(err) {
        console.log(err)
        toast('We could not send update password')
      }
      setLoading(false)
  }
  return (
    <div><ResetPasswordPresentational loading={loading} newPass={newPass} setNewPass={setNewPass} handleResetPassword={handleResetPassword}/></div>
  )
}
