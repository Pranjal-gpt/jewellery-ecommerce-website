import React from 'react'
import Nav from '../Components/Nav'
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <>
    <Nav  />
      <div>About</div>
      <Link to="/" >Goto Homepage</Link>
    </>
  )
}

export default About