import React, { useEffect, useState } from 'react'
import { CartPresentational } from '../presentational/CartPresentational'
import toast from 'react-hot-toast';
import { apiConnector } from '../../services/apiConnector';
import { cartEndpoints } from '../../services/apis';
import { useSelector, useDispatch } from 'react-redux';
import { setTotalPrice } from '../../redux/slices/cartSlice';
import { setDiscount } from '../../redux/slices/cartSlice';

export const Cart = () => {

  const dispatch = useDispatch();
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const discount = useSelector((state) => state.cart.discount);
  const [cartData, setCartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = useSelector((state) => state.auth.token);
  const {GET_CART_API, ADD_TO_CART_API, REMOVE_FROM_CART_API} = cartEndpoints;
  const [totalPriceState, setTotalPriceState] = useState(totalPrice)
  const [discountState, setDiscountState] = useState(discount)

  useEffect(() => {
    const fetchCartData = async () => {
      // Fetch data from an API
      try{
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        };
        const response = await apiConnector('GET', GET_CART_API,'', headers)
        if (response.data.success) {
          const cartObj = response.data.data.map((item) => ({
              id:item.productId,
              title:item.title,
              subtitle:item.subtitle,
              sellerName:item.title,
              oldPrice:item.oldPrice,
              newPrice:item.price,
              quantity:item.quantity,
              deliveryBy:'1st August',
              deliveryCharges:40,
              imageUrl:item.imageUrl
            }
          ))
          setCartData(cartObj)
          let totalPriceNum = 0;
          let discountNum = 0;
          for (let i = 0; i < cartObj.length; i++) {
            totalPriceNum = (totalPriceNum + cartObj[i].oldPrice*cartObj[i].quantity);
            discountNum = (discountNum + (cartObj[i].oldPrice - cartObj[i].newPrice)*cartObj[i].quantity);
          }
          setTotalPriceState(totalPriceNum)
          setDiscountState(discountNum)
          dispatch(setTotalPrice(totalPriceNum));
          dispatch(setDiscount(discountNum));
          localStorage.setItem('totalPrice', totalPriceNum)
          localStorage.setItem('discount', discountNum)
        } else {
          toast('Could not fetch cart items');
        }
      }catch(err) {
        console.log(err);
        toast('Could not fetch cart items')
      }
      setLoading(false)
    }
    fetchCartData()
  }, []);

  const increaseQuantity = async (id, quantityVal, oldPrice, newPrice) => {
    try{
      quantityVal++;
      setLoading(true)
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      };
      const postData = {
        id,
        quantity:quantityVal,
      }
      const response = await apiConnector('POST', ADD_TO_CART_API, postData, headers)
      
      if (response.data.success) {
        setCartData(() => cartData.map((item) =>
        (item.id === id) ?{...item,quantity:quantityVal} : item))

        dispatch(setTotalPrice(totalPriceState + oldPrice))
        dispatch(setDiscount(discountState + (oldPrice - newPrice)))
        localStorage.setItem('totalPrice', totalPriceState + oldPrice)
        localStorage.setItem('discount', discountState + (oldPrice - newPrice))
        setTotalPriceState(totalPriceState + oldPrice);
        setDiscountState(discountState + (oldPrice - newPrice));
        toast('Item quantity is increased')
      } else {
        toast('Could not increase quantity of item')
      }
    }catch(err) {
      console.log(err);
      toast('Could not increase quantity of item')
    }
    setLoading(false)
  }

  const decreaseQuantity = async (id, quantityVal, oldPrice, newPrice) => {
    if (quantityVal <= 1) {
      return;
    }
    try{
      quantityVal--;
      setLoading(true)
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      };
      const postData = {
        id,
        quantity:quantityVal,
      }
      const response = await apiConnector('POST', ADD_TO_CART_API, postData, headers)
      
      if (response.data.success) {
        setCartData(() => cartData.map((item) =>
        (item.id === id) ?{...item,quantity:quantityVal} : item))
        dispatch(setTotalPrice(totalPriceState - oldPrice))
        dispatch(setDiscount(discountState - (oldPrice - newPrice)))
        localStorage.setItem('totalPrice', totalPriceState - oldPrice)
        localStorage.setItem('discount', discountState - (oldPrice - newPrice))
        setTotalPriceState(totalPriceState - oldPrice);
        setDiscountState(discountState - (oldPrice - newPrice));
        toast('Item quantity is decreased')
      } else {
        toast('Could not decrease quantity of item')
      }
    }catch(err) {
      console.log(err);
      toast('Could not decrease quantity of item')
    }
    setLoading(false)
  }

  const handleRemove = async (id, quantity, oldPrice, newPrice) => {
    try{
      setLoading(true)
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      };
      const response = await apiConnector('GET', REMOVE_FROM_CART_API + "/" + id, '', headers)
      
      if (response.data.success) {
        setCartData(() => cartData.filter((item) =>
        (item.id !== id) ))
        dispatch(setTotalPrice(totalPriceState - oldPrice*quantity))
        dispatch(setDiscount(discountState - (oldPrice - newPrice)*quantity))
        localStorage.setItem('totalPrice', totalPriceState - oldPrice*quantity)
        localStorage.setItem('discount', discountState - (oldPrice - newPrice)*quantity)
        setTotalPriceState(totalPriceState - oldPrice*quantity);
        setDiscountState(discountState - (oldPrice - newPrice)*quantity);
        toast('Item  is removed from cart')
      } else {
        toast('Could not remove item')
      }
    }catch(err) {
      console.log(err);
      toast('Could not remove item')
    }
    setLoading(false)
  }
  return (
    <div><CartPresentational cartData={cartData} loading={loading} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} handleRemove={handleRemove} totalPriceState={totalPriceState} discountState={discountState}/></div>
  )
}
