import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import orderSlice from './orderSlice'

const store = configureStore({
  reducer: {
    cart: cartSlice,
    orders: orderSlice,
  },
})

export default store

export default store
