import React from 'react'
import { ProductBlockPresentational } from '../presentational/ProductBlockPresentational'
import { useSelector } from 'react-redux';
import { apiConnector } from '../../services/apiConnector';
import { cartEndpoints } from '../../services/apis';
import toast from 'react-hot-toast';

export const ProductBlock = (props) => {
  const token = useSelector((state) => state.auth.token);
  const {id, title, subtitle, price, oldPrice, imageUrl} = props;
  const {ADD_TO_CART_API} = cartEndpoints;

  const handleAddToCart = async () => {

    try{
      const postData = {
        id,
        title,
        subtitle,
        price,
        oldPrice,
        imageUrl,
        type:'productspage'
      }
  
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      };
      const response = await apiConnector('POST', ADD_TO_CART_API, postData, headers)
      if (response.data.success) {
        toast('Item is added to cart successfully');
        return;
      } else {
        toast(response.data.message);
      }
    }catch(err) {
      console.log(err);
      toast('Could not add the item to cart')
    }
  }
  return (
    <div><ProductBlockPresentational {...props} handleAddToCart={handleAddToCart}/></div>
  )
}
