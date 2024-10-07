import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: localStorage.getItem('totalPrice') ?  localStorage.getItem('totalPrice'): 0,
  discount: localStorage.getItem('discount') ?  localStorage.getItem('discount'): 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    setTotalPrice(state, action) {
      state.totalPrice = action.payload;
    },
    setDiscount(state,action) {
      state.discount = action.payload;
    },
  },
});

export const { setTotalPrice, setDiscount } = cartSlice.actions;

export default cartSlice.reducer;
