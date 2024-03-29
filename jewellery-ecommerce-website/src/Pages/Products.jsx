import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import Pitem from '../Components/Pitem'
import Hr from '../Components/Hr'
const Products = () => {
    const ProductsData = [
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
  return (
    <div>
        <Nav />
        <main className=''>
            <section className='flex justify-between items-center px-24 h-20'>
                <div className="path">Home {">"} Products</div>
                <div>Tags</div>
                <div>Sort By</div>
            </section>
            <Hr thickness={"h-0.5"} length={"w-11/12"} />
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