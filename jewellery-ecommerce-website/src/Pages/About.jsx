import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import { CartProvider } from "../contexts/cartContext";

const About = () => {
  return (
    <div>
      <CartProvider>
        <Nav />
      </CartProvider>
      <div className='min-h-[50vh]'>
        abotut
      </div>
      <Footer />
    </div>
  )
}

export default About
