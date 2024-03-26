import React from 'react'
import Nav from '../Components/Nav'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <>
      <Nav />
      <div>Home</div>
      <Link to="/about" >Goto About Section</Link>
    </>
  )
}

export default Home