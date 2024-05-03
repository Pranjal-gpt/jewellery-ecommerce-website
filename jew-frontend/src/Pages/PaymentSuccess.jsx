import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import { CartProvider } from "../contexts/cartContext";
import { useState } from 'react';
import { useSearchParams,Link } from "react-router-dom"
const PaymentSuccess = () => {
    const seachQuery = useSearchParams()[0]
    const referenceNum = seachQuery.get("reference")
  return (
    <div>
      <CartProvider>
        <Nav />
      </CartProvider>
      <div className='min-h-[70vh] flex gap-5 flex-col items-center justify-center'>
        <h1 className='text-4xl font-bold'>Order Succesfull</h1>
        <div>
          Refference Number: <span className='font-semibold'>{referenceNum}</span> 
        </div>
        <Link to={"/orders"} className='p-2 bg-orange-100 rounded-xl  hover:bg-orange-50'>Check Your Orders</Link>
      </div>
      <Footer />
    </div>
  )
}

export default PaymentSuccess