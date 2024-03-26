import {useState} from 'react'
import {useParams} from 'react-router-dom'
import { useMenu } from '../utils/customhooks'
import Shimmer from './Shimmer'
import Restaurantcategory from './Restaurantcategory'
import { CDN_IMG_URL } from '../utils/constants'
const Hotelmenu = () => {
  const {resId}=useParams()
 const[showIndex,setShowIndex]=useState()
   const menuData=useMenu(resId)
   if(!menuData){
    return <Shimmer/>
   }

  const {name,cuisines,costForTwoMessage,cloudinaryImageId}=menuData?.cards[2]?.card.card.info
   const category= menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.
       filter(c=>c.card?.card?.["@type"]==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')
  
       return (
   <>
       <div className="text-center my-5">
                <div className='flex justify-center'>
                  <img src={CDN_IMG_URL+cloudinaryImageId} alt={name} className='h-28 w-32 rounded-md '/>
                  <div className='ml-7'>
                    <h1 className="font-bold text-xl">{name}</h1>  
                    <h3>{cuisines.join(',')}</h3> 
                    <h4>{costForTwoMessage}</h4>
                    </div>
                </div>
                    {category.map((category,index)=><Restaurantcategory key={category.card.card.title} 
                    category={category?.card?.card} show={index===showIndex?true:false}
                    setShowIndex={index===showIndex?()=>setShowIndex():()=>setShowIndex(index)}  />)}
            </div> 
   </>
  )
}

export default Hotelmenu
