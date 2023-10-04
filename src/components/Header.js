import React, { useContext, useState } from 'react'
import { LOGO_URL } from '../utils/constants'
import { AlignJustify ,X,Home,ShoppingCart,BadgeInfo,UserSquare2} from 'lucide-react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import userContext from '../utils/userContext'

const Header = () => {
  const cart_items=useSelector(store=>store.cart.items)
  const {logUserName}=useContext(userContext)
    const[open,setOpen]=useState(false)
  return (
    <>
        <div className='bg-violet-300 shadow-sm md:flex  md:justify-between sticky top-0'>
            <div className='flex justify-between items-center'>
              <Link to='/'><img src={LOGO_URL}className='h-20 p-3 rounded-full'/></Link>
                 <div onClick={()=>setOpen(!open)}> 
                    {open?<X className='ml-7 md:hidden'/>:<AlignJustify className='ml-7 md:hidden'/>}
                </div>
             </div>
             <ul className={`md:flex items-center absolute md:static bg-violet-300 w-full md:w-auto
              ${open?'top-20 opacity-100':'top-[-490px]'}
             `}>
               <Link to='/'><li className='mx-4 my-4 md:my-0 font-medium  hover:text-pink-500 flex'>
                  <Home className=" md:mx-1"/>Home</li></Link>
               <Link to='/about'><li className='mx-4 my-4 md:my-0 font-medium  hover:text-pink-500 flex'> 
                  <BadgeInfo className="md:mx-1"/>About</li></Link>
               <Link to='/cart'><li className='mx-4 my-4 md:my-0 font-medium  hover:text-pink-500 flex'>
               <ShoppingCart className="md:mx-1"/>Cart-{cart_items.length}</li></Link>
               {logUserName ?<span className="font-bold mx-4 my-4 md:my-0">{logUserName}</span>:
                <Link to='/login'><button className="mx-4 my-4 md:my-0 font-medium  hover:text-red-400 flex">
                  <UserSquare2 className="md:mx-1"/>Login</button></Link>}
             </ul>
        </div>
    </>
  )
}

export default Header
