const Shimmer = () => {
    return (
      
      <div className=' ml-4   flex flex-wrap'>
        {Array(20).fill("").map((e,index)=><div key={index} className='w-72 h-52 rounded-md bg-gray-200 m-4'></div>)}
      </div>
      
    )
  }
  
  export default Shimmer
  