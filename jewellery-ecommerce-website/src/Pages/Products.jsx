import React, { useState } from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import Pitem from '../Components/Pitem'
import Hr from '../Components/Hr'
const Products = () => {
      const Earrings = [
        {
          id: 1,
          img:"https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw02b097f8/images/hi-res/502920HBGABE00_1.jpg?sw=360&sh=360",
          title: "Earring",
          price:5000,
          link:"#",
        },
        {
          id: 2,
          img:"https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw02b097f8/images/hi-res/502920HBGABE00_1.jpg?sw=360&sh=360",
          title: "Earring",
          price:5000,
          link:"#",
        },
        {
          id: 3,
          img:"https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw02b097f8/images/hi-res/502920HBGABE00_1.jpg?sw=360&sh=360",
          title: "Earring",
          price:5000,
          link:"#",
        },
        {
          id: 4,
          img:"https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw02b097f8/images/hi-res/502920HBGABE00_1.jpg?sw=360&sh=360",
          title: "Earring",
          price:5000,
          link:"#",
        },
        {
          id: 5,
          img:"https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw02b097f8/images/hi-res/502920HBGABE00_1.jpg?sw=360&sh=360",
          title: "Earring",
          price:5000,
          link:"#",
        },
        {
          id: 6,
          img:"https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw02b097f8/images/hi-res/502920HBGABE00_1.jpg?sw=360&sh=360",
          title: "Earring",
          price:5000,
          link:"#",
        },
    ]
      const Necklace = [
        {
          id: 1,
          img:"https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw889f2343/images/hi-res/50D3FFNKKAA02_1.jpg",
          title: "Necklace",
          price:5000,
          link:"#",
        },
        {
          id: 2,
          img:"https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw889f2343/images/hi-res/50D3FFNKKAA02_1.jpg",
          title: "Necklace",
          price:5000,
          link:"#",
        },
        {
          id: 3,
          img:"https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw889f2343/images/hi-res/50D3FFNKKAA02_1.jpg",
          title: "Necklace",
          price:5000,
          link:"#",
        },
        {
          id: 4,
          img:"https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw889f2343/images/hi-res/50D3FFNKKAA02_1.jpg",
          title: "Necklace",
          price:5000,
          link:"#",
        },
        {
          id: 5,
          img:"https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw889f2343/images/hi-res/50D3FFNKKAA02_1.jpg",
          title: "Necklace",
          price:5000,
          link:"#",
        },
        {
          id: 6,
          img:"https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw889f2343/images/hi-res/50D3FFNKKAA02_1.jpg",
          title: "Necklace",
          price:5000,
          link:"#",
        },
      ]
      const Mangalsutra = [
        {
          id: 1,
          img:"https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8a99845c/images/hi-res/50D3PTYJYAA29_1.jpg",
          title: "Necklace",
          price:5000,
          link:"#",
        },
        {
          id: 2,
          img:"https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8a99845c/images/hi-res/50D3PTYJYAA29_1.jpg",
          title: "Necklace",
          price:5000,
          link:"#",
        },
        {
          id: 3,
          img:"https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8a99845c/images/hi-res/50D3PTYJYAA29_1.jpg",
          title: "Necklace",
          price:5000,
          link:"#",
        },
        {
          id: 4,
          img:"https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8a99845c/images/hi-res/50D3PTYJYAA29_1.jpg",
          title: "Necklace",
          price:5000,
          link:"#",
        },
        {
          id: 5,
          img:"https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8a99845c/images/hi-res/50D3PTYJYAA29_1.jpg",
          title: "Necklace",
          price:5000,
          link:"#",
        },
        {
          id: 6,
          img:"https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8a99845c/images/hi-res/50D3PTYJYAA29_1.jpg",
          title: "Necklace",
          price:5000,
          link:"#",
        },
    ]
  const [ProductsData,setProductsData] =useState(Earrings);

  return (
    <div>
        <Nav />
        <main className=''>
            <section className='flex justify-between items-center px-24 h-10 bg-rose-100'>
                <div className="path">Home {">"} Products</div>
               
                <div>Pincode <i class="fa-solid fa-map-pin"></i></div>
            </section>
            <section className='flex justify-between items-center px-24 h-20 bg-rose-50'>
                <div className="filters bg-rose-50 rounded-lg px-2 py-1 border border-rose-300"><i class="fa-solid fa-sliders"></i> Filters</div>
                <div className='flex gap-3'>
                  <button 
                    className='px-2 py-1 border-2 border-rose-200 hover:bg-rose-100 transition-all duration-100 '
                    onClick={()=>{setProductsData(Necklace)}}
                  >NeckLace</button>
                  <button 
                    className='px-2 py-1 border-2 border-rose-200 hover:bg-rose-100 transition-all duration-100 '
                    onClick={()=>{setProductsData(Earrings)}}
                  >Earrings</button>
                  <button 
                    className='px-2 py-1 border-2 border-rose-200 hover:bg-rose-100 transition-all duration-100 '
                    onClick={()=>{setProductsData(Mangalsutra)}}
                  >Mangalsutra</button>
                </div>
                <div>Sort By</div>
            </section>
            {/* <Hr thickness={"h-0.5"} length={"w-11/12"} /> */}
            <section className='section flex gap-10 flex-wrap justify-center mt-5 mx-auto  w-11/12'>
                {ProductsData.map((product)=>(
                   <Pitem pImg={product.img} pName={product.title} pPrice={product.price} pLink={product.link} size={"w-72"} />
                ))}
            </section>
        </main>
        <Footer />
    </div>
  )
}

export default Products