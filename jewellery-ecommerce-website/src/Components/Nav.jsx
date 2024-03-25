import React from 'react'
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <div className='nav w-full sticky z-50 top-0'>
        <nav className='mainNav  h-20 bg-blue-300 flex justify-between items-center px-20'>
            <h1 className="logo text-blue-600 text-3xl font-bold">Jew</h1>
            <div className="nlinks flex gap-10 text-xl items-center flex-wrap">
            <input type='text' name='search' placeholder='Search for Jewellery' 
                className='px-3 py-2 w-96'></input>
           <a href='#' >home </a> 
           <a href='#' > Explore</a> 
           <a href='#' >Wishlist </a> 
           <a href='#' >Cart </a> 
           <a href='#' >Account </a> 
           
                <li className="cursor-pointer list-none border-blue-200 border-4 hover:bg-blue-600 px-4 py-2 rounded-2xl hover:text-blue-50 transition transform duration-200">
                  Sign In</li>
            </div>
        </nav>
        <header className="header  h-6 bg-blue-200">do you know, arijit singh is classically trained.</header>

    </div>
  )
}

export default Nav
