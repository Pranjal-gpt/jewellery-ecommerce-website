import React, { useEffect } from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import { useState } from 'react'
import Pitem from '../Components/Pitem'
const Collections = () => {
  const [stringit, setstringit] = useState([]);
  const [joy, setjoy] = useState([]);
  const [pp, setpp] = useState([]);

  const getpp = (collection="prettyinpink")=>{
    let collectionUrl = "http://localhost:3000/api/jewellery/all?jcollection="+collection;
      console.log(collectionUrl)
      fetch(collectionUrl)
        .then((response) => response.json())
        .then((data) => {setpp(data)})
        .catch((error) => console.error("Error fetching products data:", error));
  }
  const getjoy = (collection="joyofdressing")=>{
    let collectionUrl = "http://localhost:3000/api/jewellery/all?jcollection="+collection;
      console.log(collectionUrl)
      fetch(collectionUrl)
        .then((response) => response.json())
        .then((data) => {setjoy(data)})
        .catch((error) => console.error("Error fetching products data:", error));
  }
  const getstringit = (collection="stringit")=>{
    let collectionUrl = "http://localhost:3000/api/jewellery/all?jcollection="+collection;
      console.log(collectionUrl)
      fetch(collectionUrl)
        .then((response) => response.json())
        .then((data) => {setstringit(data)})
        .catch((error) => console.error("Error fetching products data:", error));
  }
  useEffect(()=>{
    getpp()
    getstringit()
    getjoy()
    console.log(pp)
  },[])
  return (
    <>
    <Nav />
    <main>
        <section>
          <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwa98f39de/microsite/joy-of-dressing/bannerdesktopbts.jpg" alt="" />
          <div className='bg-orange-100 flex justify-evenly p-5'>
              {joy.map((product,key)=>(
                   <Pitem product={product} size={"w-72 h-72"} />
              ))}
          </div>
          <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw95048521/microsite/joy-of-dressing/bannerdesktopnyusha.jpg" alt="" />
          <div className='bg-orange-100 flex justify-evenly p-5'>
              {stringit.map((product,key)=>(
                   <Pitem product={product} size={"w-72 h-72"} />
              ))}
          </div>
          <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw26ffb630/microsite/joy-of-dressing/prettyinpinkdesktop.jpg" alt="prettyinpink" />
          <div className='bg-orange-100 flex justify-evenly p-5'>
              {pp.map((product,key)=>(
                   <Pitem product={product} size={"w-72 h-72"} />
              ))}
          </div>
        </section>
    </main>
    <Footer />
    </>
    
  )
}

export default Collections