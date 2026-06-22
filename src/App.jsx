import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Pages/Home'
import ProductDetails from './Pages/ProductDetails'
import Loginpage from './Pages/Loginpage'
import ProtectRoutes from './Components/ProtectRoutes'
import MyCart from './Pages/MyCart'
import CheckoutPage from './Pages/CheckoutPage'
import PaymentPage from './Pages/PaymentPage'
import OrderSuccess from './Pages/OrderSuccess'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
    <ToastContainer position="top-right" autoClose={2000} />
     <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Loginpage setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route
        path="/products/:id"
        element={
          <ProtectRoutes isLoggedIn={isLoggedIn}>
            <ProductDetails/>
          </ProtectRoutes>
        }
      />
      <Route
        path="/cart"
        element={
          <ProtectRoutes isLoggedIn={isLoggedIn}>
            <MyCart/>
          </ProtectRoutes>
        }
      />
      <Route
        path="/checkout"
        element={
          <ProtectRoutes isLoggedIn={isLoggedIn}>
            <CheckoutPage/>
          </ProtectRoutes>
        }
      />
      <Route
        path="/payment"
        element={
          <ProtectRoutes isLoggedIn={isLoggedIn}>
            <PaymentPage/>
          </ProtectRoutes>
        }
      />
      <Route path="/order-success" element={<OrderSuccess/>}/>
     </Routes>

    </>   
  )
}
