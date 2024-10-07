import React from 'react'
import { MyOrdersBlock } from '../container/MyOrdersBlock';

export const MyOrdersPresentational = (props) => {
  const {myOrdersData} = props;
  return (
    <div className='flex justify-center'>
        <div className='w-[800px] bg-gray-400 mt-8 mb-8 rounded shadow-xl'>
            <div className='mt-4 mx-4 font-bold text-lg'>
                Your Recent Orders
            </div>
            <div className=' mx-4'>
                {
                    myOrdersData.map( (item) => {
                        return (
                            <MyOrdersBlock key={item.title}
                                           title={item.title}
                                           subtitle={item.subtitle}
                                           price={item.price}
                                           statusTitle={item.statusTitle}
                                           statusSubtitle={item.statusSubtitle}
                                           dotVal={item.dotVal}
                                           imageUrl={item.imageUrl}
                            />
                        )
                    })
                }
            </div>
            <div className=' h-10'>
            </div>
        </div>
    </div>
  )
}
