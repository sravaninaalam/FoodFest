import React, {  useState } from 'react'
import { LOGO_URL } from '../utils/constants'
import { AlignJustify, X, Home, ShoppingCart, BadgeInfo, UserSquare2, Package } from 'lucide-react'
import { useSelector } from 'react-redux'
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../utils/userContext';

const Header = () => {
  const cart_items = useSelector((store) => store.cart.items)
const { logUserName, isAuthenticated, logout } = useAuth();
const navigate = useNavigate();
  const [open, setOpen] = useState(false)

  const cartCount = cart_items.reduce((sum, item) => sum + item.quantity, 0)

  const handleLogout = () => {
  logout();
  setOpen(false);
  navigate('/');
};

  return (
    <header className="sticky top-0 z-20 bg-orange-500 text-white shadow">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
        <Link to="/" className="flex items-center gap-2 cursor-none">
          <img src={LOGO_URL} alt="FoodFest" className="h-12 w-12 rounded-full object-cover" />
          <span className="text-xl font-bold italic">HomeFinds</span>
        </Link>

        <button
          type="button"
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <AlignJustify />}
        </button>

        <ul
          className={` font-semibold absolute left-0 right-0 top-16 flex flex-col gap-4 bg-orange-600 px-6 py-4 md:static md:flex md:flex-row md:items-center md:bg-transparent md:px-0 md:py-0 ${
            open ? 'flex' : 'hidden md:flex'
          }`}
        >
          <li>
            <Link to="/" className="flex items-center gap-1 hover:underline" onClick={() => setOpen(false)}>
              <Home size={20} /> Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="flex items-center gap-1 hover:underline" onClick={() => setOpen(false)}>
              <BadgeInfo size={20} /> About
            </Link>
          </li>
          <li>
            <Link to="/cart" className="flex items-center gap-1 hover:underline" onClick={() => setOpen(false)}>
              <ShoppingCart size={20} /> Cart ({cartCount})
            </Link>
          </li>
          <li>
            <Link to="/orders" className="flex items-center gap-1 hover:underline" onClick={() => setOpen(false)}>
              <Package size={20} /> Orders
            </Link>
          </li>
          <li>
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <span className="font-semibold">Hi, {logUserName}</span>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="rounded bg-white px-2 py-1 text-sm text-orange-600"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login" className="flex items-center gap-1 hover:underline" onClick={() => setOpen(false)}>
                <UserSquare2 size={18} /> Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
