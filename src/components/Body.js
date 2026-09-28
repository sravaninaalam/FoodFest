import { useEffect, useRef, useState } from 'react'
import Rescard from './Rescard'
import Shimmer from './Shimmer'
import { searchFunc } from '../utils/helper'
import { Link } from 'react-router-dom'
import { useOnline } from '../utils/customhooks'
import { mockRestaurants, mockCategories } from '../utils/mockData'

const Body = () => {
  const [resData, setResData] = useState([])
  const [clonedata, setClonedata] = useState([])
  const [searchip, setSearchIp] = useState('')
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeCuisine, setActiveCuisine] = useState(null)
  const listRef = useRef(null)

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setResData(mockRestaurants)
  //     setClonedata(mockRestaurants)
  //     setItems(mockCategories)
  //     setLoading(false)
  //   }, 500)
  //   return () => clearTimeout(timer)
  // }, [])
useEffect(()=>{
  async function fetchData() {
    let res=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9522009&lng=77.7002645&page_type=DESKTOP_WEB_LISTING")
     const json=await res.json()
    //  console.log(json?.data)
  // console.log('data after fetching',json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
     setResData(mockRestaurants)
       setClonedata(mockRestaurants)
       setItems(mockCategories)
      setLoading(false)
  }
  fetchData()
})


  const applyFilters = (cuisine, searchText = searchip) => {
    let list = [...clonedata]

    if (cuisine) {
      list = list.filter((res) =>
        res?.info?.cuisines?.some(
          (c) => c.toLowerCase() === cuisine.toLowerCase()
        )
      )
    }

    if (searchText.trim()) {
      list = searchFunc(searchText, list)
    }

    setResData(list)
  }

  const handleCategoryClick = (cuisine) => {
    const next = activeCuisine === cuisine ? null : cuisine
    setActiveCuisine(next)
    applyFilters(next, searchip)
    listRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const clearCategory = () => {
    setActiveCuisine(null)
    applyFilters(null, searchip)
  }

  const isonline = useOnline()
  if (!isonline) {
    return (
      <h1 className="m-8 text-center text-xl font-semibold text-red-600">
        You are offline. Check your internet connection.
      </h1>
    )
  }

  if (loading) return <Shimmer />

  return (
    <div className="min-h-screen bg-orange-50 pb-10">
      <div className="mx-auto w-11/12 max-w-5xl py-6">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-wrap items-center gap-3"
        >
          <input
            type="text"
            placeholder="Search restaurants"
            className="flex-1 rounded border border-gray-300 px-3 py-2 outline-none focus:border-orange-400"
            value={searchip}
            onChange={(e) => setSearchIp(e.target.value)}
          />
          <button
            type="submit"
            data-testid="search"
            className="rounded bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
            onClick={() => applyFilters(activeCuisine, searchip)}
          >
            Search
          </button>
          <button
            type="button"
            className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
            onClick={() => {
              setActiveCuisine(null)
              setResData(clonedata.filter((i) => i?.info?.avgRating > 4))
            }}
          >
            Top Rated
          </button>
        </form>
      </div>

      <div className="mx-auto w-11/12 max-w-5xl">
        <h2 className="mb-3 text-xl font-bold text-gray-800">
          What&apos;s on your mind?
        </h2>
        <div className="mb-4 flex gap-4 overflow-x-auto pb-2">
          {items.map((item) => {
            const selected = activeCuisine === item.cuisine
            return (
              <button
                type="button"
                key={item.id}
                onClick={() => handleCategoryClick(item.cuisine)}
                className={`min-w-[100px] rounded-lg p-2 text-center transition ${
                  selected
                    ? 'bg-orange-200 ring-2 ring-orange-500'
                    : 'hover:bg-orange-100'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.label}
                  className="mx-auto h-20 w-20 rounded-full object-cover"
                  onError={(e) => {
                    e.target.src =
                      'https://via.placeholder.com/80?text=' +
                      encodeURIComponent(item.label)
                  }}
                />
                <p className="mt-1 text-sm font-medium text-gray-800">
                  {item.label}
                </p>
              </button>
            )
          })}
        </div>

        {activeCuisine && (
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <p className="text-gray-700">
              Showing restaurants for{' '}
              <span className="font-semibold text-orange-600">
                {activeCuisine}
              </span>
            </p>
            <button
              type="button"
              onClick={clearCategory}
              className="rounded border border-orange-400 px-3 py-1 text-sm text-orange-600 hover:bg-orange-100"
            >
              Clear filter
            </button>
          </div>
        )}
      </div>

      <div
        ref={listRef}
        className="mx-auto flex w-11/12 max-w-6xl flex-wrap justify-center"
      >
        {/* {resData.length === 0 ? ( */}
        {!resData?(
          <p className="py-10 text-lg text-gray-600">
            No restaurants found
            {activeCuisine ? ` for ${activeCuisine}` : ''}.
          </p>
        ) : (
          resData.map((restaurant) => (
            <Link
              to={'/hotelmenu/' + restaurant?.info?.id}
              key={restaurant?.info?.id}
            >
              <Rescard reslist={restaurant?.info} />
            </Link>
          ))
        )}
      </div>
    </div>
  )
}

export default Body
