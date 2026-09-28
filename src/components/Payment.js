import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearCart } from '../redux/cartSlice'
import { addOrder } from '../redux/orderSlice'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Payment = () => {
  const cartItems = useSelector((store) => store.cart.items)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  })
  const [paying, setPaying] = useState(false)

  const total = useMemo(
    () =>
      cartItems.reduce(
        (acc, curr) =>
          acc + ((curr.price || curr.defaultPrice) / 100) * curr.quantity,
        0
      ),
    [cartItems]
  )

  if (!cartItems.length) {
    return (
      <div className="min-h-screen bg-orange-50 py-16 text-center">
        <p className="text-lg text-gray-600">No items to pay for.</p>
        <button
          className="mt-4 rounded bg-orange-500 px-4 py-2 text-white"
          onClick={() => navigate('/home')}
        >
          Go Home
        </button>
      </div>
    )
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handlePay = (e) => {
    e.preventDefault()

    if (!form.name.trim() || form.cardNumber.length < 12 || !form.expiry || form.cvv.length < 3) {
      toast.error('Please fill valid payment details')
      return
    }

    setPaying(true)

    setTimeout(() => {
      const order = {
        id: 'ORD' + Date.now(),
        date: new Date().toLocaleString(),
        items: cartItems.map((item) => ({ ...item })),
        total: Number(total.toFixed(0)),
        paymentMethod: 'Card',
        status: 'Paid',
      }

      dispatch(addOrder(order))
      dispatch(clearCart())
      toast.success('Payment successful!')
      setPaying(false)
      navigate('/orders')
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-orange-50 pb-10">
      <ToastContainer theme="colored" position="top-right" autoClose={1500} />
      <h1 className="pt-6 text-center text-2xl font-bold text-gray-800">
        Payment
      </h1>

      <div className="mx-auto mt-6 grid w-11/12 max-w-4xl gap-6 md:grid-cols-2">
        <div className="rounded-lg bg-white p-5 shadow-sm">
          <h2 className="mb-3 font-semibold text-gray-800">Order Summary</h2>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="mb-2 flex justify-between text-sm text-gray-700"
            >
              <span>
                {item.name} x {item.quantity}
              </span>
              <span>
                ₹
                {(
                  ((item.price || item.defaultPrice) / 100) *
                  item.quantity
                ).toFixed(0)}
              </span>
            </div>
          ))}
          <hr className="my-3" />
          <p className="text-right text-lg font-bold">
            Total: ₹{total.toFixed(0)}
          </p>
        </div>

        <form
          onSubmit={handlePay}
          className="rounded-lg bg-white p-5 shadow-sm"
        >
          <h2 className="mb-3 font-semibold text-gray-800">Card Details</h2>
          <label className="mb-1 block text-sm">Name on card</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="mb-3 w-full rounded border border-gray-300 px-3 py-2 outline-none focus:border-orange-400"
            placeholder="John Doe"
          />

          <label className="mb-1 block text-sm">Card number</label>
          <input
            name="cardNumber"
            value={form.cardNumber}
            onChange={handleChange}
            maxLength={16}
            className="mb-3 w-full rounded border border-gray-300 px-3 py-2 outline-none focus:border-orange-400"
            placeholder="1234567890123456"
          />

          <div className="mb-4 flex gap-3">
            <div className="flex-1">
              <label className="mb-1 block text-sm">Expiry</label>
              <input
                name="expiry"
                value={form.expiry}
                onChange={handleChange}
                placeholder="MM/YY"
                className="w-full rounded border border-gray-300 px-3 py-2 outline-none focus:border-orange-400"
              />
            </div>
            <div className="w-28">
              <label className="mb-1 block text-sm">CVV</label>
              <input
                name="cvv"
                value={form.cvv}
                onChange={handleChange}
                maxLength={4}
                type="password"
                className="w-full rounded border border-gray-300 px-3 py-2 outline-none focus:border-orange-400"
                placeholder="123"
              />
            </div>
          </div>

          <p className="mb-3 text-xs text-gray-500">
            Demo payment only — no real charge is made.
          </p>

          <button
            type="submit"
            disabled={paying}
            className="w-full rounded bg-green-600 py-2 font-medium text-white hover:bg-green-700 disabled:opacity-60"
          >
            {paying ? 'Processing...' : `Pay ₹${total.toFixed(0)}`}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Payment
