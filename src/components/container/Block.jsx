import React from 'react'
import { BlockPresentational } from '../presentational/BlockPresentational'

export const Block = ({imageUrl, title, subtitle}) => {
  return (
    <div><BlockPresentational title = {title} subtitle={subtitle} imageUrl = {imageUrl}/></div>
  )
}
