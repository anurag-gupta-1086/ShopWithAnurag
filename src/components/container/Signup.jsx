import React, { useState } from 'react'
import { SignupPresentational } from '../presentational/SignupPresentational'
import toast from 'react-hot-toast';
import { apiConnector } from '../../services/apiConnector';
import { authEndpoints } from '../../services/apis';
import { useDispatch } from 'react-redux';
import { setSignupData } from '../../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    newPass:"",
    confirmNewPass:"",
    gender:"",
    country:"india",
  })

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const {SEND_OTP_API} = authEndpoints;

  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log("inside handle on submit", formData);
    const {firstName, lastName, email, newPass, confirmNewPass, gender, country} = formData;
    
    try{
      if (newPass !== confirmNewPass) {
        toast('Could not signup. Password does not match');
        return;
      }
      setLoading(true);
      const postData = {
        email,
      }
      dispatch(setSignupData(formData));
      const response = await apiConnector('POST', SEND_OTP_API, postData);
      
      setFormData({
        firstName:"",
        lastName:"",
        email:"",
        newPass:"",
        confirmNewPass:"",
        gender:"",
        country:"india",
      })
      if (response.data.success) {
        toast('OTP is sent successfully');
        setLoading(false);
        navigate("/verifyemail")
      } else {
        toast(response.data.message);
      }
    }catch(error) {
      console.log(error);
      toast('OTP could not be sent');
    }
    setLoading(false);
  }

  return (
    <div><SignupPresentational formData={formData} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} loading={loading}/></div>
  )
}
