import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import { CartProvider } from "../contexts/cartContext";
import { useState } from 'react';
import axios from 'axios';
const About = () => {
  const handlecheckout = async (amount) => {
    const {data:{key}} = await axios.get('http://localhost:3000/api/payment/getkey')
    const {data:{order}} = await axios.post('http://localhost:3000/api/payment/checkout', {
      amount
    })
    console.log(order,key)
    const options = {
      key:key,
      amount: order.amount,
      currency: "INR",
      name: "Elegance Jewellery",
      description: "Jewelleries just for you",
      image: "http://localhost:5173/src/assets/elegence.png",
      order_id: order.id,
      callback_url: "http://localhost:3000/api/payment/paymentverification",
      prefill: {
          name: "Pranjal Gupta",
          email: "pranjalgupta@gmail.com",
          contact: "9999999999"
      },
      notes: {
          "address": "SCSIT Indore"
      },
      theme: {
          "color": "#FED7AA"
      }
  };
  console.log(options.key)
  const razor = new window.Razorpay(options);
  razor.open()
  }
  return (
    <div>
      <CartProvider>
        <Nav />
      </CartProvider>
      <div className='min-h-[50vh]'>
        <div>
          <img width={200} src="https://source.unsplash.com/random" alt="Random Image" />
          <div>500</div>
          <div onClick={()=>handlecheckout(600)}>buy</div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
