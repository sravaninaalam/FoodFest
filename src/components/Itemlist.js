import { CDN_IMG_URL } from "../utils/constants"
import {useDispatch} from 'react-redux'
import {addItem} from '../redux/cartSlice'
function Itemslist({items}){
  const dispatch=useDispatch()
    return(
       <>
        <div>
            {items.map(item=>
            <div data-testid="items-list" key={item?.card?.info?.id} className=" border-gray-200 border-b-2 m-2 p-2 flex justify-between">
              <div className="text-left w-9/12">
                  <h5 className="font-medium">{item?.card?.info?.name}</h5>
                    <h3>₹{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</h3>
                    <h6 className="text-xs text-gray-600 my-3">{item?.card?.info?.description}</h6>
              </div>
                <div className="w-3/12">
                 <img src={CDN_IMG_URL+item.card.info.imageId} alt={item?.card?.info?.name} />
                 <button className="text-green-800 p-2 shadow-lg rounded-sm"
                 onClick={()=>dispatch(addItem(item?.card?.info))}>ADD+</button>

                </div>
               
            </div>)}
        </div>
       </>
    )
}
export default Itemslist