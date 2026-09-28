import { Cart_Empty_Img, CDN_IMG_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, removeItem, updateQuantity } from '../redux/cartSlice'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Billingpage from './Billingpage'

const CartCard = ({ info }) => {
  const { id, name, imageId, price, defaultPrice, quantity } = info
  const dispatch = useDispatch()
  const unitPrice = (price || defaultPrice) / 100

  return (
    <div className="m-4 flex flex-wrap items-center gap-3 rounded-lg border border-orange-100 bg-white p-3 shadow-sm">
      <img
        src={CDN_IMG_URL + imageId}
        alt={name}
        className="h-20 w-24 rounded object-cover"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/96x80?text=Food'
        }}
      />
      <div className="min-w-[140px] flex-1">
        <h3 className="font-bold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600">₹{unitPrice}</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          className="rounded bg-gray-200 px-2 py-1"
          onClick={() => {
            if (quantity <= 1) {
              dispatch(removeItem(id))
              toast.info('Item removed')
            } else {
              dispatch(updateQuantity({ id, qty: quantity - 1 }))
            }
          }}
        >
          -
        </button>
        <span className="w-6 text-center font-bold">{quantity}</span>
        <button
          className="rounded bg-gray-200 px-2 py-1"
          onClick={() => dispatch(updateQuantity({ id, qty: quantity + 1 }))}
        >
          +
        </button>
      </div>
      <p className="w-20 text-right font-semibold">
        ₹{(unitPrice * quantity).toFixed(0)}
      </p>
      <button
        className="rounded bg-red-100 px-3 py-1 text-sm text-red-700 hover:bg-red-200"
        onClick={() => {
          dispatch(removeItem(id))
          toast.error('Item removed')
        }}
      >
        Remove
      </button>
    </div>
  )
}

const Cart = () => {
  const cart_items = useSelector((store) => store.cart.items)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-orange-50 pb-10">
      <ToastContainer theme="colored" position="top-right" autoClose={1500} />
      <h1 className="pt-6 text-center text-2xl font-bold text-gray-800">
        Your Cart
      </h1>

      {cart_items.length ? (
        <>
          <div className="mx-auto w-11/12 max-w-3xl">
            {cart_items.map((item) => (
              <CartCard key={item.id} info={item} />
            ))}
          </div>
          <div className="mx-auto w-11/12 max-w-md text-center">
            <Billingpage />
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <button
                className="rounded border border-red-400 px-4 py-2 text-red-600 hover:bg-red-50"
                onClick={() => {
                  dispatch(clearCart())
                  toast.error('Cart cleared')
                }}
              >
                Clear Cart
              </button>
              <button
                className="rounded bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
                onClick={() => navigate('/payment')}
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="m-8 text-center">
          <img
            src={Cart_Empty_Img}
            alt="Empty cart"
            className="mx-auto h-48 w-48 object-contain"
          />
          <p className="mt-4 text-lg text-gray-600">
            Cart is empty.{' '}
            <Link to="/home" className="font-bold text-orange-600">
              Go to Home
            </Link>
          </p>
        </div>
      )}
    </div>
  )
}

export default Cart
