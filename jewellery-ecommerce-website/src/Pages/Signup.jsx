// SignUpForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import Nav from "../Components/Nav"
import Footer from "../Components/Footer"
const SignUpForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    phone:'',
    address1:''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

		const response = await fetch('http://localhost:3000/api/user/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				fullname:formData.fullname,
				email:formData.email,
				password:formData.password,
                phone:formData.phone,
                address1:formData.address1
			}),
		})


		const data = await response.json()

		if (data.status === 'ok') {
            window.location="/signin"
		}
  };

  return (
  <>
    <Nav />
    <form onSubmit={handleSubmit} className='bg-rose-50 p-5 rounded mx-auto mt-2 w-1/3 flex flex-col gap-2'>
        <div>Full Name</div>
      <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} />
      <div>Email</div>
      <input type="email" name="email" value={formData.email} onChange={handleChange} />
      <div>Password</div>
      <input type="password" name="password" value={formData.password} onChange={handleChange} />
      <div>Phone</div>
      <input type="number" name="phone" value={formData.phone} onChange={handleChange} />
      <div>Address</div>
      <input type="text" name="address1" value={formData.address1} onChange={handleChange} />
      <button type="submit">Sign Up</button>
    </form>
    <Footer />
  </>
  );
};

export default SignUpForm;
