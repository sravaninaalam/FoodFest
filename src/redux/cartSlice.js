import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addItem: (state, action) => {
      const existing = state.items.find((item) => item.id === action.payload.id)
      if (existing) {
        existing.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: action.payload.quantity || 1 })
      }
    },
    clearCart: (state) => {
      state.items = []
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    updateQuantity: (state, action) => {
      const { id, qty } = action.payload
      const item = state.items.find((i) => i.id === id)
      if (item) {
        item.quantity = qty < 1 ? 1 : qty
      }
    },
  },
})

export const { addItem, clearCart, removeItem, updateQuantity } = cartSlice.actions
export default cartSlice.reducer
