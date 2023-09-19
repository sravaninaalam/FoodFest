
import { Link } from "react-router-dom"
import { LOGO_URL } from "../utils/constants"
import { useSelector } from "react-redux"
import { Home,ShoppingCart, BadgeInfo, UserSquare2  } from 'lucide-react';
import { useContext } from "react";
import userContext from "../utils/userContext";
const  Header = () => {
 const cart_items=useSelector(store=>store.cart.items)
 const {logUserName}=useContext(userContext)

  return (
    <>
 
       <div className='w-screen flex justify-between shadow-sm sticky top-0 bg-gray-300'>
         <Link to='/'><img src={LOGO_URL} alt='logo' className='h-12 md:h-24 md:p-3 rounded-full'/></Link>
       {/* <Link to='/'><img src={LOGO_URL} className="h-14 md:h-24 md:p-3"/></Link> */}
            <div className='md:flex md:items-center hidden'>
                <ul className='flex'>
                 <Link to='/'> <li className='px-4 font-medium  hover:text-pink-500 flex'>
                  <Home className=" md:mx-1"/>Home</li></Link>
                <Link to='/about'><li className='px-4 font-medium hover:text-red-400 flex'>
                  <BadgeInfo className="md:mx-1"/>About</li></Link>
               <Link to='/cart'><li className='px-4 font-medium hover:text-pink-400 flex'>
                <ShoppingCart className="md:mx-1"/>Cart-{cart_items.length}</li></Link>
                {logUserName ?<span className="font-bold px-4">{logUserName}</span>:
                <Link to='/login'><button className="px-4 font-medium  hover:text-red-400 flex">
                  <UserSquare2 className="md:mx-1"/>Login</button></Link>}
                </ul>
            </div>
       </div>
    </>
  )
}

export default Header
