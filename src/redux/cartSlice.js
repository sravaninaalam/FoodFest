import {createSlice, createSlice} from '@reduxjs/toolkit'
const cartSlice=createSlice({
    name:'cart',
    initialState:{items:[]},
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
        },
        clearCart:(state)=>{
            state.items=[]
        },
        removeItem:(state,action)=>{
          state.items=state.items.filter(item=>item.id!==action.payload)
           
        },
        updateQuantity:(state,action)=>{
            const{id,qty}=action.payload
           state.items.filter(item=>item.id===id?item.quantity=qty:item.qty)
        }
    }
})
export const {addItem,clearCart,removeItem,updateQuantity}=cartSlice.actions
export default cartSlice.reducer
