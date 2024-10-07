import { combineReducers } from "@reduxjs/toolkit"

import globalReducer from "../slices/globalSlice"
import authReducer from "../slices/authSlice"
import profileReducer from "../slices/profileSlice"
import cartReducer from "../slices/profileSlice"

const rootReducer = combineReducers({
  global: globalReducer,
  auth:authReducer,
  profile:profileReducer,
  cart:cartReducer
})

export default rootReducer
