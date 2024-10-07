import React from 'react'
import { ProductBlock } from '../container/ProductBlock';

export const ProductsPresentational = (props) => {
  const {title, productsData} = props;
  return (
    <div>
        <h1 className=' text-4xl m-4 ml-8'>{title}</h1>
        <div className='m-4 h-[474px] flex'>
            {
                productsData.map( (item) => {
                        return (
                            <ProductBlock key={item.id}
                                           id={item.id}
                                           title={item.title}
                                           subtitle={item.subtitle}
                                           price={item.price}
                                           oldPrice={item.oldPrice}
                                           rating={item.rating}
                                           imageUrl={item.imageUrl}
                            />
                        )
                    })
            }
        </div>
    </div>
  )
}
