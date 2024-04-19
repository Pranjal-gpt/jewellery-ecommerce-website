import React, { useEffect, useState } from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import Pitem from '../Components/Pitem'
import Hr from '../Components/Hr'
import { Link } from 'react-router-dom'
import { CartProvider } from "../contexts/cartContext";

// import categories from '../data/demodata'
const Products = ({category,all=false}) => {
      

  const [ProductsData,setProductsData] =useState([]);
  const [visibleProducts, setVisibleProducts] = useState(4);
  const [FilterMode,setFilterMode] =useState(false);
  
  const [search, setsearch] = useState("")
  const [priceMin, setpriceMin] = useState(0)
  const [priceMax, setpriceMax] = useState(1000000)
  const [gender, setgender] = useState("any")
  const [jcollection, setjcollection] = useState("all")
  const [occasion, setoccasion] = useState("any")
  const [metal, setmetal] = useState("all")
  const [metalColor, setmetalColor] = useState("all")
  const [community, setcommunity] = useState("any")
  // const [brand, setbrand] = useState("any")
  
  const getProductsData = (products="all") =>{
      // Fetch the homepage data from your backend API
      products+= `&priceMin=${priceMin}&priceMax=${priceMax}&gender=${gender}&jcollection=${jcollection}&occasion=${occasion}&metal=${metal}&metalColor=${metalColor}&community=${community}`
      let productUrl = "http://localhost:3000/api/jewellery/all?category="+products.replace(" ","-");
      console.log(productUrl)
      fetch(productUrl)
        .then((response) => response.json())
        .then((data) => setProductsData(data))
        .catch((error) => console.error("Error fetching products data:", error));
  }
  const TagBtn = ({name}) => {
    return (
      <button 
        className='px-2 py-1 border-2 border-rose-200 hover:bg-rose-100 transition-all duration-100 '
        onClick={()=>{
          getProductsData(name);
          setVisibleProducts(4);}}
      >{name}</button>
    )
  }
  const getAllJewellery = ()=>{
    fetch("http://localhost:3000/api/jewellery/all")
        .then((response) => response.json())
        .then((data) => setProductsData(data))
        .catch((error) => console.error("Error fetching products data:", error));
  }
  useEffect(()=>{
    getProductsData(category)
    // getAllJewellery()
    
  },[category])
  useEffect(()=>{
    priceMax<10000&&setpriceMax(10000)
  },[priceMax])
  return (
    <div>
        <CartProvider>
        <Nav />
      </CartProvider>
        <main className=''>
            <section className='flex justify-between items-center px-24 h-12 bg-rose-100'>
                <div className="path">Home {">"} Products</div>
                <div>Pincode <i class="fa-solid fa-map-pin"></i></div>
            </section>
            <section className='flex justify-between items-center px-24 h-16 bg-rose-50'>
                <div className="filters bg-rose-50 rounded-lg px-2 py-1 border border-rose-300 cursor-pointer select-none" onClick={()=>{setFilterMode(!FilterMode)}}><i class="fa-solid fa-sliders"></i> Filters</div>
                {all?(

                  <div className='flex gap-3'>
                  <TagBtn name={"Pendants"} />
                  <TagBtn name={"Necklace"} />
                  <TagBtn name={"Mangalsutra"}  />
                  <TagBtn name={"Earrings"}  />
                  <TagBtn name={"Chains"} />
                  <TagBtn name={"Bangles"}  />
                  <TagBtn name={"Bracelets"}  />
                  <TagBtn name={"Nose Pins"} />
                  <TagBtn name={"Rings"}  />
                </div>
                ):""}
                <div>Sort By</div>
            </section>
            {FilterMode?
            <section className='Setfilter flex flex-wrap gap-2 justify-around bg-rose-50 items-center h-36 px-5'>
              <div className='flex flex-col gap-1'>
                 <b className='text-center'>Price Range</b>
                <span className='flex gap-1'><p className='w-7'>Min</p>
                  <input type="number" onChange={(e)=>{setpriceMin(e.target.value);priceMax<priceMin&&setpriceMax(parseInt(priceMin)+1000);priceMax<10000&&setpriceMax(10000)}} value={priceMin} min={0} max={100000} name='priceMin' className='w-20'  />
                  <input type="range" onChange={(e)=>{setpriceMin(e.target.value);priceMax<priceMin&&setpriceMax(parseInt(priceMin)+1000);priceMax<10000&&setpriceMax(10000)}} value={priceMin} min={0} max={100000} name='priceMin'  />
                </span>
                <span className='flex gap-1'><span className='w-7'>Max</span>
                  <input type="number" onChange={(e)=>{setpriceMax(e.target.value);priceMax<10000&&setpriceMax(10000)}} value={priceMax} min={priceMin} name='priceMax' className='w-20'/>
                  <input type="range" onChange={(e)=>{setpriceMax(e.target.value);priceMax<10000&&setpriceMax(10000)}} value={priceMax} min={priceMin} max={1000000} name='priceMin'  />
                </span>
              </div>
              <div>
                <b>Metal Type</b>
                <select onChange={(e)=>setmetal(e.target.value)} value={metal} name="metal" id="metal">
                  <option value="any">All</option>
                  <option value="Gold">Gold</option>
                  <option value="Silver">Silver</option>
                  <option value="WhiteGold">White Gold</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div>
                <b>For(Gender)</b>
                <select onChange={(e)=>setgender(e.target.value)}  value={gender} name="gender" id="gender">
                  <option value="any">Any</option>
                  <option value="womens">Womens</option>
                  <option value="mens">Mens</option>
                  <option value="kids">Kids</option>
                </select>
              </div>
              <div>
                <b>Occasion</b>
                <select onChange={(e)=>setoccasion(e.target.value)}  value={occasion} name="occasion" id="occasion">
                  <option value="any">Any</option>
                  <option value="Office">Office Wear</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Traditional">Traditional</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div>
                <b>Collection</b>
                <select  onChange={(e)=>setjcollection(e.target.value)}  value={jcollection} name="jcollection" id="jcollection">
                  <option value="any">Any</option>
                  <option value="prettyinpink">Pretty In Pink</option>
                  <option value="joyofdressing">Joy of Dressing</option>
                  <option value="stringit">String It</option>
                </select>
              </div>
              <div>
                <b>Metal Color</b>
                <select onChange={(e)=>setmetalColor(e.target.value)}  value={metalColor} name="metalColor" id="metalColor">
                  <option value="any">All</option>
                  <option value="Yellow">Yellow</option>
                  <option value="Rose">Rose</option>
                  <option value="Silver">Silver</option>
                </select>
              </div>
              <div>
                <b>Community</b>
                <select onChange={(e)=>setcommunity(e.target.value)}  value={community} name="community" id="community">
                  <option value="any">All</option>
                  <option value="Gujrati">Gujrati</option>
                  <option value="Marathi">Marathi</option>
                  <option value="Punjabi">Punjabi</option>
                </select>
              </div>
              <p className='pt-5'><button onClick={()=>{getProductsData(category)}} className=' hover:bg-rose-300 rounded-md text-lg px-4 py-2 bg-rose-200'> Apply</button></p>
            </section>
            :""}
            {/* <Hr thickness={"h-0.5"} length={"w-11/12"} /> */}
            <section className='section flex gap-10 flex-wrap justify-center mt-5 mx-auto  w-11/12'>
                {ProductsData.slice(0, visibleProducts).map((product,key)=>(
                   <Pitem product={product} size={"w-72 h-72"} />
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