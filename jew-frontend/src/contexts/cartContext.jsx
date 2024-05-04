import axios from 'axios';
import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [user, setuser] = useState( localStorage.getItem("token")?JSON.parse(atob(localStorage.getItem("token").split(".")[1])).email:null)


  // Load cart items from local storage on component mount
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  
    localStorage.getItem("token")&&fetch("https://jewellery-ecommerce-website.vercel.app/api/cart/get",
    {
        body:JSON.stringify({user:user}),
        method:"POST",
        headers:{"Content-Type":"application/json"},
    })
        .then((response) => response.json())
        .then((data) => {
            // console.log("Received cart data:", data.info);
            setCartItems(data.info===undefined?[]:data.info);
            
        })
        .catch((error) => console.error("Error fetching cart data:", error));
       
  }, [user]);

  // Save cart items to local storage whenever cartItems state changes
  useEffect(() => {
   //cartItems.length!==0&&
   localStorage.setItem('cartItems', JSON.stringify(cartItems));
  //  console.log( "cart in local: ",JSON.parse(localStorage.getItem('cartItems')))

  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    axios.post("https://jewellery-ecommerce-website.vercel.app/api/cart/add",{
      user:user,
      product:item
    }).then(res=>console.log(res.data.infoMsg)).catch(err=>console.log(err))
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
    axios.post("https://jewellery-ecommerce-website.vercel.app/api/cart/delete",{
      data:{
        user:user,
        productId:id
      }
    }).then(res=>console.log(res.data.infoMsg)).catch(err=>console.log(err))
  };
  const clearCart = () => {
    setCartItems([]);
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart,clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
