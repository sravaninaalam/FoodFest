import React from 'react'
import { CDN_IMG_URL } from '../utils/constants'


const Displayfood = ({itemlist}) => {
    const{imageId,action}=itemlist
    

  return (
    <>  
        <div className='pl-8' onClick={()=>alert(action?.text)}>  
          <img src={CDN_IMG_URL+imageId} className='w-32 shadow-md'/>
            <h3 className='font-semibold italic p-2'>{action?.text}</h3>
        </div>
       
    </>
  )
}

export default Displayfood