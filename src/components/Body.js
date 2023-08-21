import {useEffect,useState} from 'react'
import { HOME_API } from '../utils/constants'
import Rescard from './Rescard'
import Shimmer from './Shimmer'
import { searchFunc } from '../utils/helper'
import { Link } from 'react-router-dom'

const Body = () => {
     const[resData,setResData]=useState([])
     const[clonedata,setClonedata]=useState([])
     const[searchip,setSearchIp]=useState('')

     useEffect(()=>{
        getHotelData()
     },[])
   const getHotelData=async()=>{
        const data=await fetch(HOME_API)
        const json=await data.json()
        // console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0])
        setResData(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setClonedata(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
       
   }
  return !clonedata?<Shimmer/>:(
  <>
    <div>
      <div className='w-6/12 mx-auto my-4'>
            <form onSubmit={(e)=>e.preventDefault()} className=''>
                    <input type='text' placeholder="search Restaurants" className='border border-black w-1/2 ml-4 rounded-l-full p-2'
                    value={searchip} onChange={(e)=>setSearchIp(e.target.value)}/>

                    <button type='submit' data-testid='search' className='bg-gray-100 py-2 px-5 border border-black rounded-r-full'
                    onClick={()=>{const res=searchFunc(searchip,clonedata)
                    setResData(res)}}>🔍</button>
                    
                    <button className='bg-red-200 p-2 ml-32 rounded-lg'
                    onClick={()=>{const filtered=clonedata.filter(i=>i?.info?.avgRating>4)
                    setResData(filtered)}}>Toprated</button>
            </form>
      </div>
      <div className='w-11/12 mx-auto flex flex-wrap'>
           {resData.map(restaurant=>
           <Link to={'/hotelmenu/'+restaurant?.info?.id} key={restaurant?.info?.id}><Rescard reslist={restaurant?.info}/></Link>
            )}
      </div>

    </div>
  </>
  )
}

export default Body
