import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Pitem = ({ product, mode, size}) => {
  let permalink = product.title.replace(/ /g, "-") +"#"+ product.id;
  return (
    <div className="relative flex flex-col items-center gap-2 border shadow-sm hover:shadow-xl p-2 bg-rose-50">
      <div className="w-8 h-8 absolute backdrop-blur-lg flex items-center justify-center rounded-full right-4 top-4 group hover:shadow-2xl">
        <i class="fa-regular fa-heart group-hover:scale-125"></i>
        <div className="absolute text-sm -bottom-14 hidden group-hover:block p-1 rounded-md bg-rose-50 border w-24 text-center"> {false?"Remove From Wishlist":"Add To Wishlist"}</div>
      </div>
      <img src={product.images && product.images.length > 0 ? product.images[0] : ''} className={size }></img> 
      <Link className="font-bold text-xl  hover:text-rose-900"
      to={mode==="similars"?"/"+(window.location.href.split("/")[3])+"/"+permalink:permalink} state={product}>{product.title}</Link>
      <div className="font-bold text-lg">{product.price}</div>
      <Link className=" bg-rose-200 hover:bg-rose-100 rounded-md px-5 py-2"
      to={mode==="similars"?"/"+(window.location.href.split("/")[3])+"/"+permalink:permalink} state={product}>View</Link>
    </div>
  );
};

export default Pitem;
