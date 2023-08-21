import React, { useEffect, useState } from 'react'
import  ReactDOM  from 'react-dom/client'
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'
import {Outlet, createBrowserRouter,RouterProvider} from 'react-router-dom'

import About from './components/About'
import Hotelmenu from './components/Hotelmenu'
import Login from './components/Login'
import Signup from './components/Signup'
import Cart from './components/Cart'
import {Provider} from 'react-redux'
import store from './redux/store'
import userContext from './utils/userContext'
const App = () => {
  const[name,setName]=useState('')
  
  return (
    <>
    <Provider store={store}>
     <userContext.Provider value={{logUserName:name,setName}}>
          <Header/>
      
        <Outlet/>
        <Footer/>
        </userContext.Provider>
    </Provider>
    </>
  )
}

const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path:'/home',
        element:<Body/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/hotelmenu/:resId',
        element:<Hotelmenu/>
      },
      {
        path:'/cart',
        element:<Cart/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/signup',
        element:<Signup/>
      }
    ]
  }
])

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>)