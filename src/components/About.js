import React, { useState } from 'react'
import Userclass from './Userclass'

function Section({title,description,visible,setShow,hide}){
  return(
    <>
        <div className=' my-4 p-2 mx-10 border border-black bg-lime-50'>
         <h2 className="font-bold">{title}</h2>
         {visible ?
              <div>
                    <button onClick={()=>hide()}>HIDE</button>
                    <p>{description}</p>
              </div>
            :
            <button onClick={()=>setShow()} >SHOW</button>
          }
        </div>
    </>
  )
}

function About(){     
  const[show,setShow]=useState()  
  
    return(
      <>
         <div className='mt-5 mx-10'>
          <Section title="Developed By" visible={show==='developed'} setShow={()=>setShow('developed')} hide={()=>setShow(null)}
          description=
             {<Userclass name={"sravani"} location={"Vizianagaram, Andhrapradesh , India"} mail={"nalamsravani2016@gmail.com"}/>}
             />
             <Section title="Tech Stack" visible={show==='details'} setShow={()=>setShow('details')} hide={()=>setShow(null)}
              description={
              <ul className='mx-8 my-3 list-disc'>
                <li><span className='font-bold'>React: </span> The heart and soul of our app, ensuring dynamic and responsive user interfaces.</li>
                <li><span className='font-bold'>Parcel: </span> A blazing-fast web application bundler, keeping our app performant.</li>
                <li><span className='font-bold'>Tailwind CSS :</span> Making our UI sleek, stylish, and customizable</li>
                <li><span className='font-bold'>Redux Toolkit: </span> For state management that's both efficient and developer-friendly.</li>
                <li>For effortless navigation <span className='font-bold'>React Router</span> is used which enables Client side routing</li>
              </ul>
             }/>
             <Section title="Features" visible={show==='feature'} setShow={()=>setShow('feature')} hide={()=>setShow(null)}
             description={
              <ul  className='mx-8 my-3 list-disc'>
                 <li> Explore Delicious Menus offered by Top Restaurants</li>
                 <li>Swiggy's Live Api data</li>
                 <li> Effortless Ordering</li>
                 <li>Dazzling Shimmer UI</li>
                 <li>Search Restaurants</li>
                 <li> Error Handling - 404 Page</li>
                 <li> Fully Responsive</li>
              </ul>
             }/>
         </div>
      </>
    )
  
}

export default About


