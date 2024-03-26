import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Pages/Home'
import About from './Pages/About'
const App = () => {
  return (
        <BrowserRouter >
          <Routes>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </BrowserRouter>
    
  )
}
export default App
