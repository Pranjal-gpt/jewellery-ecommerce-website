import React from "react";
import { Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from "./Pages/Products";
import Product from "./Pages/Product";
import Wishlist from "./Pages/Wishlist";
import Cart from "./Pages/Cart";
import { CartProvider } from "./contexts/cartContext";
import { WishlistProvider } from "./contexts/wishlistContext";
import SignUpForm from "./Pages/Signup";
import SignInForm from "./Pages/Signin";
import Addjewellery from "./Pages/Addjewellery"
import MerchantPage from "./Pages/MerchantPage"
import Checkout from "./Pages/Checkout";
import Orders from "./Pages/Orders";
const App = () => {
  return (
    <BrowserRouter >
        <WishlistProvider>
      <CartProvider>



          <Routes>
            <Route index element={<Home />} />

            <Route path='/signup' element={<SignUpForm />} />
            <Route path='/signin' element={<SignInForm />} />

            <Route path='/jewellery' element={<Products category={"all"} all={true} />} />

            <Route path='/addjew' element={<Addjewellery />} />
            <Route path='/merchant-dashboard' element={<MerchantPage />} />

            <Route path='/jewellery/item/:name' element={<Product />} />

            <Route path='/jewellery/pendants' element={<Products category={"Pendants"} />} />
            <Route path='/jewellery/pendants/:name' element={<Products category={"Pendants"} />} />

            <Route path='/jewellery/earrings' element={<Products category={"Earring"} />} />
            <Route path='/jewellery/earrings/:name' element={<Products category={"Earring"} />} />

            <Route path='/jewellery/finger-rings' element={<Products category={"Ring"} />} />
            <Route path='/jewellery/finger-rings/:name' element={<Products category={"Ring"} />} />

            <Route path='/jewellery/mangalsutra' element={<Products category={"Mangalsutra"} />} />
            <Route path='/jewellery/mangalsutra/:name' element={<Products category={"Mangalsutra"} />} />

            <Route path='/jewellery/chains' element={<Products category={"Chains"} />} />
            <Route path='/jewellery/chains/:name' element={<Products category={"Chains"} />} />

            <Route path='/jewellery/nose-pins' element={<Products category={"Nose-Pins"} />} />
            <Route path='/jewellery/nose-pins/:name' element={<Products category={"Nose-Pins"} />} />

            <Route path='/jewellery/necklace' element={<Products category={"Necklace"} />} />
            <Route path='/jewellery/necklace/:name' element={<Products category={"Necklace"} />} />

            <Route path='/jewellery/bangles' element={<Products category={"Bangles"} />} />
            <Route path='/jewellery/bangles/:name' element={<Products category={"Bangles"} />} />

            <Route path='/jewellery/bracelets' element={<Products category={"Bracelets"} />} />
            <Route path='/jewellery/bracelets/:name' element={<Products category={"Bracelets"} />} />

            <Route path='/jewellery/collections' element={<Products category={"Collections"} />} />
            <Route path='/jewellery/collections/:name' element={<Products category={"Collections"} />} />

            <Route path='/jewellery/wedding' element={<Products category={"Wedding"} />} />
            <Route path='/jewellery/gifting' element={<Products category={"Gifting"} />} />
            <Route path='/jewellery/best-sellers' element={<Products category={"Best Sellers"} />} />

            <Route path='/checkout' element={ <Checkout /> } />
            <Route path='/orders' element={ <Orders /> } />
            <Route path='/cart' element={ <Cart /> } />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/about' element={<About />} />
            <Route path='/delivery-info' element={<About />} />
            <Route path='/payment-option' element={<About />} />
            <Route path='/track-order' element={<Orders />} />
            <Route path='/return' element={<About />} />
            <Route path='/offers' element={<About />} />
            <Route path='/FAQ' element={<About />} />
            <Route path='/contact' element={<About />} />

          </Routes>
      </CartProvider>
        </WishlistProvider>
    </BrowserRouter>

  );
};

export default App;
