import React from "react";

const Citem = ({ pImg, pLink, pName, pPrice, size }) => {
  return (
    <div className="relative flex flex-col items-center gap-2 border shadow-sm hover:shadow-xl p-2">
      {/* Cilink is a variable link */}
      <div className="w-8 h-8 absolute backdrop-blur-lg flex items-center justify-center rounded-full right-4 top-4 group hover:shadow-2xl">
        <i class="fa-regular fa-heart group-hover:scale-125"></i>
        <div className="absolute text-sm -bottom-14 hidden group-hover:block p-1 rounded-md bg-rose-50 border w-24 text-center"> {false?"Remove From Wishlist":"Add To Wishlist"}</div>
      </div>
      <img src={pImg} className={size }></img> 
      <div className="font-bold text-xl ">{pName}</div>
      <div className="font-bold text-lg">{pPrice}</div>
      <div>View</div>
    </div>
  );
};

export default Citem;
