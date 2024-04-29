import React, { useEffect } from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import { CartProvider } from "../contexts/cartContext";
const Offers = () => {
 useEffect(()=>{
    window.scrollTo(0,0)
  
 },[])
  return (
    <div>
      <CartProvider>
        <Nav />
      </CartProvider>
      <div className='min-h-[50vh] p-5'>
        <div className='text-center text-4xl mb-5 font-bold'>Offers</div>
        <div className=' w-7/12 mx-auto'>
        <ol className='list-decimal pl-6 flex flex-col gap-4'>
            <li>
                <strong>Welcome500</strong><br />
                Use coupon code Welcome500 to get ₹500 off on purchases above ₹3000.
            </li>
            {/* <li>
                <strong>SummerSale10</strong><br />
                Use coupon code SummerSale10 to get 10% off on all summer collection items.
            </li> */}
            <li>
                <strong>FreeShipping</strong><br />
                We provide free shipping on all orders.
            </li>
        </ol>
                    
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default Offers
