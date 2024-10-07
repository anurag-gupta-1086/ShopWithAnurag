import React from 'react'
import {Block} from '../container/Block'

export const ModulePresentational = ({moduleName, moduleData}) => {
  return (
    <div className='h-44 bg-white mx-4 my-2'>
        <div className='mx-[6.5px] mt-4 font-bold font-serif text-2xl overflow-hidden'>
            {moduleName}
        </div>
        <div className = 'flex overflow-hidden'>
            {
                moduleData.map((item) => {
                    return (
                        <Block key={item.title} imageUrl={item.imageUrl} title={item.title} subtitle={item.subtitle}/>
                    )
                })
            }
        </div>
    </div>
  )
}
