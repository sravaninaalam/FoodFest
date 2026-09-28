// Kept for reuse / interview notes. Body now handles category clicks directly.
import React from 'react'

const Displayfood = ({ itemlist, onSelect, selected }) => {
  const { image, label, cuisine, action } = itemlist
  const name = label || action?.text

  return (
    <button
      type="button"
      onClick={() => onSelect?.(cuisine || name)}
      className={`min-w-[100px] rounded-lg p-2 text-center ${
        selected ? 'bg-orange-200 ring-2 ring-orange-500' : 'hover:bg-orange-100'
      }`}
    >
      <img
        src={image}
        alt={name}
        className="mx-auto h-20 w-20 rounded-full object-cover"
      />
      <p className="mt-1 text-sm font-medium">{name}</p>
    </button>
  )
}

export default Displayfood
