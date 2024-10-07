import React from 'react'
import { IoIosStarOutline } from "react-icons/io";
import { GrCart } from 'react-icons/gr';

export const ProductBlockPresentational = (props) => {
  const {title, subtitle, price, oldPrice, rating, imageUrl, handleAddToCart} = props;
  return (
    <div className='border-[1px] border-black shadow-lg m-4 rounded'>
        <img src={imageUrl} className=' w-40 h-40 m-4'/>
        <div className='mx-4 mb-4'>
            <h2 className='flex justify-center font-semibold'>{title}</h2>
            <h6 className=' text-xs flex justify-center'>{subtitle}</h6>
            <div className='flex my-1'><span className=' bg-green-400 pl-1'>{rating}</span><span className='pt-1 pl-[2px] pr-1 bg-green-400'><IoIosStarOutline /></span></div>
            <div className='flex'>
                <div className=' font-bold mr-1 text-xl'>Rs. {price}</div>
                <div className=' text-xs pt-2 line-through'>Rs. {oldPrice}</div>
            </div>
            <button className='font-semibold w-40 mt-2 border-2 p-1 bg-orange-400 border-black cursor-pointer rounded transition-colors duration-500 ease-in-out hover:bg-orange-500 flex justify-center' onClick={handleAddToCart} ><span className=' pt-1 mr-1'><GrCart/></span><span>ADD TO CART</span></button>
        </div>
    </div>
  )
}
