import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { MyProfilePresentational } from '../presentational/MyProfilePresentational'
import { setUser } from '../../redux/slices/profileSlice';
import { setToken } from '../../redux/slices/authSlice';
import { setLoggedIn } from '../../redux/slices/globalSlice';
import toast from 'react-hot-toast';
import { apiConnector } from '../../services/apiConnector';
import { userEndpoints, authEndpoints } from '../../services/apis';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const MyProfile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const {UPDATE_USER_API} = userEndpoints;
  const {CHANGEPASSWORD_API, DELETE_ACCOUNT_API} = authEndpoints;
  const [forgotPasswordModalState, setForgotPasswordModal] = useState(false);
  const [deleteAccountModalState, setDeleteAccountModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState('')
  const user = useSelector((state) => state.profile.user);
  const token = useSelector((state) => state.auth.token);

  const [formData, setFormData] = useState({
    firstName:user?.firstName,
    lastName:user?.lastName,
    email:user?.email,
    gender:user?.additionalDetails.gender,
    country:user?.country,
    dateOfBirth:user?.additionalDetails.dateOfBirth,
    image: user?.additionalDetails.imageUrl ? user?.additionalDetails.imageUrl : user?.image,
  })

  const [forgotPassData, setForgotPassData] = useState({
    currPass:'',
    newPass:'',
    confirmNewPass:'',
  })

  const handleForgotPassChange = (e) => {
    setForgotPassData({
      ...forgotPassData,
      [e.target.name]:e.target.value,
    })
  }

  const handleForgotPassSubmit = async (e) => {
    const {currPass, newPass, confirmNewPass} = forgotPassData;
    try{
      e.preventDefault();
      setForgotPassData({
        currPass:"",
        newPass:"",
        confirmNewPass:"",
      })
      if (newPass !== confirmNewPass) {
        toast('Could not update password. New passwords do not match');
        return;
      }
      if (newPass === currPass) {
        toast('Could not update password. New password is same as old password');
        return;
      }
      
      const inputData = {
        oldPass:currPass,
        newPass
      }
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      };
      setLoading(true);
      const response = await apiConnector('POST', CHANGEPASSWORD_API, inputData, headers)
      console.log("AG14 : response from forgotpassword api : ", response)
      if (response.data.success) {
        toast('Password is updated successfully');
        setLoading(false);
        navigate('/')
        return;
      } else {
        toast('Could not change password');
      }
    }catch(err) {
      console.log(err);
      toast('Could not change password')
    }
    setLoading(false);
    navigate('/myprofile')
  }

  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:e.target.value,
    })
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true)
      let postObj;
      if (imageFile) {
        const imageData = new FormData();
        imageData.append('file', imageFile);
        imageData.append('upload_preset', 'shopwithanurag')

        const imgResponse = await axios.post(
          `https://api.cloudinary.com/v1_1/dswjc95qv/image/upload`,
          imageData
        );
        setFormData((prevFormData) => ({...prevFormData,image:imgResponse.data.secure_url}));
        postObj = {...formData, userId: user._id, image: imgResponse.data.secure_url}
      } else {
        postObj = {...formData, userId: user._id}
      }
      const response = await apiConnector('POST', UPDATE_USER_API, postObj)
      console.log("response : ", response);
      if (response.data.success) {
        const userImage = response.data?.data?.additionalDetails?.imageUrl ? response.data.data.additionalDetails.imageUrl
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.data.firstName} ${response.data.data.lastName}`;
        dispatch(setUser({ ...response.data.data, image: userImage }))
        localStorage.setItem('user',JSON.stringify({...response.data.data, image:userImage}));
      }
      toast(response.data.message);
      setLoading(false);
    } catch(err) {
      console.log("AG14 error is : ", err)
      toast('There was an error in updating user data')
    }

  }

  const handleDeleteAccount = async () => {
    try {
      setLoading(true)
      const postObj={};
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      };
      
      const response = await apiConnector('POST', DELETE_ACCOUNT_API, postObj, headers)
      console.log("response : ", response);
      if (response.data.success) {
        dispatch(setUser(null))
        dispatch(setToken(null))
        dispatch(setLoggedIn(false))

        localStorage.clear();
        toast.success("Logged Out")
        navigate('/')
      }
      toast(response.data.message);
      setLoading(false);
    } catch(err) {
      console.log("AG14 error is : ", err)
      toast('There was an error in deleting the account')
    }
    
  }

  const closeForgotPasswordModal = () => {
    setForgotPasswordModal(false);
  }
  const openForgotPasswordModal = () => {
    setForgotPasswordModal(true);
  }

  const closeDeleteAccountModal = () => {
    setDeleteAccountModal(false);
  }
  const openDeleteAccountModal = () => {
    setDeleteAccountModal(true);
  }

  return (
    <div>
      <MyProfilePresentational forgotPasswordModalState={forgotPasswordModalState}
                               closeForgotPasswordModal={closeForgotPasswordModal}
                               openForgotPasswordModal={openForgotPasswordModal}
                               deleteAccountModalState={deleteAccountModalState}
                               closeDeleteAccountModal={closeDeleteAccountModal}
                               openDeleteAccountModal={openDeleteAccountModal}
                               formData = {formData}
                               handleOnChange={handleOnChange}
                               handleOnSubmit={handleOnSubmit}
                               loading={loading}
                               setImageFile={setImageFile}
                               handleForgotPassChange={handleForgotPassChange}
                               forgotPassData={forgotPassData}
                               handleForgotPassSubmit={handleForgotPassSubmit}
                               handleDeleteAccount={handleDeleteAccount}
      />
    </div>
  )
}
