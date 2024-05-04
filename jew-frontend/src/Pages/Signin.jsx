// SignUpForm.jsx
import React, { useState } from 'react';
import Nav from "../Components/Nav"
import Footer from "../Components/Footer"
import { useNavigate,useLocation,Link } from 'react-router-dom';

const SignInForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location.state)
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
		const response = await fetch('https://jewellery-ecommerce-website.vercel.app/api/user/signin', {
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
            console.log("logged in")
            setinfoMsg('Login successful')
            setTimeout(() => {
                setinfoMsg('Login successful, Redirecting...')
            }, 150);
            setTimeout(() => {
                
                navigate("/");
                window.location.reload();
            }, 400);
		} else  {
      
			setinfoMsg(data.error)
		}
  };

  return (
  <div className='absolute bg-orange-50 top-0 z-50 w-full'>
    <Nav />
    <form onSubmit={handleSubmit} className='bg-orange-100 mt-32 mb-40 p-5 rounded-2xl mx-auto lg:w-1/3 flex flex-col gap-2'>
       <div className='text-xl text-center'>Login</div>
        <div className='p-2 bg-orange-100 rounded text-center mx-auto'>{infoMsg}</div>
      <div>Email</div>
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Enter your Email' className='rounded-lg p-3 placeholder:text-orange-200 bg-orange-50' />
      <div>Password</div>
      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder='Enter your Password' className='rounded-lg p-3 placeholder:text-orange-200 bg-orange-50' />
      
      <button type="submit" className='active:bg-orange-400 bg-orange-200 p-2 rounded-xl w-fit mx-auto'>Sign In</button>
      <div className='mx-auto'>Don't have an Account? <Link className='text-orange-600' to={"/signup"}>Sign Up</Link></div>
    </form>
    <Footer />
  </div>
  );
};

export default SignInForm;
