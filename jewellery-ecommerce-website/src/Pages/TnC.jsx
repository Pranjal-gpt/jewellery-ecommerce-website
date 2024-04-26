import React from 'react'
import  { useEffect } from 'react'

import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import { CartProvider } from "../contexts/cartContext";
const TnC = () => {
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
        <div className='text-4xl font-bold py-5 mx-auto w-fit'>Terms and Conditions</div> 

<span className='font-semibold text-xl'>Welcome to Elegance Jewellery</span>!<br />
 These terms and conditions outline the rules and regulations for the use of our website.

By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use  <span className='font-semibold'>Elegance Jewellery</span>! if you do not accept all of the terms and conditions stated on this page.
<br /><br />
The following terminology applies to these Terms and Conditions:

"Customer," "You," and "Your" refer to you, the person accessing this website and accepting the Company's terms and conditions.
"The Company," "Ourselves," "We," "Our," and "Us," refer to our Company  <span className='font-semibold'>Elegance Jewellery</span>!.
"Party," "Parties," or "Us," refers to both the Customer and ourselves, or either the Customer or ourselves.
Use of Website
<br /> <br />

We strive to ensure that all product descriptions and images provided on the website are accurate. However, we do not warrant that product descriptions, images, or other content on the website are complete, reliable, current, or error-free.
The colors of products displayed on your screen may vary depending on your monitor and settings, and thus, may not accurately represent the actual colors of the products.
Pricing and Payment
<br /><br />
All prices for products listed on the website are in INR and are exclusive of shipping costs, which will be added to the total amount due.
We reserve the right to change the prices of products at any time without prior notice.
Payment for products purchased through the website must be made using one of the accepted payment methods as specified on the website.
Shipping and Delivery
<br /> <br />
All content included on this website, such as text, graphics, logos, images, audio clips, digital downloads, data compilations, and software, is the property of  <span className='font-semibold'>Elegance Jewellery</span>! or its content suppliers and is protected by international copyright laws.
Privacy Policy

Your use of this website is also governed by our Privacy Policy, which is available on the website.
Governing Law

Contact Information
If you have any questions about these terms and conditions, please contact us at  <span className='font-semibold'>Elegance Jewellery</span>!.
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default TnC
