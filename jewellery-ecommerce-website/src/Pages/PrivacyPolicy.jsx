import React from 'react'
import  { useEffect } from 'react'

import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import { CartProvider } from "../contexts/cartContext";
const PrivacyPolicy = () => {
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
                <div className='text-4xl font-bold py-5 mx-auto w-fit'>Privacy Policy</div> 
                <div>
                    <ol className='list-decimal pl-6 flex flex-col gap-4'>
                        <li>
                            Information Collection: We collect personal information like name, email, and address, solely for order processing and communication purposes.
                        </li>
                        <li>
                            Data Usage: Your information is used to fulfill orders, improve our services, and communicate with you about promotions and updates.
                        </li>
                        <li>
                            Data Security: We employ industry-standard security measures to protect your personal information from unauthorized access or disclosure.
                        </li>
                        <li>
                            Third-Party Sharing: We do not sell or share your personal information with third parties except for order fulfillment and legal compliance.
                        </li>
                        <li>
                            Cookies: We use cookies to enhance your browsing experience and gather anonymous data for analytics purposes.
                        </li>
                        <li>
                            Data Retention: We retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy.
                        </li>
                        <li>
                            User Rights: You have the right to access, correct, or delete your personal information at any time by contacting us.
                        </li>
                        <li>
                            Policy Changes: We may update this privacy policy from time to time. Any changes will be communicated to you through our website or email.
                        </li>
                        <li>
                            Consent: By using our website, you consent to the terms of this privacy policy and the collection and use of your personal information as outlined herein.
                        </li>
                    </ol>
                </div>
            </div>
        </div>
        <Footer />
    </div>
)
}

export default PrivacyPolicy
