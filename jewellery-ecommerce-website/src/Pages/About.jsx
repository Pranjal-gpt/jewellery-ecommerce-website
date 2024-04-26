import React, { useEffect } from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import { CartProvider } from "../contexts/cartContext";
const About = () => {
 useEffect(()=>{
    window.scrollTo(0,0)
  
 },[])
  return (
    <div>
      <CartProvider>
        <Nav />
      </CartProvider>
      <div className='min-h-[50vh] p-5'>
        <div className='text-center text-4xl mb-5'>About Us</div>
        <div className=' w-7/12 mx-auto'>
          
"Elegance Jewellery, where sophistication meets style, offers an exquisite collection of fine jewelry crafted to perfection. Our curated selection showcases timeless pieces designed to enhance your elegance and grace on every occasion. From stunning diamond necklaces to intricate gold bangles, each piece in our collection reflects unparalleled craftsmanship and attention to detail.
<br /><br />
At Elegance Jewellery, we understand the significance of jewelry in expressing individuality and celebrating milestones. Whether you're marking a special moment or simply indulging in self-expression, our diverse range of designs caters to every taste and preference. Explore our enchanting assortment of earrings, bracelets, rings, and more, meticulously crafted to elevate your ensemble and make a statement.

Driven by a passion for excellence, we prioritize quality and authenticity, ensuring that every piece meets the highest standards of craftsmanship. With a commitment to customer satisfaction, we offer a seamless shopping experience, supported by personalized assistance and expert guidance.

Discover the allure of Elegance Jewellery and adorn yourself with timeless elegance that transcends trends. Immerse yourself in a world of luxury and sophistication, where each piece tells a story of beauty, elegance, and timeless charm."
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
