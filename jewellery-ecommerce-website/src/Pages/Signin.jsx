// SignUpForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import Nav from "../Components/Nav"
import Footer from "../Components/Footer"
import { useNavigate,useLocation } from 'react-router-dom';

const SignInForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const msg = location.state.msg;

    const [infoMsg, setinfoMsg] = useState(msg?msg:"")
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    setinfoMsg("")
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
		if (data.user) {
			localStorage.setItem('token', data.user)
			localStorage.setItem('userType', data.userType)
            console.log("logged in")
            setinfoMsg('Login successful')
            setTimeout(() => {
                setinfoMsg('Login successful, Redirecting...')
            }, 150);
            setTimeout(() => {
                
                navigate("/")
            }, 400);
		} else  {
      
			setinfoMsg(data.error)
		}
  };

  return (
  <div className='absolute top-0 z-50 w-full'>
    <Nav />
    <form onSubmit={handleSubmit} className='bg-rose-50 p-5 rounded mx-auto mt-2 w-1/3 flex flex-col gap-2'>
       <div className='text-xl text-center'>Login</div>
        <div className='p-2 bg-rose-100 rounded text-center mx-auto'>{infoMsg}</div>
      <div>Email</div>
      <input type="email" name="email" value={formData.email} onChange={handleChange} />
      <div>Password</div>
      <input type="password" name="password" value={formData.password} onChange={handleChange} />
      
      <button type="submit" className='active:bg-rose-400'>Sign In</button>
    </form>
    <Footer />
  </div>
  );
};

export default SignInForm;
