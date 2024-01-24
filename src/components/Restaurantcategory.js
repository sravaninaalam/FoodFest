import Itemslist from "./Itemlist"
const Restaurantcategory = ({category,show,setShowIndex}) => {
  
    return(
        <div className="bg-slate-50 shadow-lg my-5 w-6/12 mx-auto p-4">
          <div className="flex justify-between" onClick={()=>setShowIndex()}>
                <span className="font-bold"> {category.title} ({category.itemCards.length})</span>
                <span>🔽</span>
          </div>
          <div >
      { show && <Itemslist items={category.itemCards}/>}
          </div>
        </div>
    )
   
}

export default Restaurantcategory
