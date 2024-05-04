
import { useEffect,useState } from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import { CartProvider } from '../contexts/cartContext'
import { useLocation, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Checkout = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const data = location.state
  const [addr, setaddr] = useState("")
  const getuser = async ()=>{
    const response = await fetch('https://jewellery-ecommerce-website.vercel.app/api/user/udetails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({user:JSON.parse(atob(localStorage.getItem("token").split(".")[1])).email}),
    })
    const data = await response.json()

    if (data.status === 'ok') {
        setaddr(data.info[0])
    }else{
        console.log("error finding merchant details")

    }
  }
  const handleCheckout = async (amount) => {
    try {
      // Send the order data to the backend
      const {data:{key}} = await axios.get('https://jewellery-ecommerce-website.vercel.app/api/payment/getkey')
    const {data:{order}} = await axios.post('https://jewellery-ecommerce-website.vercel.app/api/payment/checkout', {
      amount
    })

      const response = await axios.post('https://jewellery-ecommerce-website.vercel.app/api/order/place', { 
        email:JSON.parse(atob(localStorage.getItem("token").split(".")[1])).email,
        products:(data.cartItems).map((item)=>item.title.length >25 ? item.title.substring(0,25) + '...' : item.title),
        totalAmount:data.netPay,
        shippingAddress:addr.address1
       });

      const options = {
        key:key,
        amount: order.amount,
        currency: "INR",
        name: "Elegance Jewellery",
        description: "Jewelleries just for you",
        image: "https://i.postimg.cc/mPVWSprM/image.png",
        order_id: order.id,
        callback_url: "https://jewellery-ecommerce-website.vercel.app/api/payment/paymentverification",
        prefill: {
            name: addr.fullname,
            email: addr.email,
            contact: addr.phone
        },
        notes: {
            "address": addr.address1
        },
        theme: {
            "color": "#FED7AA"
        }
    };
    // console.log(options.key)
    const razor = new window.Razorpay(options);
    console.log('Order placed:', response.data.status);
    razor.open()
   
      // navigate("/orders")
      // Optionally, redirect to a confirmation page or show a success message
    } catch (error) {
      // setErrorMessage('Failed to place order');
      console.error('Error placing order:', error);
    }
  };
useEffect(()=>{ 
getuser()
},[])
  return (
    <>
      <CartProvider>
        <Nav />
        <main className='lg:w-2/3 my-5 mx-auto bg-orange-50 rounded-lg p-3'>
          <h1 className='text-center text-4xl p-4 font-semibold'>Checkout</h1>
          <div className='flex lg:flex-row flex-col justify-between gap-3'>
            <section className='p-5 bg-orange-100 lg:w-1/2'>
              <h1 className='text-xl'>Choose Shipping Address</h1>
              <div className='border border-orange-200 rounded-lg p-3 flex flex-col gap-5'>
                <div>Name: <span>{addr.fullname}</span></div>
                <div>contact: <span>{addr.phone}</span></div>
                <div><input type="radio" name="addr" id="addr" checked /> Address1: <span>{addr.address1}</span></div>

                <div>Address2: <span>{addr.address2==""?<button className='p-2 rounded-lg bg-orange-200'>Add Another</button>:<span><input type="radio" name="addr" id="addr" />{addr.address2}</span>}</span></div>

              </div>
            </section>
            <div className='lg:w-1/2 bg-orange-100 p-5 h-fit sticky top-48'>
                    <h1 className='text-2xl font-bold text-center'>Order Summary</h1>
                    <table className='table mx-auto'>
                        <tr className=''>
                            <td className='pt-5 px-10'>MRP.</td>
                            <td  className='pt-5 px-10'>{data.mrp}</td>
                        </tr>
                        <tr>
                            <td  className='pb-5 px-10'>Saved</td>
                            <td  className='pb-5 px-10'>{data.totalSaved+data.promoDiscounts}</td>
                        </tr>
                        <tr className='text-xl font-semibold'>
                            <td  className='py-5 px-10'>Net Pay</td>
                            <td  className='py-5 px-10'>{data.netPay}</td>
                        </tr>
                    </table>
                        <fieldset className='border-2 mx-auto w-10/12 border-orange-800 rounded text-center  p-2 relative'>
                            <legend>Items Overview</legend>
                            {data.cartItems.map((item)=>( 
                            <div className='flex my-1  gap-1 border w-72 mx-auto py-1 px-2 rounded-md border-orange-200'>
                              <img src={item.image} className='w-10 h-10 rounded-md' alt="" />
                              <div className='text-left'>
                                <div className='text-sm'>
                                {item.title.length >30 ? item.title.substring(0,35) + '...' : item.title}
                                  </div>
                                <small className='text-xs'>{item.id}</small>
                              </div>
                            </div>
                            ))}
                        </fieldset>

                        <button className='px-10 py-3 w-full block mx-auto mt-5 text-center rounded border-2 border-orange-800 hover:bg-orange-200 hover:text-orange-800 bg-orange-800 text-orange-50 transition-all duration-100 '
                            onClick={()=>handleCheckout(data.netPay)}
                            >Pay & Place Order</button>
                        <Link className=' py-1 px-9 block w-fit mx-auto mt-5 text-center rounded border-2 border-orange-800 hover:bg-orange-200 hover:text-orange-800 bg-orange-900 text-orange-50 transition-all duration-100 '
                         to={"/cart"} >Cancel</Link>
                </div>
          </div>
        </main>
        <Footer />
      </CartProvider>
    </>
  )
}

export default Checkout