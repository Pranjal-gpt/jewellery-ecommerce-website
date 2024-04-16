import React, { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [WishlistItems, setWishlistItems] = useState([]);

  // Load Wishlist items from local storage on component mount
  useEffect(() => {
    const storedWishlistItems = JSON.parse(localStorage.getItem('WishlistItems'));
    if (storedWishlistItems) {
      setWishlistItems(storedWishlistItems);
    }
  }, []);

  // Save Wishlist items to local storage whenever WishlistItems state changes
  useEffect(() => {
   WishlistItems.length!==0&&localStorage.setItem('WishlistItems', JSON.stringify(WishlistItems));
  }, [WishlistItems]);

  const addToWishlist = (item) => {
    setWishlistItems([...WishlistItems, item]);
  };

  const removeFromWishlist = (id) => {
    setWishlistItems(WishlistItems.filter(item => item.id !== id));
  };

  return (
    <WishlistContext.Provider value={{ WishlistItems, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
