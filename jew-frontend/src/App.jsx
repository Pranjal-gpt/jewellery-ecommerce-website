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
import Collections from "./Pages/Collections";
import PaymentSuccess from "./Pages/PaymentSuccess";
import TnC from "./Pages/TnC";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import FAQ from "./Pages/FAQ";
import Offers from "./Pages/Offers";
import DeliveryInfo from "./Pages/DeliveryInfo";
import PaymentInfo from "./Pages/PaymentInfo";
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
            <Route path='/jewellery/earrings' element={<Products category={"Earring"} />} />
            <Route path='/jewellery/finger-rings' element={<Products category={"Ring"} />} />
            <Route path='/jewellery/mangalsutra' element={<Products category={"Mangalsutra"} />} />
            <Route path='/jewellery/chains' element={<Products category={"Chains"} />} />
            <Route path='/jewellery/nose-pins' element={<Products category={"Nose-Pins"} />} />
            <Route path='/jewellery/necklace' element={<Products category={"Necklace"} />} />
            <Route path='/jewellery/bangles' element={<Products category={"Bangles"} />} />
            <Route path='/jewellery/bracelets' element={<Products category={"Bracelets"} />} />
            <Route path='/jewellery/collections' element={<Collections />} />
            <Route path='/jewellery/collections/pretty-in-pink' element={<Products category={"all"} collec={"prettyinpink"} />} />
            <Route path='/jewellery/collections/joy-of-dressing' element={<Products category={"all"} collec={"joyofdressing"} />} />
            <Route path='/jewellery/collections/string-it' element={<Products category={"all"} collec={"stringit"} />} />
            <Route path='/jewellery/collections/best-sellers' element={<Products category={"all"} collec="Bestsellers" />} />

            <Route path='/jewellery/mens' element={<Products category={"all"} genderType="mens" />} />
            <Route path='/jewellery/womens' element={<Products category={"all"} genderType="womens" />} />
            <Route path='/jewellery/kids' element={<Products category={"all"} genderType="kids" />} />

            <Route path='/jewellery/wedding' element={<Products category={"all"} occa="wedding" />} />
            <Route path='/jewellery/gifting' element={<Products category={"all"} gifting={true} />} />

            <Route path='/checkout' element={ <Checkout /> } />
            <Route path='/paymentsuccess' element={ <PaymentSuccess /> } />
            <Route path='/orders' element={ <Orders /> } />

            <Route path='/cart' element={ <Cart /> } />
            <Route path='/wishlist' element={<Wishlist />} />

            <Route path='/about' element={<About />} />
            <Route path='/termsandconditions' element={<TnC />} />
            <Route path='/privacypolicy' element={<PrivacyPolicy />} />
            <Route path='/delivery-info' element={<DeliveryInfo />} />
            <Route path='/payment-info' element={<PaymentInfo />} />
            <Route path='/track-order' element={<Orders />} />
            <Route path='/offers' element={<Offers />} />
            <Route path='/FAQ' element={<FAQ />} />

          </Routes>
      </CartProvider>
        </WishlistProvider>
    </BrowserRouter>

  );
};

export default App;
