import React, { useState } from 'react'
import { VerifyEmailPresentational } from '../presentational/VerifyEmailPresentational'
import { useSelector } from 'react-redux';
import { authEndpoints } from '../../services/apis';
import { apiConnector } from '../../services/apiConnector';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const VerifyEmail = () => {
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const signupData = useSelector((state) => state.auth.signupData);
  const {SIGNUP_API} = authEndpoints;
  const navigate = useNavigate();

  const handleVerifyOtp = async () => {
    
    try{
      let postData = signupData;
      console.log("AG14 inside handleverifyotp")
      postData = {...postData,enteredOtp:otp};
      
      setLoading(true);
      console.log("AG14 inside handleverifyotp")
      const response = await apiConnector('POST', SIGNUP_API, postData);
      console.log("AG14 signup api resp : ", response);

      if (response.data.success) {
        toast('User account is created successfully');
        setLoading(false);
        navigate("/login")
      } else {
        toast('There was an error in creating user account');
      }
    } catch(err) {
      console.log("AG14 inside handleverifyotp 2", err)
      console.log(err);
      toast('There was an error in creating user account');
    }
    setLoading(false);
  }
  return (
    <div><VerifyEmailPresentational otp={otp} setOtp={setOtp} handleVerifyOtp={handleVerifyOtp} loading={loading}/></div>
  )
}
