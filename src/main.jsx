import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import Shop from './components/Shop/Shop'
import Order from './components/Order/Order'
import Inventroy from './components/Inventory/Inventroy'
import Login from './components/Login/Login'
import cartProductsLoader from './components/cartProductsLoader/cartProductsLoader'
import Checkout from './components/Checkout/Checkout'
import SignUp from './components/SignUp/SignUp'
import AuthProvider from './components/providers/AuthProvider'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/',
        element: <Shop />
      },
      {
        path: 'order',
        element: <Order />,
        loader: cartProductsLoader,

      },
      {
        path: 'inventory',
        element: <Inventroy />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <SignUp />
      },
      {
        path: 'checkout',
        element: <Checkout />
      },


    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>

      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
