import React from 'react'
import { GoDotFill } from "react-icons/go";

export const MyOrdersBlockPresentational = (props) => {
  const {title, subtitle, price, statusTitle, statusSubtitle, dotVal, imageUrl} = props;
  return (
    <div className='flex bg-white rounded mt-4'>
      <div className='m-4 w-[15%] '>
        <img className=' h-32'src={imageUrl}/>
      </div>
      <div className='m-2 w-[40%] flex flex-col'>
        <div className='my-2'>
          {title}
        </div>
        <div className='my-2'>
          {subtitle}
        </div>
      </div>
      <div className='m-4 w-[15%]'>
        {price}
      </div>
      <div className='m-4 w-[30%] flex flex-col'>
        <div className='flex'>
          <div className='mx-1 mt-1'>
            <GoDotFill style={(dotVal === 'green') ? {color:'green'} : {color:'red'}}/>
          </div>
          <div className='mx-1 font-bold'>
            {statusTitle}
          </div>
        </div>
        <div className='mt-2 ml-3 mx-1 text-sm'>
          {statusSubtitle}
        </div>
      </div>
    </div>
  )
}
