import React from 'react'
import  { useEffect } from 'react'

import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import { CartProvider } from "../contexts/cartContext";
const FAQ = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
      
     },[])
return (
    <div>
        <CartProvider>
            <Nav />
        </CartProvider>
        <div className='min-h-[50vh]'>
            <div className='w-7/12 mx-auto'>
                <div className='text-4xl font-bold py-5 mx-auto w-fit'>FAQ</div> 
                <div>
                    <ol className='list-decimal pl-6 flex flex-col gap-4'>
                        <li><strong>How can I place an order?</strong><br />
                            To place an order, simply browse our collection, select the items you wish to purchase, add them to your cart, and proceed to checkout. Follow the prompts to enter your shipping and payment information to complete your order.</li>
                        <li><strong>What payment methods do you accept?</strong><br />
                            We accept various payment methods, including credit/debit cards (Visa, Mastercard, American Express), PayPal, and other secure online payment gateways.</li>
                        <li><strong>What is your shipping policy?</strong><br />
                            We offer standard and expedited shipping options. Shipping rates and delivery times vary depending on your location and the shipping method selected. For more details, please refer to our Shipping Policy page.</li>
                        <li><strong>Do you offer international shipping?</strong><br />
                            Yes, we offer international shipping to most countries. Shipping rates and delivery times for international orders may vary. Please note that additional customs duties or taxes may apply, depending on your country's regulations.</li>
                        <li><strong>How can I track my order?</strong><br />
                            Once your order has been shipped, you will receive a confirmation email with tracking information. You can use this information to track the status of your order online through the shipping carrier's website.</li>
                        <li><strong>Do you offer customization or bespoke jewelry services?</strong><br />
                            At this time, we do not offer customization or bespoke jewelry services. However, we are continuously expanding our product offerings, so please check back regularly for updates.</li>
                        <li><strong>How can I contact customer support?</strong><br />
                            If you have any questions, concerns, or need assistance with your order, our customer support team is here to help. You can reach us via email at pranjalgupta21088@gmail.com or through the contact form on our website.</li>
                    </ol>
                </div>
            </div>
        </div>
        <Footer />
    </div>
)
}

export default FAQ
