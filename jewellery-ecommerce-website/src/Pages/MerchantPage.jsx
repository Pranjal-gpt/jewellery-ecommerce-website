import React, { useEffect, useState } from 'react';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import Pitem from '../Components/Pitem';
import axios from 'axios';
const MerchantPage = () => {
    const [jews, setjews] = useState([])
    const [fname, setfname] = useState("User")
    const [showProd, setshowProd] = useState(false)

    const [showOrders, setshowOrders] = useState(false)
    const [orders, setOrders] = useState([])
    const [selectedStatus, setSelectedStatus] = useState('');
    const [selectedOrderIds, setSelectedOrderIds] = useState([]);
    const getJews = async (e) => {
        e.preventDefault()
        setshowOrders(false)
        const response = await fetch('http://localhost:3000/api/jewellery/bymerchant', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ merchant: JSON.parse(atob(localStorage.getItem("token").split(".")[1])).email }),
        })

        const data = await response.json()
        setjews(Object(data))
        setshowProd(!showProd)

    };
    const getOrders = async () => {
        setshowProd(false)
        const response = await fetch('http://localhost:3000/api/order/bymerchant', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ merchant: JSON.parse(atob(localStorage.getItem("token").split(".")[1])).email }),
        })
        const data = await response.json()

        if (data.status === 'ok') {
            setOrders(data.info)
            setshowOrders(!showOrders)
            console.log(orders)
        } else {
            console.log("error finding order details")

        }
    }
    const getMerchant = async () => {
        const response = await fetch('http://localhost:3000/api/user/mdetails', {
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
          await axios.put('http://localhost:3000/api/order/status', { orderIds: oid, status: st }); // Update status of the selected orders
          // Refresh orders after updating status
          console.log("updated")
          setshowOrders(false)
          getOrders();
        } catch (error) {
          console.error('Error updating status:', error);
        }
      };
    useEffect(() => {
        getMerchant()
    }, [])
    return (
        <>
            <Nav />
            <div className='bg-rose-50 w-11/12 p-10 h-[75vh]  rounded-xl mx-auto mt-5 justify-between gap-10 flex'>
                <div className='relative rounded-xl bg-rose-200 p-5 min-w-56'>
                    <div className='flex gap-5 flex-col sticky top-40'>

                        <h1 className='' >Welcome, <br /> <span className='text-xl font-bold'>{fname}</span> </h1>
                        <button onClick={getJews} className='rounded-xl p-2 hover:bg-rose-200 bg-rose-100'>{!showProd ? "Show your all Products" : "Hide Products"}</button>
                        <button onClick={getOrders} className='rounded-xl p-2 hover:bg-rose-200 bg-rose-100'>{!showOrders?"Manage Orders":"Hide Orders"}</button>
                    </div>

                </div>
                {showProd && 

                <div className={'bg-white flex justify-evenly rounded-xl flex-wrap gap-5 p-5 overflow-auto h-[65vh]'}>
                    {jews.map((item) => (
                        <div className='p-2 rounded w-fit hover:shadow-xl shadow-md bg-rose-50'>
                            <img src={item.images[0]} alt="img" className='w-60' />
                            <div className='font-semibold text-xl'>{item.title.length > 20 ? item.title.substring(0, 20) + '...' : item.title}</div>
                            <div className='font-semibold'>₹{item.price}</div>
                            <button className='text-sm p-1 rounded-md bg-rose-100 hover:bg-rose-200 text-center block w-full'>See Order Report</button>
                        </div>
                    ))}
                </div>
                } 

                {showOrders &&
                   <table cellPadding={15} cellSpacing={5}>
                   <thead>
                     <tr className='bg-rose-100 '>
                       <th>Products</th>
                       <th>Status</th>
                       <th>Shipping Address</th>
                       <th>Total Amount</th>
                       <th>Order Date</th>
                     </tr>
                   </thead>
                   <tbody>
                     {orders.length === 0 && <tr><td colSpan="5">No Orders Placed</td></tr>}
                     {orders.map((order) => (
                       <tr key={order._id} className='bg-rose-50'>
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
                       </tr>
                     ))}
                   </tbody>
                 </table>
                 
                }
            </div>
            <Footer />

        </>

    );
};

export default MerchantPage;
