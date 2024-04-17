import React, { useEffect } from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import TotalRating from '../Components/TotalRating'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useCart,CartProvider } from '../contexts/cartContext'

// const {CartData} = categories;
const Cart = () => {
    const { cartItems, removeFromCart } = useCart();
    const [PromoCode, setPromoCode] = useState('');
    const [PromoDiscount, setPromoDiscount] = useState(0);
    const [Totalprice,setTotalPrice] = useState(0);
    const [DiscountedPrice,setDiscountedPrice] = useState(0);
    const [CartData, setCartData] = useState([]);
    
    const getCartData = () => {
        fetch("http://localhost:3000/api/cart")
            .then((response) => response.json())
            .then((data) => {
                console.log("Received cart data:", data);
                setCartData(data);
            })
            .catch((error) => console.error("Error fetching cart data:", error));
            setTotalPrice(cartItems.reduce((total, item) => total + item.price, 0));
       setDiscountedPrice(
           cartItems.reduce((total, item) => {
            const discountedPrice = item.price - (item.price * item.discount) / 100;
            return total + discountedPrice;
            }, 0))
    }
    useEffect(()=>{
        // getCartData()
        // console.log( CartData)
        setPromoDiscount(0);
        setPromoCode("");
       setTotalPrice(cartItems.reduce((total, item) => total + item.price, 0));
       setDiscountedPrice(
           cartItems.reduce((total, item) => {
            const discountedPrice = item.price - (item.price * item.discount) / 100;
            return total + discountedPrice;
            }, 0)

       )
    },[cartItems])
    // console.log(cartData)
    const CheckPromoCode = () => {
        PromoCode==="Welcome500"&&Totalprice>2000?setPromoDiscount(500):()=>{setPromoDiscount(0);setPromoCode("")}
      };
  return (
    <>
        <CartProvider>
            <Nav />
        
        <main>
            <h1 className='text-center text-4xl p-4 font-semibold'>Your Cart ({cartItems.length})</h1>
            <section className='w-10/12 mx-auto flex  gap-3 relative'>
                <div className=' w-2/3 bg-rose-50 p-5'>
                   
                    
                    <table className='w-full'>
                        <tr className='border-b-2 border-b-rose-200 text-left'>
                            <th className='py-2'>Product</th>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>X</th>
                        </tr>
                        {cartItems.length===0&&(
                            <tr  className='text-center ' ><td  colSpan={5} >No items in Cart</td></tr>
                        )}
                        {cartItems.map((item,key)=>(
                            <tr key={key} className='border-b-2 border-b-rose-100 ' >
                                <td className='py-3'><img src={item.image} className='w-36' alt="" /></td>
                                <td>
                                    <span className='text-xl'>{item.title}</span>
                                    <div className='text-xs'>Metal: {item.metal}</div>
                                    <div className=' text-xs'>Metal Purity: {item.karatage}K</div>
                                </td>
                                <td>
                                    <input type="number" className='w-10 cursor-pointer rounded' value={1} onChange={()=>{}} name="" id="" />
                                </td>
                                <td>
                                    <div className='py-5 font-semibold flex flex-col w-36'>
                                        <span className=' font-semibold text-xl'>₹{(item.price-(item.price*item.discount)/100).toFixed(2)}</span>
                                        <strike className='text-xs text-rose-700'>₹{item.price}</strike>
                                        <span>You saved ₹{(item.price)-(item.price-(item.price*item.discount)/100).toFixed(2)}</span>
                                        
                                        <span className='w-fit text-rose-700 border-2 border-rose-800 p-1'>{item.discount+"% OFF"}</span>
                                    </div>
                                </td>
                                <td className='relative'>
                                    <button onClick={() => removeFromCart(item.id)} className="w-8 h-8  bg-rose-200 flex cursor-pointer items-center justify-center rounded-full  group hover:shadow-2xl">
                                        <i class="fa-solid fa-xmark group-hover:scale-125"></i>
                                        <div  className="absolute text-sm -bottom-1 hidden group-hover:block p-1 rounded-md bg-rose-50 border w-24 text-center"> Remove <br /> From Cart</div>
                                    </button>
                                </td>
                            </tr>
                        ))}
                                    
                          
                    </table>
                </div>
                <div className='w-1/3 bg-rose-100 p-5 h-fit sticky top-48'>
                    <h1 className='text-2xl font-bold text-center'>Cart Summary</h1>
                    <table className='table mx-auto'>
                        <tr className=''>
                            <td className='pt-5 px-10'>MRP.</td>
                            <td  className='pt-5 px-10'>{Totalprice.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td  className='pb-5 px-10'>Total Saved</td>
                            <td  className='pb-5 px-10'>{(Totalprice-DiscountedPrice).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td  className='pb-5 px-10'>Promotional Discounts</td>
                            <td  className='pb-5 px-10'>{PromoDiscount}</td>
                        </tr>
                        {PromoDiscount>0&&(
                        <tr>
                            <td colSpan={2} className='text-center pb-5 px-10'>
                                <span className='bg-rose-200 rounded p-2'>
                                    <span>Applied Coupon </span>
                                    <span className=' italic px-2 mx-3 rounded-lg bg-rose-300'>{PromoCode}</span>
                                    <i class="fa-solid fa-xmark cursor-pointer hover:scale-125" onClick={()=>{setPromoDiscount(0);setPromoCode("")}}></i>
                                </span>
                            </td>
                        </tr>
                        )}
                        <tr className='text-xl font-semibold'>
                            <td  className='py-5 px-10'>Net Payable</td>
                            <td  className='py-5 px-10'>{DiscountedPrice.toFixed(2)-PromoDiscount}</td>
                        </tr>
                    </table>
                        <fieldset className='border-2 mx-auto w-10/12 border-rose-800 rounded text-center  py-1 relative'>
                            <legend>PromoCode</legend>
                            <input type="text" placeholder='Enter PromoCode' id="" className='px-2 w-11/12 h-10 rounded bg-rose-50 text-xl focus:border-rose-300 focus:ring-rose-300'
                                onChange={(change)=>{setPromoCode(change.target.value)}}
                                value={PromoCode} />
                            <button disabled={!PromoCode}className={`font-bold p-1 rounded-lg absolute right-5 top-2 ${PromoCode === ""? "text-rose-50  bg-rose-100" : "hover:bg-rose-300  bg-rose-100"} cursor-pointer`}
                                onClick={CheckPromoCode} >Apply</button>
                                <div className='text-left px-4'>
                                    <div>Available Promocodes</div>
                                    <span>Welcome500 <button className='font-bold p-1 text-xs rounded-lg hover:bg-rose-50  bg-rose-200 cursor-pointer'
                                                        onClick={()=>{if(Totalprice>2000){setPromoCode("Welcome500");setPromoDiscount(500)}}}>{PromoCode!=="Welcome500"?"apply":"✔️Applied"}</button></span>
                                </div>
                        </fieldset>

                        <button className='px-10 py-3 block mx-auto mt-5  rounded border-2 border-rose-800 hover:bg-rose-200 hover:text-rose-800 bg-rose-800 text-rose-50 transition-all duration-100 '
                        >Checkout</button>
                </div>
                
            </section>
        </main>
        </CartProvider>
        <Footer />
    </>
  )
}

export default Cart