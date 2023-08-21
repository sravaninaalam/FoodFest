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
           
        const toRemove=state.items.filter(item=>item.id!==action.payload)
          state.items.splice(toRemove,1)
        }
    }
})
export const {addItem,clearCart,removeItem}=cartSlice.actions
export default cartSlice.reducer
