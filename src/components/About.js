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
             {<Userclass name={"sravani"} location={"Vizianagaram,Andhrapradesh,India"} mail={"nalamsravani2016@gmail.com"}/>}
             />
             <Section title="Tech Stack" visible={show==='details'} setShow={()=>setShow('details')} hide={()=>setShow(null)}
              description={
              <ul className='mx-8 my-3 list-disc'>
                <li>This application is developed using <span className='font-bold'>React</span></li>
                <li>Here I used <span className='font-bold'>Parcel</span> to bundle things</li>
                <li>The application is created using functional components,inbuilt hooks,custom hooks </li>
                <li>The data is fetched from <span className='font-bold'>Swiggy's live Api</span></li>
                <li>created inbuilt<span className='font-bold'>Shimmer Ui</span>to make the user friendly UI</li>
                <li>To make application Look more beautiful <span className='font-bold'>Tailwind css</span>is used</li>
                <li>To manage application state globally <span className='font-bold'>React Redux</span>is used</li>
                <li>To navigate through pages<span className='font-bold'>React Router</span>is used which enables Client side routing</li>
              </ul>
             }/>
         </div>
      </>
    )
  
}

export default About


