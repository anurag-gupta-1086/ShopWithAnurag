import React from 'react'
import { FaSquarePlus } from "react-icons/fa6";
import { FaSquareMinus } from "react-icons/fa6";

export const CartBlockPresentational = (props) => {
  const {id, title, subtitle, sellerName, oldPrice, newPrice, quantity, deliveryBy, deliveryCharges, imageUrl, increaseQuantity, decreaseQuantity, handleRemove} = props;
  return (
    <div className='flex h-[184px] border-t-[1px] border-gray-400'>
      <div className='w-[20%] p-4'>
        <div className='flex justify-center '>
          <img className=' h-28' src={imageUrl}/>
        </div>
        <div className=' flex justify-center items-center h-12 -translate-x-[0.15rem]'>
          <button onClick={() => increaseQuantity(id, quantity, oldPrice, newPrice)} className='mx-1'>
            <FaSquarePlus size='28px' style={{color:'orange'}} />
          </button>
          <div className='w-6 h-6 flex justify-center items-center border-[1px] border-black rounded'>
            {quantity}
          </div>
          {
            quantity>1 ?
            <button onClick={() => decreaseQuantity(id, quantity, oldPrice, newPrice)} className='mx-1'>
              <FaSquareMinus size='28px' style={{color:'orange'}} />
            </button> : 
            <div className='mx-1'>
              <FaSquareMinus size='28px' style={{color:'grey'}} />
            </div>
          }
        </div>
      </div>
      <div className='w-[50%] p-4'>
        <div>
          {title}
        </div>
        <div className=' text-gray-400 text-sm'>
          {subtitle}
        </div>
        <div className='text-gray-400 text-sm mt-2'>
          Seller: {sellerName}
        </div>
        <div className='mt-2'>
          <span className='text-xs text-gray-400 mr-1 line-through'>Rs. {oldPrice}</span>
          <span className='font-bold'>Rs. {newPrice}</span>
        </div>
        <div className='mt-5'>
          <button className=' font-semibold transition-colors duration-300 ease-in-out hover:text-blue-500' onClick = {() => handleRemove(id, quantity, oldPrice, newPrice)}>REMOVE</button>
        </div>
      </div>
      <div className='w-[30%] p-4'>
        <div>
          Delivery by {deliveryBy} | Rs. {deliveryCharges}
        </div>
      </div>
    </div>
  )
}
