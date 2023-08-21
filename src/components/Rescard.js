import React from 'react'
import { CDN_IMG_URL,Yellow_Rating_Img,Green_Rating_Img } from '../utils/constants'

const Rescard = ({reslist}) => {
    const{cloudinaryImageId,name,cuisines,avgRating, costForTwo}=reslist
  return (
   <>
        <div  data-testid='rescard' 
        className="bg-gray-100 rounded-lg m-4 p-1 w-64 ml-6 hover:bg-gray-200 outline outline-blue-200" >

           <img src={CDN_IMG_URL+cloudinaryImageId} alt={name} className='p-2 rounded-2xl'/>
           <h3 className="font-bold">{name}</h3>
            <h4 className="truncate">{cuisines.join(',')}</h4>

                <div className='flex m-1 p-1'>
                    {avgRating>4?<h4 className="w-5 h-5  flex">
                    <img src={Green_Rating_Img} className="rounded-lg"/><span>{avgRating}</span>
                    </h4>:<h4 className="w-6 h-6  flex">
                        <img className="rounded-lg" src={Yellow_Rating_Img}/>
                        {avgRating}</h4>}
                    <h4 className="ml-28">{costForTwo}</h4>
                </div>
        </div>

   </>
  )
}

export default Rescard
