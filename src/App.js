import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About'
import Hotelmenu from './components/Hotelmenu'
import Login from './components/Login'
import Signup from './components/Signup'
import Cart from './components/Cart'
import Payment from './components/Payment'
import Orders from './components/Orders'
import { Provider } from 'react-redux'
import store from './redux/store'
import userContext from './utils/userContext'

const App = () => {
  const [name, setName] = useState('')

  useEffect(() => {
    const saved = localStorage.getItem('foodfest_user')
    if (saved) setName(saved)
  }, [])

  return (
    <Provider store={store}>
      <userContext.Provider value={{ logUserName: name, setName }}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </div>
      </userContext.Provider>
    </Provider>
  )
}

const ErrorPage = () => (
  <div className="py-20 text-center">
    <h1 className="text-2xl font-bold text-red-600">404 - Page Not Found</h1>
    <p className="mt-2 text-gray-600">The page you are looking for does not exist.</p>
  </div>
)

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Body /> },
      { path: '/home', element: <Body /> },
      { path: '/about', element: <About /> },
      { path: '/hotelmenu/:resId', element: <Hotelmenu /> },
      { path: '/cart', element: <Cart /> },
      { path: '/payment', element: <Payment /> },
      { path: '/orders', element: <Orders /> },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <Signup /> },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)
