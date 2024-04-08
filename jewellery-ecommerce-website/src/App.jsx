import React from "react";
import { Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Products from "./Pages/Products";
import Product from "./Pages/Product";
import Wishlist from "./Pages/Wishlist";
import categories from "./data/demodata";
import Cart from "./Pages/Cart";
const App = () => {
  return (
    <BrowserRouter >
          <Routes>
            <Route index element={<Home />} />
            
            <Route path='/jewellery' element={<Products category={categories.Bangles} all={true} />} />
            <Route path='/jewellery/item/:name' element={<Product />} />
            
            <Route path='/jewellery/pendants' element={<Products category={categories.Pendants} />} />
            <Route path='/jewellery/pendants/:name' element={<Products category={categories.Pendants} />} />

            <Route path='/jewellery/earrings' element={<Products category={categories.Earrings}  />} />
            <Route path='/jewellery/earrings/:name' element={<Products category={categories.Earrings}  />} />

            <Route path='/jewellery/finger-rings' element={<Products category={categories.FingerRings}  />} />
            <Route path='/jewellery/finger-rings/:name' element={<Products category={categories.FingerRings}  />} />

            <Route path='/jewellery/mangalsutra' element={<Products category={categories.Mangalsutra}  />} />
            <Route path='/jewellery/mangalsutra/:name' element={<Products category={categories.Mangalsutra}  />} />

            <Route path='/jewellery/chains' element={<Products category={categories.Chains}  />} />
            <Route path='/jewellery/chains/:name' element={<Products category={categories.Chains}  />} />

            <Route path='/jewellery/nose-pins' element={<Products category={categories.NosePins}  />} />
            <Route path='/jewellery/nose-pins/:name' element={<Products category={categories.NosePins}  />} />

            <Route path='/jewellery/necklace' element={<Products category={categories.Necklace}  />} />
            <Route path='/jewellery/necklace/:name' element={<Products category={categories.Necklace}  />} />

            <Route path='/jewellery/bangles' element={<Products category={categories.Bangles}  />} />
            <Route path='/jewellery/bangles/:name' element={<Products category={categories.Bangles}  />} />

            <Route path='/jewellery/bracelets' element={<Products category={categories.Bracelets}  />} />
            <Route path='/jewellery/bracelets/:name' element={<Products category={categories.Bracelets}  />} />
            
            <Route path='/jewellery/collections' element={<Products category={categories.Bracelets}  />} />
            <Route path='/jewellery/collections/:name' element={<Products category={categories.Bracelets}  />} />

            <Route path='/jewellery/wedding' element={<Products category={categories.Bracelets}  />} />
            <Route path='/jewellery/gifting' element={<Products category={categories.Bracelets}  />} />
            <Route path='/jewellery/best-sellers' element={<Products category={categories.Bracelets}  />} />
            
            
            <Route path='/cart' element={<Cart />} />
            <Route path='/wishlist' element={<Wishlist />} />
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
