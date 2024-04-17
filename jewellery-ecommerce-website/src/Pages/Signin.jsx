// SignUpForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import Nav from "../Components/Nav"
import Footer from "../Components/Footer"
const SignInForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

		const response = await fetch('http://localhost:3000/api/user/signin', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email:formData.email,
				password:formData.password,
			}),
		})
        
		const data = await response.json()

		if (data.status === 'ok') {
			window.location.herf="/signin"
		}
  };

  return (
  <>
    <Nav />
    <form onSubmit={handleSubmit} className='bg-rose-50 p-5 rounded mx-auto mt-2 w-1/3 flex flex-col gap-2'>
      <div>Email</div>
      <input type="email" name="email" value={formData.email} onChange={handleChange} />
      <div>Password</div>
      <input type="password" name="password" value={formData.password} onChange={handleChange} />
      <button type="submit">Sign In</button>
    </form>
    <Footer />
  </>
  );
};

export default SignInForm;
