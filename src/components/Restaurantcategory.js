import Itemslist from './Itemlist'

const Restaurantcategory = ({ category, show, setShowIndex }) => {
  return (
    <div className="mx-auto my-4 w-11/12 max-w-2xl rounded-lg bg-white p-4 shadow-sm">
      <button
        type="button"
        className="flex w-full items-center justify-between text-left"
        onClick={setShowIndex}
      >
        <span className="font-bold text-gray-800">
          {category.title} ({category.itemCards.length})
        </span>
        <span>{show ? '▲' : '▼'}</span>
      </button>
      {show && <Itemslist items={category.itemCards} />}
    </div>
  )
}

export default Restaurantcategory
