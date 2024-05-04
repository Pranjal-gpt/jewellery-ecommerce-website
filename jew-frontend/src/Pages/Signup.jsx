// SignUpForm.jsx
import React, { useState } from 'react';
import Nav from "../Components/Nav"
import Footer from "../Components/Footer"
import { useNavigate,useLocation,Link } from 'react-router-dom';

const SignUpForm = () => {
    const location = useLocation()
    const userType = location.state
    const [acctype, setacctype] = useState(userType)
    const navigate = useNavigate()
    const [infoMsg, setinfoMsg] = useState("")
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    phone:Number,
    address1:'',
    userType:acctype
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

		const response = await fetch('https://jewellery-ecommerce-website.vercel.app/api/user/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				fullname:formData.fullname,
				email:formData.email,
				password:formData.password,
        phone:formData.phone,
        address1:formData.address1,
        userType:acctype
			}),
		})


		const data = await response.json()

		if (data.status === 'ok') {
           navigate("/signin",{state:{msg:data.msg}})
		}else{
            setinfoMsg(data.error)
        }
  };

  return (
  <div className='bg-orange-50'>
    <Nav />
    <form onSubmit={handleSubmit} className='bg-orange-100 px-5 py-3 rounded-xl mx-auto mt-2 lg:w-1/3 flex flex-col gap-1'>
        <div className='text-xl text-center'>Create Account</div>
        <div className='p-2 bg-orange-100 rounded text-center mx-auto'>{infoMsg}</div>
        <div>Full Name</div>
        <input required type="text" name="fullname" value={formData.fullname} onChange={handleChange} className='p-2 rounded-md bg-orange-50' />
        <div>Email</div>
        <input required type="email" name="email" value={formData.email} onChange={handleChange}  className='p-2 rounded-md  bg-orange-50' />
        <div>Password</div>
        <input required type="password" name="password" value={formData.password} onChange={handleChange}  className='p-2 rounded-md bg-orange-50' />
       
        <div>Phone</div>
        <input required type="number" name="phone" value={formData.phone} onChange={handleChange}  className='p-2 rounded-md w-2/3 bg-orange-50' />
        <fieldset className='border border-orange-100 rounded-lg p-2 w-fit'>
        <legend>AccountType</legend>
        <select  type="text"  name="userType" value={acctype} onChange={(e)=>{setacctype(e.target.value)}}  className='p-2 text-orange-300 rounded-md bg-orange-50' >
          
          <option value="customer">customer</option>
        </select>
        </fieldset>
        <div>Address</div>
        <input required type="text" name="address1" value={formData.address1} onChange={handleChange}  className='p-2 rounded-md bg-orange-50' />
        <button type="submit" className='active:bg-orange-400 bg-orange-200 p-2 rounded-xl w-fit mx-auto'>Sign Up</button>

      {/* <div className='mx-auto'>Already have an Account? <Link className='text-orange-600' to={"/signin"}>Sign In</Link></div> */}

    </form>
    <Footer />
  </div>
  );
};

export default SignUpForm;
