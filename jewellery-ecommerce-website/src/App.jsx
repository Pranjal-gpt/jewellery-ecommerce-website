import React from "react";
import { Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Products from "./Pages/Products";
import Product from "./Pages/Product";

const App = () => {
  return (
    <BrowserRouter >
          <Routes>
            <Route index element={<Home />} />
            <Route path='/jewellery' element={<Products />} />
            <Route path='/jewellery/:name' element={<Product />} />
            <Route path='/about' element={<About />} />
            <Route path='/delivery-info' element={<About />} />
            <Route path='/payment-option' element={<About />} />
            <Route path='/track-order' element={<About />} />
            <Route path='/return' element={<About />} />
            <Route path='/offers' element={<About />} />
            <Route path='/FAQ' element={<About />} />
            <Route path='/contact' element={<About />} />
           
          </Routes>
        </BrowserRouter>

  );
};

export default App;
