import React, { useEffect } from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import { CartProvider } from "../contexts/cartContext";

const DeliveryInfo = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <CartProvider>
                <Nav />
            </CartProvider>
            <div className='min-h-[50vh] p-5'>
                <div className='text-center text-4xl mb-5 font-bold'>Delivery Info</div>
                <div className='w-1/2 mx-auto'>
                    <ul className='list-disc list-inside'>
                        <li className='font-bold'>Shipping Options:</li>
                        <ul>
                            <li>We offer standard and expedited shipping options.</li>
                            <li>Standard shipping typically takes 5 days, while expedited shipping ensures delivery within 13 days.</li>
                        </ul>
                        <li className='font-bold'>Shipping Rates:</li>
                        <ul>
                            <li>Rates vary based on the shipping method and your location.</li>
                            <li>View rates during checkout before finalizing your purchase.</li>
                        </ul>
                        <li className='font-bold'>Order Processing Time:</li>
                        <ul>
                            <li>Orders are processed within 3 business days.</li>
                            <li>Processing times may vary during peak seasons.</li>
                        </ul>
                        <li className='font-bold'>Tracking Your Order:</li>
                        <ul>
                            <li>Receive a tracking number once your order ships.</li>
                            <li>Track your order on our website or the carrier's site.</li>
                        </ul>
                        <li className='font-bold'>Delivery Address:</li>
                        <ul>
                            <li>Provide an accurate shipping address during checkout.</li>
                            <li>Ensure completeness to avoid delivery issues.</li>
                        </ul>
                        <li className='font-bold'>Delivery Confirmation:</li>
                        <ul>
                            <li>Receive a confirmation email upon successful delivery.</li>
                            <li>Contact us with any delivery concerns.</li>
                        </ul>
                        <li className='font-bold'>Delivery Restrictions:</li>
                        <ul>
                            <li>We don't ship internationally.</li>
                            <li>No delivery to P.O. boxes or APO/FPO addresses.</li>
                        </ul>
                        <li className='font-bold'>Signature Requirement:</li>
                        <ul>
                            <li>Some orders may require a signature.</li>
                            <li>Follow carrier instructions for missed deliveries.</li>
                        </ul>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default DeliveryInfo
