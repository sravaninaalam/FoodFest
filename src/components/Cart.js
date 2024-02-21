import { Cart_Empty_Img } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { CDN_IMG_URL } from '../utils/constants'
import { clearCart,removeItem, updateQuantity } from '../redux/cartSlice'
import {Link} from 'react-router-dom'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Billingpage from './Billingpage'
const CartCard=({info})=>{
  const{id,name,imageId,price,defaultPrice,quantity}=info

  const dispatch=useDispatch()
  function changeQuantity(id,qty){
      dispatch(updateQuantity({id,qty}))
  }

 return(
   <>
   <ToastContainer theme='colored'/>
        <div className=" m-4 p-1  shadow-lg rounded-lg flex items-center">
                <img src={CDN_IMG_URL+imageId} alt={name} className="rounded-lg w-28 p-1"/>
                <h1 className="font-bold mx-6">{name}</h1>
                <h4 className="text-lg font-semibold">₹{price/100 || defaultPrice/100}</h4>
                         
                <button className="p-2 m-2 bg-red-200 rounded-lg mx-6"
                       onClick={()=>{toast.error("Item has been removed")
                                  dispatch(removeItem(id))}}>Remove Item</button>
                <button className="p-2 my-2 mr-6 bg-green-300 rounded-lg"
                      onClick={()=>{toast.success("Order Placed succesfully")
                                 toast.info("order item hasbeen removed from the cart")
                              dispatch(removeItem(id))}}>Place Order</button>
              {quantity >1 &&<button className='bg-gray-400 px-2 mt-1' onClick={()=>changeQuantity(id,quantity-1)}>-</button>}
                <span  className='px-2 text-center font-bold'>{quantity}</span>
                <button className='bg-gray-400 px-2 mt-1' onClick={()=>changeQuantity(id,quantity+1)}>+</button>
              </div>
   </>
 )
}

const Cart = () => {
  const cart_items=useSelector(store=>store.cart.items)
  
 const dispatch=useDispatch()
  return (
     <>   
     <ToastContainer theme='colored'/>
      
        
        <div className='w-10/12 mx-auto my-5'>
            {cart_items.map((items,index)=><CartCard key={items.id} info={items} index={index}/>)}
        </div>
        <div className="flex  justify-center">
      {cart_items.length ?
        <div>
              <Billingpage/>
               <button className="rounded-lg font-medium outline outline-red-500 p-2 m-5 hover:bg-purple-300" onClick={()=>{toast.error("Cart has been cleared")
                dispatch(clearCart())}}>CLEAR CART</button>
                </div>
                :
               <div className='m-3'>
                  <img src={Cart_Empty_Img} className='w-56 h-60  mt-2 mx-5'/>
                  <p className='mt-5 text-xl font-serif text-red-500'>Cart is empty Go back to <Link to='/home'><span className='font-bold text-black'>Home</span></Link></p>
                 
                </div>} 
          </div> 
     </>
  )
}

export default Cart
