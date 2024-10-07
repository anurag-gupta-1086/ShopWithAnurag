import React from 'react'
import { ProductsPresentational } from '../presentational/ProductsPresentational'
import { useLocation } from 'react-router-dom';

export const Products = () => {
  const location = useLocation();
  const { title } = location.state || {};
  console.log("AG18 title is : ", title)

  let productsData = (title === 'Perfumes') ? [
    {
      "id":"p1",
      "title":"Bellavita",
      "subtitle":"For men",
      "price":5000,
      "oldPrice":7000,
      "rating":"4.9",
      "imageUrl":"https://rukminim2.flixcart.com/image/612/612/xif0q/perfume/2/2/6/100-ceo-man-eau-de-parfum-long-lasting-notes-of-tonka-agarwood-original-imahyhfc2g4evkpp.jpeg?q=70",
    },
    {
      "id":"p2",
      "title":"Wild Stone",
      "subtitle":"For men",
      "price":1500,
      "oldPrice":2000,
      "rating":"4.2",
      "imageUrl":"https://rukminim2.flixcart.com/image/612/612/xif0q/deodorant/k/8/r/-original-imagwfhxrjhhdszp.jpeg?q=70",
    } 
  ] : [
    {
      "id":"s1",
      "title":"Adidas",
      "subtitle":"For men",
      "price":9000,
      "oldPrice":15000,
      "rating":"4.7",
      "imageUrl":"https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/q/s/n/-original-imah25hq9y8t3ukf.jpeg?q=70",
    },
    {
      "id":"s2",
      "title":"Nike",
      "subtitle":"For men",
      "price":6000,
      "oldPrice":9000,
      "rating":"4.6",
      "imageUrl":"https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/y/a/c/-original-imagz7u7tkrnngge.jpeg?q=70",
    }
  ]
  
  return (
    <div><ProductsPresentational title={title} productsData={productsData} /></div>
  )
}
