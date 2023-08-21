import { useState,useEffect } from "react"
import {HTL_MENU} from './constants'
export const useMenu = (resId) => {
    const[menuData,setMenuData]=useState(null)
    useEffect(()=>{
        getMenuData()
    },[])
    async function getMenuData(){
        const data=await fetch(HTL_MENU+resId)
        const json=await data.json()
        // console.log(json.data)
      setMenuData(json?.data)
    }
  return menuData
}


export const useOnline=()=>{

  const[onlinestatus,setOnlineStatus]=useState(true)
  const handleOnline=()=>setOnlineStatus(true)
  const handleOffline=()=>setOnlineStatus(false)
  useEffect(()=>{
      window.addEventListener("online",handleOnline)
      window.addEventListener("offline",handleOffline)
      return()=>{
        window.removeEventListener("online",handleOnline)
        window.removeEventListener("offline",handleOffline)
      }
  },[])
  return onlinestatus
}
