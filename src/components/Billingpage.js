import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'

function Billingpage() {
  const cart_data = useSelector((store) => store.cart.items)

  const total = useMemo(
    () =>
      cart_data.reduce(
        (acc, curr) =>
          acc + ((curr.price || curr.defaultPrice) / 100) * curr.quantity,
        0
      ),
    [cart_data]
  )

  return (
    <div className="my-5 rounded-lg border border-orange-200 bg-white p-4">
      <h2 className="text-center text-lg font-bold text-gray-800">
        Total: ₹{total.toFixed(0)}
      </h2>
    </div>
  )
}

export default Billingpage
