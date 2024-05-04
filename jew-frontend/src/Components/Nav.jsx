import React from "react";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import elegance from '../assets/elegence.png'
import { WishlistProvider,useWishlist } from "../contexts/wishlistContext";
import {useCart} from '../contexts/cartContext'

const Nav = () => {
  const {clearWishlist} = useWishlist()
  const {clearCart} = useCart()
  const [user, setuser] = useState("")
  const [accType, setaccType] = useState("")
  const Menu = [
    {
      id: 1,
      name: "ALL JEWELLERY",
      selfLink:"/jewellery",
      link: [
        {
          id: 1,
          name: "ALL JEWELLERY",
          link: "/jewellery",
        },
        {
          id: 2,
          name: "PENDANTS",
          link: "/jewellery/pendants",
        },
        {
          id: 3,
          name: "EARRINGS",
          link: "/jewellery/earrings",
        },
        {
          id: 4,
          name: "FINGER RINGS",
          link: "/jewellery/finger-rings",
        },
        {
          id: 5,
          name: "MANAGALSUTRA",
          link: "/jewellery/mangalsutra",
        },
        {
          id: 6,
          name: "CHAINS",
          link: "/jewellery/chains",
        },
        {
          id: 7,
          name: "NOSE PINS",
          link: "/jewellery/nose-pins",
        },
        {
          id: 8,
          name: "NECKLACES",
          link: "/jewellery/necklace",
        },
        {
          id: 9,
          name: "BANGLES",
          link: "/jewellery/bangles",
        },
        {
          id: 10,
          name: "BRACELETS",
          link: "/jewellery/bracelets",
        },
      ],
    },

    {
      id: 2,
      name: "PENDANTS",
      link:"/jewellery/pendants",
      
    },
    {
      id: 3,
      name: "EARRINGS",
      link:"/jewellery/earrings",
    },
    {
      id: 4,
      name: "RINGS",
      link:"/jewellery/finger-rings",
    },
    {
      id: 5,
      name: "WEDDING",
      link: "/jewellery/wedding",
    },
    {
      id: 6,
      name: "GIFTING",
      link: "/jewellery/gifting",
    },
    {
      id: 7,
      name: "COLLECTIONS",
      selfLink:"/jewellery/collections",
      link: [
        {
          id: 1,
          name: "PREETY IN PINK",
          link: "/jewellery/collections/pretty-in-pink",
        },
        {
          id: 2,
          name: "STRING IT",
          link: "/jewellery/collections/string-it",
        },
        {
          id: 3,
          name: "JOY OF DRESSINGS",
          link: "/jewellery/collections/joy-of-dressing",
        },
      ],
    },
    {
      id: 8,
      name: "BESTSELLERS",
      link: "/jewellery/collections/best-sellers",
    },
  ];
  useEffect(() => {
		const token = localStorage.getItem('token')
		const userType = token&&JSON.parse(atob(localStorage.getItem("token").split(".")[1])).userType
    if (userType) {
      setaccType(userType)
    }
		if (token) {
			const usertoken =""// jwt.decode(token)
      setuser(JSON.parse(atob(localStorage.getItem("token").split(".")[1])).email);
		}
    else {
      localStorage.removeItem('token')
      console.log("user not logged in");
    } 
	}, [])
  const logout = ()=>{
    localStorage.removeItem('token')
    clearWishlist()
    clearCart()
    window.location="/"
  }
  return (
    <div className="nav w-full sticky z-50 top-0">
      <nav className="mainNav  lg:h-20 md:h-fit bg-orange-100 flex lg:flex-row flex-col justify-between items-center lg:px-20 md:px-1">
        <h1 className="logo text-orange-600 text-3xl font-bold">
          <img src={elegance} className="lg:w-52 w-36" alt="" />
        </h1>
        <div className="nlinks pb-0.5 flex gap-5 lg:gap-10 lg:text-xl  items-center flex-wrap">
            
          <Link to={"/#"}>home </Link>
          <Link to={"/jewellery"}> Explore</Link>
          <WishlistProvider>
            <Link to={"/wishlist"}>Wishlist </Link>
          </WishlistProvider>
          {accType!="merchant"&&
          <Link className='group transition-all duration-500 flex items-center justify-between gap-2 rounded-full  px-5 py-2 shadow-lg bg-gradient-to-br from-orange-200 via-orange-300 to-orange-600'
            to={"/cart"}>
              <span className='hidden group-hover:block mb-1'>Cart </span>
              <i class="fa-solid fa-cart-shopping"></i>
          </Link>
}
          <div  className="relative bg-orange-200 cursor-pointer group flex items-center justify-center rounded-full hover:shadow-2xl">
                  <div class="group-hover:bg-orange-200 px-3 py-2 rounded-md translate-all ease-in-out duration-300 group">
                    Account</div>
                  
                  <div className="absolute p-3 text-xl z-10 w-60 shadow-xl top-10 -right-5 hidden  rounded-md bg-orange-50 hover:bg-orange-200 border text-center group-hover:block">
                    <div className="font-bold text-xl">My Account</div>
                    {user?<div> <small>logged in user</small>
                      <small className="block">{(JSON.parse(atob(localStorage.getItem("token").split(".")[1])).name)}</small>
                      
                      {accType=="merchant"?
                      <div>
                      <Link to={"/merchant-dashboard"} className='px-2 py-1 block mx-auto mt-5  rounded border-2 border-orange-800 hover:bg-orange-600 hover:text-orange-50  text-orange-800 transition-all duration-100 '>
                      Dashboard</Link>
                      <Link to={"/addjew"} className='px-2 py-1 block mx-auto mt-5  rounded border-2 border-orange-800 hover:bg-orange-600 hover:text-orange-50  text-orange-800 transition-all duration-100 '>
                      Add Product</Link>
                      </div>
                      :<Link to={"/orders"} className='px-2 py-1 block mx-auto mt-5  rounded border-2 border-orange-800 hover:bg-orange-600 hover:text-orange-50  text-orange-800 transition-all duration-100 '>
                      Orders</Link>
                      }
                      {/* <Link to={"/orders"} className='px-2 py-1 block mx-auto mt-5  rounded border-2 border-orange-800 hover:bg-orange-600 hover:text-orange-50  text-orange-800 transition-all duration-100 '>
                        My Orders</Link> */}
                      <button onClick={logout} className='px-2 py-1 block mx-auto mt-5  rounded border-2 border-orange-800 hover:bg-orange-600 hover:text-orange-50  text-orange-800 transition-all duration-100 '>
                        Logout</button>
                    </div>:(<div>

                        <small className="">Login to access your <b>Customer</b> Account</small>
                        <div className="flex gap-4 mb-5">
                            <Link to="/signin" state={"customer"} className='px-2 py-1 block mx-auto mt-5  rounded border-2 border-orange-800 hover:bg-orange-600 hover:text-orange-50  text-orange-800 transition-all duration-100 '
                                >LogIn</Link>
                            <Link  to="/signup" state={"customer"} className='px-2 py-1 block mx-auto mt-5  rounded border-2 border-orange-800 hover:bg-orange-600 hover:text-orange-50 bg-orange-800 text-orange-50 transition-all duration-100 '
                                >SignUp</Link>
                        </div>
                        <small className="">Login to access your <b>Merchant</b> Account</small>
                        <div className="flex gap-4 ">
                            <Link  to="/signin" state={"merchant"} className='px-2 py-1 block mx-auto mt-5  rounded border-2 border-orange-800 hover:bg-orange-600 hover:text-orange-50  text-orange-800 transition-all duration-100 '
                                >LogIn</Link >
                        </div>
                    </div>)}
                  </div>
              
          </div>
        </div>
      </nav>
      <header className="header lg:px-16 px-3 text-lg  lg:h-10 md:h-fit bg-orange-200 flex lg:flex-nowrap flex-wrap items-center justify-between">
        {Menu.map((litem) => (
          <div className="relative group hover:bg-orange-300 h-full flex items-center lg:w-full w-fit justify-center">
            <Link
              to={Array.isArray(litem.link) ? litem.selfLink : litem.link}
              key={litem.id}
              className="h-full w-full flex items-center justify-center"
            >
              {litem.name}
            </Link>

            {Array.isArray(litem.link) && (
              <div className="hidden  bg-orange-200 absolute top-10 min-w-36 group-hover:flex flex-col ">
                {litem.link.map((slitem) => (
                  <Link
                    to={slitem.link}
                    key={slitem.id}
                    className="hover:bg-orange-300 px-2 py-3"
                  >
                    {slitem.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </header>
    </div>
  );
};

export default Nav;
