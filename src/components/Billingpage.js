import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function Billingpage() {
  
    const cart_data=useSelector(store=>store.cart.items)
    const[total,setTotal]=useState(0)
    useEffect(()=>{
        setTotal(cart_data.reduce((acc,curr)=>acc+(curr.price/100 || curr.defaultPrice/100)*curr.quantity,0))
    },[cart_data])
   
  return (
        <div className='border border-b-black my-5 p-4 '>
            <h1 className='font-bold text-center'>Total billing in Rs/- {total}</h1>   
    </div>

  )
}

export default Billingpage
