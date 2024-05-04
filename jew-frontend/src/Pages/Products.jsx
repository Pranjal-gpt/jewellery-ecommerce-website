import React, { useEffect, useState } from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import Pitem from '../Components/Pitem'
import Hr from '../Components/Hr'
import { Link } from 'react-router-dom'
import { CartProvider } from "../contexts/cartContext";
const Products = ({category,all=false, genderType="any",collec="any",occa="any",gifting=false}) => {
  
  const [pincode, setPincode] = useState('');
  const [city, setCity] = useState('');
  
  const [ProductsData,setProductsData] =useState([]);
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState('Default'); 
  const [visibleProducts, setVisibleProducts] = useState(4);
  const [FilterMode,setFilterMode] =useState(false);
  
  const [search, setsearch] = useState("")
  const [priceMin, setpriceMin] = useState(0)
  const [priceMax, setpriceMax] = useState(4000)
  const [gender, setgender] = useState("any")
  const [jcollection, setjcollection] = useState("any")
  const [occasion, setoccasion] = useState("any")
  const [metal, setmetal] = useState("any")
  const [metalColor, setmetalColor] = useState("any")
  const [community, setcommunity] = useState("all")
  // const [brand, setbrand] = useState("any")
  
  const getProductsData = (products="all") =>{
    setLoading(true);
    // Fetch the homepage data from your backend API
    // console.log(gifting)
    if (collec!="any") {
      products+= `&jcollection=${collec}`
    }else if (occa!="any") {
      products+= `&occasion=${occa}`
    }else if (genderType!="any") {
      products+= `&gender=${genderType}`
    }else if (gifting===true){
      products+= `&gifting=true`
    }
    else{

      products+= `&shuffle=true&search=${search}&priceMin=${priceMin}&priceMax=${priceMax}&gender=${gender}&jcollection=${jcollection}&occasion=${occasion}&metal=${metal}&metalColor=${metalColor}&community=${community}`
    }
    let productUrl = "https://jewellery-ecommerce-website.vercel.app/api/jewellery/all?category="+products.replace(" ","-");
    // console.log("collec ",productUrl)
      // console.log(productUrl)
      fetch(productUrl)
        .then((response) => response.json())
        .then(async (data) => {
          setProductsData(data);
          setSortBy("Default");
          // console.log(data)
        })
        .catch((error) => console.error("Error fetching products data:", error))
        .finally(() => setLoading(false))
  }
  const sortProducts = () => {
    switch (sortBy) {
      case 'Pricelth':
        return [...ProductsData].sort((a, b) => a.price - b.price);
      case 'Pricehtl':
        return [...ProductsData].sort((a, b) => b.price - a.price);
      case 'nameasc':
        return [...ProductsData].sort((a, b) => a.title.localeCompare(b.title));
      case 'namedsc':
        return [...ProductsData].sort((a, b) => b.title.localeCompare(a.title));
      default:
        return  [...ProductsData].sort(() => Math.random() - 0.5);
    }
  };
  const CheckPincode = async () => {
    const url = 'https://india-pincode-with-latitude-and-longitude.p.rapidapi.com/api/v1/pincode/'+pincode;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '012183ec7bmsh8f9490a025cdb7fp152eb5jsn9bdff2ef4adf',
            'X-RapidAPI-Host': 'india-pincode-with-latitude-and-longitude.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        let district =JSON.parse(result)[0].district;
        setCity(district);
    } catch (error) {
        console.error(error);
    }
  };

  const TagBtn = ({name}) => {
    return (
      <button 
        className='px-2 py-1 border-2 rounded-lg shadow-lg hover:shadow-sm border-orange-200 hover:bg-orange-100 transition-all duration-200 '
        onClick={()=>{
          getProductsData(name);
          setVisibleProducts(4);
         
        }}
          >{name}</button>
        )
      }
      const handleSearch=()=>{
        getProductsData(category)
      }
      const resetFilters=()=>{
        setsearch("");
        setpriceMin(0)
        setpriceMax(4000)
        setgender("any")
        setjcollection("any")
        setoccasion("any")
        setmetal("any")
        setmetalColor("any")
        setcommunity("all")
        setFilterMode(false)
        ;
      }


  useEffect(()=>{
    getProductsData(category)
    window.scrollTo(0, 0);
  },[category,collec,occa,gifting])

  useEffect(() => {
    const sortedProducts = sortProducts();
    setProductsData(sortedProducts);
  }, [sortBy]);

  useEffect(()=>{
    priceMax<priceMin&&setpriceMax(4000)
  },[priceMax])

  return (
    <div>
        <CartProvider>
        <Nav />
      </CartProvider>
        <main className=''>
            <section className='flex lg:flex-row flex-col gap-1 py-2 justify-between items-center px-24 lg:h-12 bg-orange-100'>
                <div className="path"> <Link to={"/"} className='hover:text-orange-500 transition-all duration-200'>Home</Link>  {">"} <span className='hover:text-orange-500 transition-all duration-200 cursor-pointer'>Jewellery</span> </div>
                  <div className='relative'>
                    <input 
                      value={search}
                      onChange={(e)=>{setsearch(e.target.value)}}
                      onKeyDown={(e) => e.key === 'Enter'&&  handleSearch()}
                      type='text' name='search' 
                      placeholder='Search for Jewellery' 
                      className='px-3 py-2 w-72 focus:shadow-2xl hover:shadow-lg active:outline-orange-600 hover:w-[22rem] transition-all duration-500 ease-in focus:w-[22rem] focus:outline-none rounded bg-orange-50 placeholder-orange-300'>
                    </input>
                    <i onClick={handleSearch} 
                       
                       class="fa-solid fa-magnifying-glass absolute cursor-zoom-in right-3 top-1/2 -translate-y-1/2 bg-orange-300 text-white hover:scale-125 pl-1 rounded-full p-1 ">
                    </i>
                  </div>
                  <div className='flex items-center'>
                    <div className='rounded-xl bg-orange-200 px-2 py-1 mr-1'>{city!=""&&"✅"} {city} <i class="fa-solid fa-map-pin" ></i></div>
                    <div className='relative bg-orange-200 pl-2 rounded-lg p-0.5 '>Pincode
                          <input type="text" placeholder='Enter pincode' id="" className='ml-1 px-2 text-md focus:outline-orange-100 placeholder-orange-200 py-1 w-40  lg:rounded-r-lg rounded-lg bg-orange-50  focus:border-orange-300 focus:ring-orange-300'
                              onChange={(change)=>{setPincode(change.target.value)}}
                              value={pincode} />
                          <button disabled={!pincode}className={`font-bold p-1 rounded-lg absolute right-2 lg:top-1 bottom-1 text-xs ${pincode === ""? "text-orange-50  bg-orange-100" : "hover:bg-orange-300  bg-orange-100"} cursor-pointer`}
                              onClick={CheckPincode} >Check</button>
                    </div>
                  </div>
            </section>
            <section className='flex justify-between lg:flex-row gap-2 flex-col items-center lg:px-24 py-1 lg:h-16 bg-orange-50 shadow-lg'>
                {collec=="any"&&genderType=="any"?                
                <div className={(FilterMode&&"bg-orange-200 font-bold")+"filter shadow-lg rounded-lg px-2 py-1 border border-orange-300 cursor-pointer select-none"} onClick={()=>{setFilterMode(!FilterMode)}}><i class="fa-solid fa-sliders"></i> Filters</div>
                :<div></div>
                }
                {all?(

                  <div className='flex lg:flex-row justify-evenly  flex-wrap gap-3'>
                  <TagBtn name={"Pendants"} />
                  <TagBtn name={"Necklace"} />
                  <TagBtn name={"Mangalsutra"}  />
                  <TagBtn name={"Earring"}  />
                  <TagBtn name={"Chains"} />
                  <TagBtn name={"Bangles"}  />
                  <TagBtn name={"Bracelets"}  />
                  <TagBtn name={"Nose-Pins"} />
                  <TagBtn name={"Ring"}  />
                </div>
                ):""}
                <div>
                  <b className='rounded-l-xl bg-orange-100 p-1.5'>SortBy</b>
                  <select onChange={(e)=>setSortBy(e.target.value)}  value={sortBy} className=' rounded-r-xl bg-orange-200 p-1 focus:outline-orange-100' >
                    <option value="Default">Default</option>
                    <option value="Pricelth">Price(Low to High)</option>
                    <option value="Pricehtl">Price(High to Low)</option>
                    <option value="nameasc">Name(Ascending)</option>
                    <option value="namedsc">Name(Descending)</option>
                  </select>
                </div>
            </section>
            {FilterMode?
            <section className='Setfilter flex flex-wrap gap-2 justify-around bg-orange-50 items-center lg:h-36 px-5 py-1'>
              <div className='flex flex-col gap-1'>
                 <b className='text-center'>Price Range</b>
                <span className='flex gap-1'><p className='w-7'>Min</p>
                  <input type="number" onChange={(e)=>{setpriceMin(e.target.value);priceMax<priceMin&&setpriceMax(parseInt(priceMin)+100);priceMax<10000&&setpriceMax(4000)}} value={priceMin} min={0} max={4000} name='priceMin' className='w-20'  />
                  <input type="range" onChange={(e)=>{setpriceMin(e.target.value);priceMax<priceMin&&setpriceMax(parseInt(priceMin)+100);priceMax<10000&&setpriceMax(4000)}} value={priceMin} min={0} max={4000} name='priceMin'  />
                </span>
                <span className='flex gap-1'><span className='w-7'>Max</span>
                  <input type="number" onChange={(e)=>{setpriceMax(e.target.value);}} value={priceMax} min={priceMin} name='priceMax' className='w-20'/>
                  <input type="range" onChange={(e)=>{setpriceMax(e.target.value);}} value={priceMax} min={priceMin} max={4000} name='priceMin'  />
                </span>
              </div>
              
              <div>
                <b>Occasion</b>
                <select onChange={(e)=>setoccasion(e.target.value)}  value={occasion} name="occasion" id="occasion">
                  <option value="any">Any</option>
                  <option value="office">Office Wear</option>
                  <option value="wedding">Wedding</option>
                  <option value="Traditional">Traditional</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div>
                <b>Collection</b>
                <select  onChange={(e)=>setjcollection(e.target.value)}  value={jcollection} name="jcollection" id="jcollection">
                  <option value="any">Any</option>
                  <option value="Bestsellers">Bestsellers</option>
                  <option value="prettyinpink">Pretty In Pink</option>
                  <option value="joyofdressing">Joy of Dressing</option>
                  <option value="stringit">String It</option>
                </select>
              </div>
              <div>
                <b>Plating Color</b>
                <select onChange={(e)=>setmetalColor(e.target.value)}  value={metalColor} name="metalColor" id="metalColor">
                  <option value="any">All</option>
                  <option value="Gold">Gold Plated</option>
                  <option value="Sliver-Plated">Silver Plated</option>
                  <option value="Black-Plated">Black Plated</option>
                </select>
              </div>
             
              <p className='pt-5 flex gap-5'>
                <button onClick={()=>{getProductsData(category)}} className=' hover:bg-orange-300 rounded-md text-lg px-4 py-2 bg-orange-200 active:bg-orange-400'> Apply</button>
                <button onClick={() => {
                            resetFilters();
                            getProductsData(category);
                        }}  
                        className=' hover:bg-orange-300 rounded-md text-lg px-4 py-2 bg-orange-200 active:bg-orange-400'> Reset</button>
                </p>
            </section>
            :""}
            <section className='section flex gap-10 flex-wrap justify-center mt-5 mx-auto  lg:w-11/12 w-full'>
                
                
                
                {loading&&<div className='p-5 relative mx-auto flex flex-col gap-10 items-center justify-center font-semibold  h-96  text-center w-full '>
                    <div className='relative animate-spin text-2xl text-orange-400'>
                      <i class="fa-regular fa-gem fa-2xl -rotate-90"></i>
                      <i class="fa-regular fa-gem fa-2xl absolute -top-2 right-6"></i>
                      <i class="fa-regular fa-gem fa-2xl rotate-180 absolute -bottom-2 right-6"></i>
                      <i class="fa-regular fa-gem fa-2xl rotate-90"></i>
                    </div>
                    <div className='text-orange-400'>Loading...</div>
                  </div>}
                
                
                
                {(ProductsData<1&&!loading)&&<div className='p-5 mx-auto h-96'>No Results Found</div>}
                {!loading&&ProductsData.slice(0, visibleProducts).map((product,key)=>(
                   <Pitem product={product} size={"lg:w-72 lg:h-72 h-52 object-cover w-96"} />
                ))}

            </section>
            {(!loading&&ProductsData.length > visibleProducts) && ( // Check if there are more products to display
              <section className=' flex items-center justify-center h-36'>
              <Link 
               
                className='shadow-xl rounded-xl hover:shadow-lg active:shadow-sm inline-block mx-auto px-2 py-1 border-2 border-orange-200 hover:bg-orange-100 transition-all duration-100 '
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