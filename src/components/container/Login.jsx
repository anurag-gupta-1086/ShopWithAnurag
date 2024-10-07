import React, {useState} from 'react'
import { LoginPresentational } from '../presentational/LoginPresentational'
import { apiConnector } from '../../services/apiConnector';
import { authEndpoints } from '../../services/apis';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setLoggedIn } from '../../redux/slices/globalSlice';
import { setToken } from '../../redux/slices/authSlice';
import { setUser } from '../../redux/slices/profileSlice';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [loginData, setLoginData] = useState({
    email:"",
    pass:"",
  })
  const [loading, setLoading] = useState(false);

  const {LOGIN_API} = authEndpoints;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]:e.target.value,
    })
  }

  const handleOnSubmit = async (e) => {
    try{
      e.preventDefault();
      const {email, pass} = loginData;
      setLoading(true);
      setLoginData({
        email:"",
        pass:"",
      })
      const response = await apiConnector('POST', LOGIN_API, loginData)
      console.log("AG14 : response from login api : ", response)
      if (response.data.success) {
        toast('User is logged in successfully');
        dispatch(setLoggedIn(true));
        dispatch(setToken(response.data.token))
        const userImage = response.data?.user?.additionalDetails?.imageUrl ? response.data.user.additionalDetails.imageUrl
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`;
        dispatch(setUser({ ...response.data.user, image: userImage }))
        localStorage.setItem('user',JSON.stringify({...response.data.user, image:userImage}));
        localStorage.setItem('token',JSON.stringify(response.data.token));
        setLoading(false);
        navigate('/')
      } else {
        toast('Could not login');
      }
    }catch(err) {
      console.log(err);
      toast('Could not login')
    }
    setLoading(false);
  }
  return (
    <div><LoginPresentational loginData={loginData} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} loading={loading}/></div>
  )
}
