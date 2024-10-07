import React from 'react'
import { Link } from 'react-router-dom';

export const BlockPresentational = ({imageUrl, title, subtitle}) => {
        const dataToPass = {
          title
        }
        return (
            (title === 'Perfumes' || title === 'Shoes') ?
            (<Link to={{pathname:'/products'}} state={dataToPass} className='flex flex-col justify-normal items-center border-blue-400 border-2 w-32 h-32 overflow-hidden my-2 mx-[6.5px] transition-transform duration-300 ease-in-out transform hover:scale-110'>
              <div className='w-auto h-[60%] overflow-hidden'><img src={imageUrl} alt='Not found'></img></div>
              <div className='h-[20%]'>{title}</div>
              <div className='h-[20%] text-red-600'>{subtitle}</div>
            </Link>):
            (<div className='flex flex-col justify-normal items-center border-blue-400 border-2 w-32 h-32 overflow-hidden my-2 mx-[6.5px] transition-transform duration-300 ease-in-out transform hover:scale-110'>
              <div className='w-auto h-[60%] overflow-hidden'><img src={imageUrl} alt='Not found'></img></div>
              <div className='h-[20%]'>{title}</div>
              <div className='h-[20%] text-red-600'>{subtitle}</div>
            </div>)
        )
}
