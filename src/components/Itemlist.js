import { CDN_IMG_URL } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/cartSlice'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Itemslist({ items }) {
  const dispatch = useDispatch()

  const handleAddItem = (item) => {
    const { name, id, imageId, price, defaultPrice, description } =
      item?.card?.info
    dispatch(
      addItem({
        id,
        name,
        imageId,
        price,
        defaultPrice,
        description,
        quantity: 1,
      })
    )
    toast.success(name + ' added to cart')
  }

  return (
    <>
      <ToastContainer theme="colored" position="top-right" autoClose={1500} />
      <div>
        {items.map((item) => (
          <div
            data-testid="items-list"
            key={item?.card?.info?.id}
            className="m-2 flex justify-between border-b border-gray-200 p-2"
          >
            <div className="w-9/12 text-left">
              <h5 className="font-medium text-gray-800">
                {item?.card?.info?.name}
              </h5>
              <p className="text-sm">
                ₹
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </p>
              <p className="my-2 text-xs text-gray-500">
                {item?.card?.info?.description}
              </p>
            </div>
            <div className="flex w-3/12 flex-col items-center">
              <img
                src={CDN_IMG_URL + item.card.info.imageId}
                alt={item?.card?.info?.name}
                className="h-20 w-24 rounded object-cover"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/96x80?text=Food'
                }}
              />
              <button
                className="mt-2 rounded bg-green-600 px-3 py-1 text-sm text-white hover:bg-green-700"
                onClick={() => handleAddItem(item)}
              >
                ADD +
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Itemslist
