import { createSlice } from '@reduxjs/toolkit'

const savedOrders = (() => {
  try {
    return JSON.parse(localStorage.getItem('foodfest_orders')) || []
  } catch {
    return []
  }
})()

const orderSlice = createSlice({
  name: 'orders',
  initialState: { list: savedOrders },
  reducers: {
    addOrder: (state, action) => {
      state.list.unshift(action.payload)
      localStorage.setItem('foodfest_orders', JSON.stringify(state.list))
    },
    clearOrders: (state) => {
      state.list = []
      localStorage.setItem('foodfest_orders', JSON.stringify([]))
    },
  },
})

export const { addOrder, clearOrders } = orderSlice.actions
export default orderSlice.reducer
