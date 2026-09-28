import React from 'react'
import { CDN_IMG_URL } from '../utils/constants'

const Rescard = ({ reslist }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = reslist

  return (
    <div
      data-testid="rescard"
      className="m-4 w-64 rounded-lg border border-orange-100 bg-white p-3 shadow-sm transition hover:shadow-md"
    >
      <img
        src={CDN_IMG_URL + cloudinaryImageId}
        alt={name}
        className="h-40 w-full rounded-md object-cover"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/256x160?text=Restaurant'
        }}
      />
      <h3 className="mt-2 truncate font-bold text-gray-800">{name}</h3>
      <p className="truncate text-sm text-gray-500">{cuisines.join(', ')}</p>
      <div className="mt-2 flex items-center justify-between text-sm">
        <span
          className={`rounded px-2 py-0.5 font-medium text-white ${
            avgRating > 4 ? 'bg-green-600' : 'bg-orange-500'
          }`}
        >
          ★ {avgRating}
        </span>
        <span className="text-gray-600">{costForTwo}</span>
      </div>
    </div>
  )
}

export default Rescard
