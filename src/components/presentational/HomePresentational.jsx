import React from 'react'
import { Module } from '../container/Module'

export const HomePresentational = ({homepageData}) => {
  return (
    <div className='flex flex-col bg-gray-400' >
      {
        Object.entries(homepageData).map(([moduleName, moduleData]) => {
            return (
                <Module key={moduleName} moduleName={moduleName} moduleData={moduleData}/>
            )
        })
      }
    </div>
    
  )
}
