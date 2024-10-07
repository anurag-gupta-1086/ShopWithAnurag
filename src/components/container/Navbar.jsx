import React from 'react'
import { NavbarPresentational } from '../presentational/NavbarPresentational'
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/slices/profileSlice';
import { setToken } from '../../redux/slices/authSlice';
import { setLoggedIn } from '../../redux/slices/globalSlice';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const handleLogout = () => {
    try {
      dispatch(setUser(null))
      dispatch(setToken(null))
      dispatch(setLoggedIn(false))
      // empty the cart

      localStorage.clear();
      toast.success("Logged Out")
      navigate('/')
    } catch(err) {
      console.log("AG14 error : ",err)
    }
  }
  return (
    <div><NavbarPresentational handleLogout={handleLogout}/></div>
  )
}
