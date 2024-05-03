import React, { useEffect } from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import { CartProvider } from "../contexts/cartContext";
const PaymentInfo = () => {
 useEffect(()=>{
    window.scrollTo(0,0)
  
 },[])
return (
    <div>
        <CartProvider>
            <Nav />
        </CartProvider>
        <div className='min-h-[50vh] p-5'>
            <div className='text-center text-4xl mb-5 font-bold'>Payment Options - Razorpay Integration</div>
            <div className=' w-7/12 mx-auto'>
                <ul className='list-disc list-inside '>
                    <li>Secure Payment Processing:</li>
                    <ul className='list-disc list-inside ml-5'>
                        <li>We use Razorpay, a trusted and secure payment gateway, to process all online payments.</li>
                        <li>Your payment information is encrypted and processed securely to ensure the highest level of security for your transactions.</li>
                    </ul>
                    <li>Accepted Payment Methods:</li>
                    <ul className='list-disc list-inside ml-5'>
                        <li>With Razorpay integration, you can pay using various methods including credit/debit cards (Visa, Mastercard, American Express), net banking, UPI, and popular wallets.</li>
                    </ul>
                    <li>Seamless Checkout Experience:</li>
                    <ul className='list-disc list-inside ml-5'>
                        <li>Enjoy a seamless checkout experience with Razorpay's intuitive interface.</li>
                        <li>Simply select Razorpay as your payment method during checkout and follow the prompts to complete your purchase.</li>
                    </ul>
                    <li>Real-Time Payment Confirmation:</li>
                    <ul className='list-disc list-inside ml-5'>
                        <li>Receive instant payment confirmation for your orders.</li>
                        <li>Once your payment is successfully processed through Razorpay, you'll receive a confirmation email with your order details.</li>
                    </ul>
                    <li>Payment Security:</li>
                    <ul className='list-disc list-inside ml-5'>
                        <li>Razorpay complies with the highest security standards to protect your payment information.</li>
                        <li>Your card details and personal data are encrypted and securely transmitted during the payment process.</li>
                    </ul>
                    <li>Refund Policy:</li>
                    <ul className='list-disc list-inside ml-5'>
                        <li>In the event of a refund, the refunded amount will be credited back to the original payment method used through Razorpay.</li>
                        <li>Refunds are processed promptly, but it may take a few business days for the amount to reflect in your account, depending on your bank's processing time.</li>
                    </ul>
                    <li>Customer Support:</li>
                    <ul className='list-disc list-inside ml-5'>
                        <li>If you encounter any issues or have questions regarding your payment through Razorpay, please don't hesitate to contact our customer support team for assistance.</li>
                        <li>We're here to help ensure a smooth and hassle-free payment experience for you.</li>
                    </ul>
                    <li>Note:</li>
                    <ul className='list-disc list-inside ml-5'>
                        <li>Please note that all payments processed through Razorpay are subject to their terms of service and privacy policy.</li>
                        <li>By choosing Razorpay as your payment method, you agree to abide by their terms and conditions.</li>
                    </ul>
                </ul>
            </div>
        </div>
        <Footer />
    </div>
)
}

export default PaymentInfo
