import React, { useEffect } from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import TotalRating from '../Components/TotalRating'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useCart,CartProvider } from '../contexts/cartContext'

// const {CartData} = categories;
const Cart = () => {
  const [user, setuser] = useState("")
  useEffect(() => {
        const token = localStorage.getItem('token')
        
        if (token) {
            const usertoken =""// jwt.decode(token)
            setuser(JSON.parse(atob(localStorage.getItem("token").split(".")[1])).email);
        }
        window.scrollTo(0, 0);
        // getCartData()
    }, [])

    const { cartItems, removeFromCart } = useCart();
    const [PromoCode, setPromoCode] = useState('');
    const [PromoDiscount, setPromoDiscount] = useState(0);
    const [Totalprice,setTotalPrice] = useState(0);
    const [DiscountedPrice,setDiscountedPrice] = useState(0);
    
    useEffect(()=>{

        setPromoDiscount(0);
        setPromoCode("");
        setTotalPrice(cartItems.reduce((total, item) => total + item.price*item.quantity, 0));
        setDiscountedPrice(
           cartItems.reduce((total, item) => {
            const discountedPrice = item.price*item.quantity - (item.price*item.quantity * item.discount) / 100;
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
            <section className='lg:w-10/12 mx-auto flex lg:flex-row flex-col gap-3 relative'>
                <div className=' lg:w-2/3 bg-orange-50 lg:p-5'>
                   
                    
                    <table className='w-full'>
                        <tr className='border-b-2 border-b-orange-200 text-left'>
                            <th className=''>Product</th>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>X</th>
                        </tr>
                        {cartItems.length===0&&(
                            <tr  className='text-center ' ><td  colSpan={5} >No items in Cart</td></tr>
                        )}
                        {cartItems[0]&&cartItems.map((item,key)=>(
                            <tr key={key} className='border-b-2 border-b-orange-100 ' >
                                <td className=''><img src={item.image} className='w-36' alt="" /></td>
                                <td>
                                    <span className='lg:text-xl text-sm'>{item.title}</span>
                                    <div className='text-xs'>Metal: {item.metal}</div>
                                    <div className=' text-xs'>Plating Color: {item.platingColor}</div>
                                </td>
                                <td>
                                    <input type="number" className='w-10 cursor-pointer rounded' value={item.quantity} onChange={()=>{}} name="" id="" />
                                </td>
                                <td>
                                    <div className='py-5 font-semibold flex flex-col w-36'>
                                        <span className=' font-semibold text-xl'>₹{(item.price-(item.price*item.discount)/100).toFixed(2)}</span>
                                        <strike className='text-xs text-orange-700'>₹{item.price}</strike>
                                        <span>You saved ₹{((item.price)-(item.price-(item.price*item.discount)/100)).toFixed(2)}</span>
                                        
                                        <span className='w-fit text-orange-700 border-2 border-orange-800 p-1'>{item.discount+"% OFF"}</span>
                                    </div>
                                </td>
                                <td className='relative'>
                                    <button onClick={() => removeFromCart(item.id)} className="w-8 h-8  bg-orange-200 flex cursor-pointer items-center justify-center rounded-full  group hover:shadow-2xl">
                                        <i class="fa-solid fa-xmark group-hover:scale-125"></i>
                                        <div  className="absolute text-sm -bottom-1 hidden group-hover:block p-1 rounded-md bg-orange-50 border w-24 text-center"> Remove <br /> From Cart</div>
                                    </button>
                                </td>
                            </tr>
                        ))}
                                    
                          
                    </table>
                </div>
                <div className='lg:w-1/3 bg-orange-100 p-5 h-fit sticky top-48'>
                    <h1 className='text-2xl font-bold text-center'>Cart Summary</h1>
                    <table className='table mx-auto'>
                        <tr className=''>
                            <td className='pt-5 px-10'>MRP.</td>
                            <td  className='pt-5 px-10'>{parseFloat(Totalprice).toFixed(2)}</td>
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
                                <span className='bg-orange-200 rounded p-2'>
                                    <span>Applied Coupon </span>
                                    <span className=' italic px-2 mx-3 rounded-lg bg-orange-300'>{PromoCode}</span>
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
                        <fieldset className='border-2 mx-auto w-10/12 border-orange-800 rounded text-center  py-1 relative'>
                            <legend>PromoCode</legend>
                            <input type="text" placeholder='Enter PromoCode' id="" className='px-2 w-11/12 h-10 rounded bg-orange-50 text-xl focus:border-orange-300 focus:ring-orange-300'
                                onChange={(change)=>{setPromoCode(change.target.value)}}
                                value={PromoCode} />
                            <button disabled={!PromoCode}className={`font-bold p-1 rounded-lg absolute right-5 top-2 ${PromoCode === ""? "text-orange-50  bg-orange-100" : "hover:bg-orange-300  bg-orange-100"} cursor-pointer`}
                                onClick={CheckPromoCode} >Apply</button>
                                <div className='text-left px-4'>
                                    <div>Available Promocodes</div>
                                    <span>Welcome500 <button className='font-bold p-1 text-xs rounded-lg hover:bg-orange-50  bg-orange-200 cursor-pointer'
                                                        onClick={()=>{if(Totalprice>3000){setPromoCode("Welcome500");setPromoDiscount(500)}}}>{PromoCode!=="Welcome500"?"apply":"✔️Applied"}</button></span>
                                </div>
                        </fieldset>
                        {user?
                        cartItems.length!==0?
                        <Link className='px-10 py-3 block mx-auto mt-5 text-center rounded border-2 border-orange-800 hover:bg-orange-200 hover:text-orange-800 bg-orange-800 text-orange-50 transition-all duration-100 '
                        to={"/checkout"}    
                        state={
                            {
                                cartItems:cartItems,
                                mrp:parseFloat(Totalprice).toFixed(2),
                                totalSaved:(Totalprice-DiscountedPrice).toFixed(2),
                                promoDiscounts:PromoDiscount,
                                netPay:DiscountedPrice.toFixed(2)-PromoDiscount
                            }}
                            >Proceed Checkout</Link>: <Link to="/jewellery" className='w-fit px-2 py-1 block mx-auto mt-5  rounded border-2 border-orange-800 hover:bg-orange-600 hover:text-orange-50  text-orange-800 transition-all duration-100 '
                            >Add More Items</Link>
                        :  <Link to="/signin" state={"customer"} className='w-fit px-2 py-1 block mx-auto mt-5  rounded border-2 border-orange-800 hover:bg-orange-600 hover:text-orange-50  text-orange-800 transition-all duration-100 '
                        >Please LogIn First</Link>}
                </div>
                
            </section>
        </main>
        </CartProvider>
        <Footer />
    </>
  )
}

export default Cart