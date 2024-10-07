import React from 'react'
import {Link} from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
import { GrCart } from "react-icons/gr";
import { useSelector } from 'react-redux';

export const NavbarPresentational = (props) => {
  const loggedIn = useSelector((state) => state.global.loggedIn);
  const {handleLogout} = props;

  return (
    <div className='bg-gray-400 pb-2'>
        <div className='flex justify-evenly bg-black'>
            <Link to="/" className='m-2 text-white transition-colors duration-300 ease-in-out hover:text-blue-500'>ShopWithAnurag</Link>
            <div>
                <input className='border-green-700 border-2 m-2 rounded' type="text" placeholder='Search your products'></input>
            </div>
            <div className='flex'>
                {
                    (!loggedIn) ? (
                        <>
                            <Link className = 'my-2 mx-5 text-white transition-transform duration-300 ease-in-out transform hover:scale-110' to='/login'>
                                LogIn
                            </Link>
                            <Link className = 'my-2 mx-5 text-white transition-transform duration-300 ease-in-out transform hover:scale-110' to='/signup'>
                                SignUp
                            </Link>
                        </>   
                    ) : (
                        <>
                            <Link className = 'my-2 mx-5 text-white' to='/myprofile'>
                                <div className='flex relative z-30 group'>
                                    <div className='mr-1'>Account</div>
                                    <CgProfile size="25"/>
                                    <div className=' invisible absolute top-6 left-[71px] w-3 h-3 bg-blue-400 group-hover:visible group-hover:transform rotate-45'>
                                    </div>
                                    <div className='invisible absolute top-7 left-7 w-24 h-[74px] bg-blue-400 group-hover:visible'>
                                        <Link className='w-full flex justify-center' to='/myprofile'>
                                            My Profile
                                        </Link>
                                        <Link className='border-y-[1px] border-white w-full flex justify-center ' to='/myorders'>
                                            My orders
                                        </Link>
                                        <Link to='/'>
                                            <button onClick={handleLogout} className='w-full flex justify-center'>
                                                Logout
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </Link>
                            <Link className = 'my-2 mx-5 text-white transition-transform duration-300 ease-in-out transform hover:scale-110' to='/cart'>
                                <GrCart size="25" />
                            </Link>
                        </>
                        
                    )
                }
                
                
            </div>
            
        </div>
    </div>
  )
}
