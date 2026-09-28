import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useMenu } from '../utils/customhooks'
import Shimmer from './Shimmer'
import Restaurantcategory from './Restaurantcategory'
import { CDN_IMG_URL } from '../utils/constants'

const Hotelmenu = () => {
  const { resId } = useParams()
  const [showIndex, setShowIndex] = useState(0)
  const menuData = useMenu(resId)

  if (!menuData) return <Shimmer />

  const { name, cuisines, costForTwoMessage, cloudinaryImageId, categories } =
    menuData

  return (
    <div className="min-h-screen bg-orange-50 pb-10">
      <div className="mx-auto my-6 flex max-w-2xl items-center justify-center gap-4 px-4">
        <img
          src={CDN_IMG_URL + cloudinaryImageId}
          alt={name}
          className="h-24 w-28 rounded-md object-cover"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/112x96?text=Menu'
          }}
        />
        <div>
          <h1 className="text-xl font-bold text-gray-800">{name}</h1>
          <p className="text-sm text-gray-600">{cuisines.join(', ')}</p>
          <p className="text-sm text-gray-500">{costForTwoMessage}</p>
        </div>
      </div>

      {categories.map((category, index) => (
        <Restaurantcategory
          key={category.title}
          category={category}
          show={index === showIndex}
          setShowIndex={() =>
            setShowIndex(index === showIndex ? null : index)
          }
        />
      ))}
    </div>
  )
}

export default Hotelmenu
