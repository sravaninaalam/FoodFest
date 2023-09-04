import { Cart_Empty_Img } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { CDN_IMG_URL } from '../utils/constants'
import { clearCart,removeItem } from '../redux/cartSlice'
import {Link} from 'react-router-dom'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const CartCard=({info})=>{
  const{id,name,imageId,price,description,defaultPrice}=info

  const dispatch=useDispatch()

 return(
   <>
   <ToastContainer theme='colored'/>
        <div className="bg-gray-100 hover:bg-gray-300 m-4 p-1 w-72 shadow-lg outline outline-blue-200 rounded-lg">
                         <img src={CDN_IMG_URL+imageId} alt={name} className="rounded-lg w-28 p-1"/>
                         <h1 className="font-bold">{name}</h1>
                         <h5 className="truncate hover:overflow-y-
                         clip ">{description}</h5>
                         <h4 className="text-lg font-semibold">₹{price/100 || defaultPrice/100}</h4>
                         
                                <button className="p-2 m-2 bg-red-200 rounded-lg"
                                onClick={()=>{toast.error("Item has been removed")
                                  dispatch(removeItem(id))}}>Remove Item</button>
                                 <button className="p-2 m-2 bg-green-300 rounded-lg"
                                onClick={()=>{
                                  toast.success("Order Placed succesfully")
                                  toast.info("order item hasbeen removed from the cart")
                                dispatch(removeItem(id))}}>Place Order</button>
              </div>
   </>
 )
}

const Cart = () => {
  const cart_items=useSelector(store=>store.cart.items)
  console.log(cart_items)
 const dispatch=useDispatch()
  return (
     <>   
     <ToastContainer theme='colored'/>
      
        
        <div className='w-10/12 mx-auto my-5 flex flex-wrap'>
            {cart_items.map((items,index)=><CartCard key={items.id} info={items} index={index}/>)}
        </div>
        <div className="flex  justify-center">
      {cart_items.length ?
               <button className="rounded-lg font-medium outline outline-red-500 p-2 m-5 hover:bg-purple-300" onClick={()=>{toast.error("Cart has been cleared")
                dispatch(clearCart())}}>CLEAR CART</button>:
               <div className='m-3'>
                  <img src={Cart_Empty_Img} className='w-56 h-60  mt-2 mx-5'/>
                  <p className='mt-5 text-xl font-serif text-red-500'>Cart is empty Go back to <Link to='/home'><span className='font-bold text-black'>Home</span></Link></p>
                 
                </div>} 
          </div> 
     </>
  )
}

export default Cart
