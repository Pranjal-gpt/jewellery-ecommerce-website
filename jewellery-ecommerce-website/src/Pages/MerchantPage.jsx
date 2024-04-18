import React, { useEffect, useState } from 'react';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import Pitem from '../Components/Pitem';

const JewelryForm = () => {
  const [jews, setjews] = useState([])
  const [fname, setfname] = useState("User")
  const getJews = async (e) => {
    e.preventDefault()

		const response = await fetch('http://localhost:3000/api/jewellery/bymerchant', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({merchant:JSON.parse(atob(localStorage.getItem("token").split(".")[1])).email}),
		})

		const data = await response.json()
        setjews(Object(data))
        console.log(jews)
		// if (data.status === 'ok') {
        //  setinfoMsg(data.infoMsg)
        //  resetForm()
		// }else{
        //     setinfoMsg(data.infoMsg)
        // }
  };
  const getMerchant = async ()=>{
        const response = await fetch('http://localhost:3000/api/user/mdetails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({merchant:JSON.parse(atob(localStorage.getItem("token").split(".")[1])).email}),
        })
        const data = await response.json()

        if (data.status === 'ok') {
            setfname(data.info[0].fullname)
        }else{
            console.log("error finding merchant details")

        }
    }
  useEffect(()=>{ 
    getMerchant()
  },[])
  return (
    <div className="">
        <Nav /> 
        <div className='bg-rose-50 w-2/3 p-10 rounded-xl mx-auto mt-5 flex flex-col'>
            <div className='flex justify-between p-5'>
                <h1>Welcome, <span className='text-xl font-bold'>{fname}</span> </h1>           
                <button onClick={getJews} className='rounded-xl p-2 hover:bg-rose-200 bg-rose-100'>Show your all Products</button>

            </div>
            <div className='bg-white flex justify-evenly flex-wrap gap-5 p-5'>
            {jews.map((item)=>(
                <div className='p-2 rounded w-fit hover:shadow-xl shadow-md bg-rose-50'>
                    <img src="https://i.ibb.co/tqqnQCq/jfu.png" alt="img" className='w-60' />
                    <div className='font-semibold text-xl'>{item.title}</div>
                    <div className='font-semibold'>₹{item.price}</div>
                    <button className='text-sm p-1 rounded-md bg-rose-100 hover:bg-rose-200 text-center block w-full'>See Order Report</button>
                </div>
            ))}</div>
        </div>
        
        <Footer />

    </div>
    
  );
};

export default JewelryForm;
