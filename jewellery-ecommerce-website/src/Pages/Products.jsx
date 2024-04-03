import React, { useState } from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import Pitem from '../Components/Pitem'
import Hr from '../Components/Hr'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

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
        {
          id: 7,
          img:"https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8a99845c/images/hi-res/50D3PTYJYAA29_1.jpg",
          title: "Necklace",
          price:5000,
          link:"#",
        },
        {
          id: 8,
          img:"https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8a99845c/images/hi-res/50D3PTYJYAA29_1.jpg",
          title: "Necklace",
          price:5000,
          link:"#",
        },
        {
          id: 9,
          img:"https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8a99845c/images/hi-res/50D3PTYJYAA29_1.jpg",
          title: "Necklace",
          price:5000,
          link:"#",
        },
        {
          id: 10,
          img:"https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8a99845c/images/hi-res/50D3PTYJYAA29_1.jpg",
          title: "Necklace",
          price:5000,
          link:"#",
        },
        {
          id: 11,
          img:"https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8a99845c/images/hi-res/50D3PTYJYAA29_1.jpg",
          title: "Necklace erer 34 we",
          price:5000,
          link:"#",
        },
    ]
    
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

  const [ProductsData,setProductsData] =useState(Earrings);
  const [visibleProducts, setVisibleProducts] = useState(4);
  const [FilterMode,setFilterMode] =useState(false);

  const TagBtn = ({name,products}) => {
    return (
      <button 
        className='px-2 py-1 border-2 border-rose-200 hover:bg-rose-100 transition-all duration-100 '
        onClick={()=>{setProductsData(products);setVisibleProducts(4)}}
      >{name}</button>
    )
  }
  
  return (
    <div>
        <Nav />
        <main className=''>
            <section className='flex justify-between items-center px-24 h-12 bg-rose-100'>
                <div className="path">Home {">"} Products</div>
                <div>Pincode <i class="fa-solid fa-map-pin"></i></div>
            </section>
            <section className='flex justify-between items-center px-24 h-16 bg-rose-50'>
                <div className="filters bg-rose-50 rounded-lg px-2 py-1 border border-rose-300 cursor-pointer select-none" onClick={()=>{setFilterMode(!FilterMode)}}><i class="fa-solid fa-sliders"></i> Filters</div>
                <div className='flex gap-3'>
                  <TagBtn name={"Earrings"} products={Earrings} />
                  <TagBtn name={"Necklace"} products={Necklace} />
                  <TagBtn name={"Mangalsutra"} products={Mangalsutra} />
                </div>
                <div>Sort By</div>
            </section>
            {FilterMode?
            <section className='Setfilter flex gap-2 justify-around bg-rose-50 items-center h-14 px-5'>
              <div>Price Range</div>
              <div>metal type</div>
              <div>Jewelery type</div>
              <div>purity</div>
              <div>occasion</div>
              <div>collection</div>
              <div>metal color</div>
              <div>community</div>
            </section>
            :""}
            {/* <Hr thickness={"h-0.5"} length={"w-11/12"} /> */}
            <section className='section flex gap-10 flex-wrap justify-center mt-5 mx-auto  w-11/12'>
                {ProductsData.slice(0, visibleProducts).map((product)=>(
                   <Pitem product={product} size={"w-72"} />
                ))}

            </section>
            {ProductsData.length > visibleProducts && ( // Check if there are more products to display
              <section className=' flex items-center justify-center h-36'>
              <Link 
               
                className='inline-block mx-auto px-2 py-1 border-2 border-rose-200 hover:bg-rose-100 transition-all duration-100 '
                onClick={()=>{setVisibleProducts(visibleProducts + 4)}}
                >See More Jewellery</Link>
              </section>
              )}
              
              
        </main>
        <Footer />
    </div>
  )
}

export default Products