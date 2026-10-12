import { useState, useEffect } from 'react'
import { getMockMenu } from './mockData'

export const useMenu = (resId) => {
  const [menuData, setMenuData] = useState(null)

  useEffect(() => {
    // Small delay so shimmer UI is visible during demos
    const timer = setTimeout(() => {
      setMenuData(getMockMenu(resId))
    }, 400)
    return () => clearTimeout(timer)
  }, [resId])

  return menuData
}

export const useOnline = () => {
  const [onlineStatus, setOnlineStatus] = useState(
    typeof navigator !== 'undefined' ? navigator.onLine : true
  )

  useEffect(() => {
    const handleOnline = () => setOnlineStatus(true)
    const handleOffline = () => setOnlineStatus(false)
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)
    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  return onlineStatus
}
