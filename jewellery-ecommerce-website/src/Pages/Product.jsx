import React, { useState } from 'react'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'

const productDetails = {
    id: 1,
    name: "Diamond Pendant Necklace",
    description: "Stunning diamond pendant necklace crafted with 18K white gold.",
    price: 999.99,
    metal: "18K White Gold",
    gemstone: "Diamond",
    gemstoneWeight: "1 carat",
    dimensions: "Pendant: 20mm x 10mm, Chain: 18 inches",
    images: [
        "https://silvermistjewelry.in/cdn/shop/products/ocean-drop-pendant-304373.jpg?v=1706959492&width=1000",
        "https://silvermistjewelry.in/cdn/shop/products/ocean-drop-pendant-933421.png?v=1711470911&width=1000",
        "https://silvermistjewelry.in/cdn/shop/products/ocean-drop-pendant-790888.jpg?v=1711470911&width=1000"
    ],
    availability: true,
    reviews: [
      { id: 1, user: "John Doe", rating: 5, comment: "Absolutely beautiful necklace! Love it!" },
      { id: 2, user: "Jane Smith", rating: 4, comment: "Great quality and fast shipping." }
    ]
  };

  
const Product = () => {
    const [CurrentImg,setCurrentImg]=useState(productDetails.images[0])
  return (
    <>
        <Nav />
        <main className='px-20 flex flex-wrap relative'>
            <section className='bg-rose-50 w-1/2 h-[70vh] sticky top-28 p-2'>
                <div>Home {">"} Products {">"} {productDetails.name}</div>
                <div className='mt-3 flex gap-5 justify-around'>
                    <div className='flex flex-col items-center justify-between  w-1/5 h-[60vh]' >
                        {productDetails.images.map((imgsrc)=>(
                            <img src={imgsrc} className='h-32 w-32 object-center border'
                            onClick={()=>{setCurrentImg(imgsrc)}}></img>
                        ))}
                    </div>
                    <div className='bg-blue-100 w-2/3 p-5'>
                        <img src={CurrentImg} alt={productDetails.name}
                            className='h-full w-full'
                        />
                    </div>
                </div>

            </section>
            <section className='bg-rose-500 w-1/2 h-[120vh]'>
                description
            </section>
            <section className='h-screen bg-rose-100 w-full sticky'>details</section>
        </main>
        <Footer />
    </>
  )
}

export default Product