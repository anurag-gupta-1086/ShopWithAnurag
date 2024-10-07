import React from 'react'
import { MyOrdersPresentational } from '../presentational/MyOrdersPresentational'

export const MyOrders = () => {
  const myOrdersData = [
    {
      "title":"System Design Interview book",
      "subtitle":"By Alex Xu",
      "price":"Rs. 1500",
      "statusTitle":"Will be delivered on 05 June, 2024",
      "statusSubtitle":"Your item is in transit",
      "dotVal":"red",
      "imageUrl":"https://rukminim2.flixcart.com/image/200/200/xif0q/book/1/l/d/system-design-interview-an-insider-s-guide-volume-1-greyscale-original-imags52nhtkes4gr.jpeg?q=90",
    },
    {
      "title":"Apple iPad 64 GB ROM 9th Gen",
      "subtitle":"By Apple",
      "price":"Rs. 30000",
      "statusTitle":"Delivered on 02 May, 2024",
      "statusSubtitle":"Your item has been delivered",
      "dotVal":"green",
      "imageUrl":"https://rukminim2.flixcart.com/image/200/200/ktop5e80/tablet/6/o/s/mk2p3hn-a-apple-original-imag6yy8deumbvxz.jpeg?q=90",
    },
    {
      "title":"Apple iPhone Mobile charger 20W 3A",
      "subtitle":"By Apple",
      "price":"Rs. 1800",
      "statusTitle":"Delivered on 14 Mar, 2024",
      "statusSubtitle":"Your item has been delivered",
      "dotVal":"green",
      "imageUrl":"https://rukminim2.flixcart.com/image/200/200/xif0q/battery-charger/w/y/x/-original-imagwcbp7gdh9q5q.jpeg?q=90",
    },
    {
      "title":"Puma Full Sleeve Colorback Men Jacket",
      "subtitle":"By Puma",
      "price":"Rs. 3500",
      "statusTitle":"Delivered on 09 Mar, 2024",
      "statusSubtitle":"Your item has been delivered",
      "dotVal":"green",
      "imageUrl":"https://rukminim2.flixcart.com/image/200/200/k5r2mq80/jacket/v/h/p/xl-01ndet-navyblue-xl-ndet-original-imafzysxyun6muza.jpeg?q=90",
    },
  ]
  return (
    <div><MyOrdersPresentational myOrdersData={myOrdersData}/></div>
  )
}
