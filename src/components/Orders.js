import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Orders = () => {
  const orders = useSelector((store) => store.orders.list)

  return (
    <div className="min-h-screen bg-orange-50 pb-10">
      <h1 className="pt-6 text-center text-2xl font-bold text-gray-800">
        My Orders
      </h1>

      {!orders.length ? (
        <div className="mt-10 text-center text-gray-600">
          <p>No orders yet.</p>
          <Link to="/home" className="mt-3 inline-block font-semibold text-orange-600">
            Browse restaurants
          </Link>
        </div>
      ) : (
        <div className="mx-auto mt-6 w-11/12 max-w-3xl space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="rounded-lg border border-orange-100 bg-white p-4 shadow-sm"
            >
              <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                <p className="font-semibold text-gray-800">Order #{order.id}</p>
                <span className="rounded bg-green-100 px-2 py-0.5 text-sm text-green-700">
                  {order.status}
                </span>
              </div>
              <p className="mb-3 text-sm text-gray-500">{order.date}</p>
              <ul className="mb-3 space-y-1 text-sm text-gray-700">
                {order.items.map((item) => (
                  <li key={item.id} className="flex justify-between">
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
                  </li>
                ))}
              </ul>
              <p className="text-right font-bold text-gray-800">
                Total Paid: ₹{order.total}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Orders
