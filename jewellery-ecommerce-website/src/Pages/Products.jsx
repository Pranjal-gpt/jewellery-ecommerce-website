import React, { useState } from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import Pitem from '../Components/Pitem'
import Hr from '../Components/Hr'
import { Link } from 'react-router-dom'
import categories from '../data/demodata'
const Products = () => {
      

  const [ProductsData,setProductsData] =useState(categories.Bangles);
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
                  <TagBtn name={"Pendant"} products={categories.Pendants} />
                  <TagBtn name={"Necklace"} products={categories.Necklace} />
                  <TagBtn name={"Mangalsutra"} products={categories.Mangalsutra} />
                  <TagBtn name={"Earring"} products={categories.Earrings} />
                  <TagBtn name={"Chains"} products={categories.Chains} />
                  <TagBtn name={"Bangles"} products={categories.Bangles} />
                  <TagBtn name={"Bracelets"} products={categories.Bracelets} />
                  <TagBtn name={"Nose Pins"} products={categories.NosePins} />
                  <TagBtn name={"Finger Rings"} products={categories.FingerRings} />
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