import React from 'react'
import { ModulePresentational } from '../presentational/ModulePresentational'

export const Module = ({moduleName, moduleData}) => {
  return (
    <div><ModulePresentational moduleName={moduleName} moduleData={moduleData}/></div>
  )
}
