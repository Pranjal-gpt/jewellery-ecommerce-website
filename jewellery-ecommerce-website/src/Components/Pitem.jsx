import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { WishlistProvider,useWishlist } from '../contexts/wishlistContext';

const Pitem = ({ product, mode, size }) => {
  const { WishlistItems,addToWishlist,removeFromWishlist} = useWishlist();
  const [isWishlist, setisWishlist] = useState(WishlistItems.some(item => parseInt(item._id) ===parseInt(product._id) ))

  const [hoveredImage, setHoveredImage] = useState(product.images && product.images.length > 0 ? product.images[0] : '');
  let permalink = product.title.replace(/ /g, "-") +"#"+ product._id;
  useEffect(() => {
    setHoveredImage(product.images && product.images.length > 0 ? product.images[0] : "");
  }, [product]);
  const handleWishlistClick = () => {
    if (isWishlist) {
        removeFromWishlist(product._id)
        console.log("removed item from Wishlist", product._id)
    }
    else{

        const newItem = {
          id: product._id, // Assuming product id is available in product
          title: product.title,
          description:product.description,
          price: product.price,
          discount: product.discount,
          karatage:product.karatage,
          image:product.images[0],
        }
        addToWishlist(newItem);
        console.log("added item to Wishlist",product._id)
    };
    setisWishlist(!isWishlist);
  };
  return (
    <div className="relative flex flex-col items-center gap-2 border shadow-sm hover:shadow-xl p-2 bg-rose-50">
      <div  onClick={handleWishlistClick} className="w-8 h-8 cursor-pointer absolute backdrop-blur-lg flex items-center justify-center rounded-full right-4 top-4 group active:bg-rose-200 hover:bg-rose-50 hover:shadow-2xl">
      {isWishlist?<i class="fa-solid fa-heart  group-hover:scale-125 group-active:scale-150  transition-all duration-500 "></i> :<i class="fa-regular fa-heart group-hover:scale-125 group-active:-scale-150 transition-all duration-500"></i> } 
        <div className="absolute  text-sm -bottom-14 hidden group-hover:block p-1 rounded-md bg-rose-50 border w-24 text-center">
          {isWishlist ? "Remove From Wishlist" : "Add To Wishlist"}
        </div>
      </div>
      <img
        src={hoveredImage}
        className={size}
        onMouseOver={() => setHoveredImage(product.images && product.images.length > 2 ? product.images[1] : '')}
        onClick={() => setHoveredImage(product.images && product.images.length > 2 ? product.images[2] : '')}
        onMouseLeave={() => setHoveredImage(product.images && product.images.length > 0 ? product.images[0] : '')}
        alt="Product"
      />
      <Link
        className="font-bold text-xl  hover:text-rose-900"
        to={"/jewellery/item/" + permalink}
        state={product}
      >
        {product.title.length > 20 ? product.title.substring(0, 25) + '...' : product.title}
      </Link>
      <div className="font-bold text-lg">₹{product.price}</div>
      <Link
        className=" bg-rose-200 hover:bg-rose-100 rounded-md px-5 py-2"
        to={"/jewellery/item/" + permalink}
        state={product}
      >
        View
      </Link>
    </div>
  );
};

export default Pitem;
