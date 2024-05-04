import React, { useEffect, useState } from 'react';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import axios from 'axios';
import Pitem from '../Components/Pitem';
const MerchantPage = () => {
    const [jews, setjews] = useState([])
    const [fname, setfname] = useState("User")
    const [showProd, setshowProd] = useState(false)
    const [showOrders, setshowOrders] = useState(true)
    const [orders, setOrders] = useState([])
    const [search, setsearch] = useState('')

    const [infoMsg1, setinfoMsg1] = useState('');
    const [infoMsg2, setinfoMsg2] = useState('');

    const [selectedStatus, setSelectedStatus] = useState('');
    const [selectedOrderIds, setSelectedOrderIds] = useState([]);
    const getJews = async (callback) => {
        const response = await fetch('https://jewellery-ecommerce-website.vercel.app/api/jewellery/all?category=all&search='+search)

        const data = await response.json()
        setjews(Object(data.reverse()));
        callback()

    };
    const handleSearch = () => {
        getJews()
    }
    const getOrders = async () => {
        // setshowProd(false)
        const response = await fetch('https://jewellery-ecommerce-website.vercel.app/api/order/bymerchant', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ merchant: JSON.parse(atob(localStorage.getItem("token").split(".")[1])).email }),
        })
        const data = await response.json()

        if (data.status === 'ok') {
            setOrders(data.info.reverse())
        } else {
            console.log("error finding order details")

        }
    }
    const getMerchant = async () => {
        const response = await fetch('https://jewellery-ecommerce-website.vercel.app/api/user/mdetails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ merchant: JSON.parse(atob(localStorage.getItem("token").split(".")[1])).email }),
        })
        const data = await response.json()

        if (data.status === 'ok') {
            setfname(data.info[0].fullname)
        } else {
            console.log("error finding merchant details")

        }
    }
    const handleStatusChange = async (oid,st) => {
        try {
          await axios.put('https://jewellery-ecommerce-website.vercel.app/api/order/status', { orderIds: oid, status: st }); // Update status of the selected orders
          // Refresh orders after updating status
          console.log("updated")
          setinfoMsg1('Order Status updated successfully');
            setTimeout(() => {  
                setinfoMsg1('')
            }, 4000);
          getOrders();
        } catch (error) {
          console.error('Error updating status:', error);
        }
    };
    const deleteOrder = async(orderId) =>{
        
        const response = await fetch('https://jewellery-ecommerce-website.vercel.app/api/order/delete', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ orderId })
        })
        const data = await response.json()

        if (data.status === 'ok') {
            console.log("delted")
            setinfoMsg1('Order deleted successfully');
            setTimeout(() => {
                setinfoMsg1('')
            }, 4000);
          getOrders();

        }else{
            console.log("error finding merchant details")

        }
    }
    const deleteJewellery = async (id) => {
        try {
            await axios.delete(`https://jewellery-ecommerce-website.vercel.app/api/jewellery/delete/${id}`)
                .then(response => {
                    if (response.status === 200 ) {
                        setinfoMsg2('Jewellery deleted successfully');
                        setTimeout(() => {
                            setinfoMsg2('')
                        }, 4000);
                    }
                })
                .catch(error => {
                    console.error('Error deleting jewellery:', error);
                });
            getJews(()=>{console.log("refresh jewelleries")});
        } catch (error) {
            console.error('Error deleting jewellery:', error);
        }
    };
    useEffect(() => {
        getMerchant()
        getOrders()
    }, [])

   
    return (
        <>
            <Nav />
            <div className='bg-orange-50 lg:w-11/12 lg:p-10   rounded-xl mx-auto mt-5 justify-between lg:gap-10 flex lg:flex-row flex-col'>
                <div className='relative rounded-xl bg-orange-200 p-5 lg:min-w-56'>
                    <div className='flex gap-5 flex-col sticky top-40'>

                        <h1 className='' >Welcome, <br /> <span className='text-xl font-bold'>{fname}</span> </h1>
                        <button onClick={()=>{getJews(()=>{setshowProd(!showProd)})}} className='rounded-xl p-2 hover:bg-orange-200 bg-orange-100'>{!showProd ?  jews.length===0?"Total Products : Click to Refresh":"Total Jewelleries: "+jews.length+" Show": "Hide Jewelleries: "+jews.length}</button>
                        <button onClick={getOrders} className='rounded-xl p-2 hover:bg-orange-200 bg-orange-100'>Orders : {orders.length}</button>

                    </div>

                </div>
                <div className='w-full'>



                <div className=' overflow-y-auto max-h-96 '>
                    <div className='text-2xl font-semibold text-center'>Orders </div>
                   <table className='w-full' cellPadding={2} cellSpacing={1}>
                   <thead>
                     <tr className='bg-orange-100 '>
                       <th>Products</th>
                       <th>Status</th>
                       <th>Shipping Address</th>
                       <th>Total Amount</th>
                       <th>Order Date</th>
                       <th>Action</th>
                     </tr>
                   </thead>
                   <tbody className='lgLtext-xl text-xs'>
                     {orders.length === 0 && <tr><td colSpan="5">No Orders Placed</td></tr>}
                     {orders.map((order) => (
                       <tr key={order._id} className='bg-orange-50 border-b border-b-orange-200'>
                         <td className='font-semibold'>{order.products.map((p, index) => <span key={index} className='block pt-1'>{index+1}. {p}</span>)}</td>
                         <td className='font-semibold'>
                           {/* Dropdown menu for status update */}
                           <select value={order.status} onChange={(e) => handleStatusChange(order._id, e.target.value)}>
                             <option value="pending">Pending</option>
                             <option value="processing">Processing</option>
                             <option value="shipped">Shipped</option>
                             <option value="delivered">Delivered</option>
                           </select>
                         </td>
                         <td className='font-semibold'>{order.shippingAddress}</td>
                         <td className='font-semibold'>₹{order.totalAmount}</td>
                         <td className='font-semibold'>{order.orderDate}</td>
                         <td className='font-semibold'><button onClick={()=>{deleteOrder(order.orderId)}} className='p-2 rounded-lg bg-orange-100 hover:bg-orange-200'>Delete</button></td>
                         
                       </tr>
                     ))}
                   </tbody>
                 </table>
                </div>
                 {infoMsg1!=""&&<div className='text-center w-fit mt-3 text-orange-700 bg-orange-100 rounded-lg px-4 mb-2  mx-auto'>{infoMsg1} <i class="fa fa-times cursor-pointer hover:scale-125" onClick={()=>{setinfoMsg1("")}} aria-hidden="true"></i></div>}
                 

                {showProd && <div>
                    <div className='text-2xl font-semibold text-center  py-5'>Your Products </div>
                    {infoMsg2!=""&&<div className='text-center  text-orange-700 bg-orange-100 rounded-lg px-4 mb-2 w-fit mx-auto'>{infoMsg2} <i class="fa fa-times cursor-pointer hover:scale-125" onClick={()=>{setinfoMsg2("")}} aria-hidden="true"></i></div>}
                    <div className='relative w-fit mx-auto'>
                        <input 
                        value={search}
                        onChange={(e)=>{setsearch(e.target.value) ; e.target.value==""&&getJews(()=>{console.log("refresh jewellery")})}}
                        onKeyDown={(e) => e.key === 'Enter'&&  handleSearch()}
                        type='text' name='search' 
                        placeholder='Search for Jewellery' 
                        className='px-3 py-2 w-72 focus:shadow-2xl hover:shadow-lg active:outline-orange-600 hover:w-[22rem] transition-all duration-500 ease-in focus:w-[22rem] focus:outline-none rounded  placeholder-orange-300'>
                        </input>
                        <i onClick={handleSearch} 
                        
                        class="fa-solid fa-magnifying-glass absolute cursor-zoom-in right-3 top-1/2 -translate-y-1/2 bg-orange-300 text-white hover:scale-125 pl-1 rounded-full p-1 ">
                        </i>
                    </div>
                <div className={'bg-white flex justify-evenly rounded-xl flex-wrap gap-2 p-2 overflow-auto h-[65vh]'}>
                    {jews.map((item) => (
                        <div className='group relative' key={item._id}>
                            <Pitem product={item} size={"lg:w-60 lg:h-60 h-52 object-cover w-96"} MerchantMode />
                            <div className='flex items-end bottom-28 left-16 absolute'>
                                <button onClick={() => deleteJewellery(item._id)}
                                className='hidden group-hover:inline-block bg-orange-200 hover:bg-red-300 hover:text-xl hover:pb-4 h-fit transition-all duration-300 rounded-t-full px-5 ' title='Delete'><i class="fa-regular fa-trash-can"></i></button>
                                <button onClick={() => { }}
                                 className='hidden group-hover:inline-block bg-orange-200 hover:bg-blue-200 hover:text-xl hover:pb-4 h-fit transition-all duration-300 rounded-t-full px-5'  title='Edit'><i class="fa-regular fa-pen-to-square"></i></button>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
                } 
                </div>

            </div>
            <Footer />

        </>

    );
};

export default MerchantPage;
