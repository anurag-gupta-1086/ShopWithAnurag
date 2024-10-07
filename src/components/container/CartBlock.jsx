import React from 'react'
import { CartBlockPresentational } from '../presentational/CartBlockPresentational'

export const CartBlock = (props) => {
  return (
    <div><CartBlockPresentational {...props}/></div>
  )
}
