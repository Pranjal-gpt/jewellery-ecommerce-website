import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import categories from '../data/demodata'
import TotalRating from '../Components/TotalRating'
import { Link } from 'react-router-dom'
const {WishlistData} = categories;
const Wishlist = () => {
  return (
    <>
        <Nav />
        <main>
            <h1 className='text-center text-4xl p-4 font-semibold'>Your Wishlist</h1>
            <section className='w-10/12 mx-auto flex flex-col gap-1'>
                {WishlistData.map((item,key)=>(
                    <div className='w-full bg-rose-50 p-5 flex' key={key}>
                        <div><img src={item.images[0]} className='w-60' alt="" /></div>
                       
                        <div className='p-5'>
                            <h1 className='text-3xl   font-bold'>{item.title}</h1>
                            <h1 className='text-lg  mt-4 mb-10  '>{item.description}</h1>
                            <TotalRating productDetails={item} />
                            <div className=' font-semibold'>
                                <span>Price.</span>
                                <span className='mx-2 font-semibold text-2xl text-green-600'>₹{(item.price-(item.price*item.discount)/100).toFixed(2)}</span>
                                <strike className=' text-rose-700'>₹{item.price}</strike><span className=' text-rose-700'> {"(discounted "+item.discount+"%)"}</span>
                            </div>
                        </div>
                            <div className='text-xl my-3 w-96 flex items-center justify-around'>
                                <div className='flex flex-col gap-4'>
                                    <button className=" bg-rose-200 hover:bg-rose-100 rounded-md text-sm px-5 py-2">Remove <br /> From  Wishlist</button>
                                    
                                    <Link className=" bg-rose-200 hover:bg-rose-100 rounded-md px-5 py-2 text-center"
                                    to={"/jewellery/"+item.title.replace(/ /g, "-") +"#"+ item.id} state={item}>View</Link>
                                </div>
                                <div className='flex flex-col justify-around h-48'>
                                    <button 
                                        className='px-10 py-3 rounded border-2 border-rose-800 hover:bg-rose-200 transition-all duration-100 '
                                        onClick={()=>{}}
                                    >Add To Cart</button>
                                    <button 
                                        className='px-10 py-3 rounded border-2 border-rose-800 hover:bg-rose-200 hover:text-rose-800 bg-rose-800 text-rose-50 transition-all duration-100 '
                                        onClick={()=>{}}
                                    >Buy Now</button>
                                </div>
                            </div>
                    </div>
                ))}
            </section>
        </main>
        <Footer />
    </>
  )
}

export default Wishlist