import React from 'react'
import { MyOrdersBlockPresentational } from '../presentational/MyOrdersBlockPresentational'

export const MyOrdersBlock = (props) => {
  return (
    <div><MyOrdersBlockPresentational {...props}/></div>
  )
}
