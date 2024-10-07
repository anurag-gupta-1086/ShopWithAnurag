import React from 'react'
import { CartBlock } from '../container/CartBlock'
import { SpinnerCircular } from 'spinners-react';

export const CartPresentational = (props) => {
  const {cartData, loading, increaseQuantity, decreaseQuantity, handleRemove, totalPriceState, discountState} = props;
  return (
    loading ? (<div className='flex justify-center items-center min-h-[561px]'><SpinnerCircular /></div>):
    (<div className='flex justify-center min-h-[561px]'>
        <div className='w-[80%] flex'>
            <div className='w-[70%] m-8 rounded'>
                <div className=' bg-gray-400 rounded'>
                    <div className='h-2 bg-gray-400 rounded'>
                    </div>
                    <div className='bg-white mt-2 m-4 rounded'>
                        <div className='flex justify-between m-3'>
                            <div>
                                <div className='mt-3'>
                                    <span className=' font-bold'>Deliver to:</span> H.No-366, Street no-3,
                                </div>
                                <div className='mb-3'>
                                    Friends colony, New Delhi, PinCode-100111
                                </div>
                            </div>
                            <div className='my-5 mr-2'>
                                <button className='font-semibold border-2 p-1 bg-blue-400 border-black cursor-pointer rounded transition-colors duration-500 ease-in-out hover:bg-blue-500'>Change</button>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white mx-4 mb-2 rounded'>
                        <div>
                            {cartData.map((item) => {
                                return <CartBlock key={item.id} {...item} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} handleRemove={handleRemove}/>
                            })}
                        </div>
                        {
                            cartData.length ?
                            <div className=' h-12 flex justify-end items-center p-8 border-t-2 border-black'>
                                <div className='font-semibold border-2 p-1 bg-blue-400 border-black cursor-pointer rounded transition-colors duration-500 ease-in-out hover:bg-blue-500'>PLACE ORDER</div>
                            </div>:''
                        }   
                    </div>
                    <div className='h-2 bg-gray-400 rounded'>
                    </div>
                </div>
            </div>
            <div className='w-[30%] my-8'>
                <div className='bg-gray-400 rounded'>
                    <div className='h-2 bg-gray-400 rounded'>
                    </div>
                    <div className='bg-white my-2 mx-4 rounded'>
                        <div className='h-10'>
                            <div className='p-2 pl-4 font-bold border-b-[1px] border-black'>PRICE DETAILS</div>
                        </div>
                        <div className=' m-2 mt-4 flex justify-between '>
                            <div className=' pl-4'>
                                Price ({cartData.length} items)
                            </div>
                            <div className=' pr-4'>
                                Rs. {totalPriceState}
                            </div>
                        </div>
                        <div className=' m-2 flex justify-between'>
                            <div className=' pl-4 '>
                                Discount
                            </div>
                            <div className=' pr-4 text-green-500'>
                                - Rs. {discountState}
                            </div>
                        </div>
                        <div className=' m-2 mb-4 flex justify-between '>
                            <div className=' pl-4 '>
                                Delivery Charges
                            </div>
                            <div className=' pr-4'>
                                Rs. {cartData.length*40}
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <div className='w-[90%] flex justify-between border-y-[1px] border-dotted'>
                                <div className='m-[10px] text-lg'>
                                    Total amount
                                </div>
                                <div className='m-[10px] text-lg'>
                                    Rs. {totalPriceState - discountState + (cartData.length*40)}
                                </div>
                            </div>
                        </div>
                        <div className=' text-green-500 ml-[26px] py-4 pr-4 text-sm'>
                            You will save Rs. {discountState} on this order.
                        </div>
                    </div>
                    <div className='h-2 bg-gray-400 rounded'>
                    </div>
                </div>
            </div>
        </div>
    </div>)
  )
}
