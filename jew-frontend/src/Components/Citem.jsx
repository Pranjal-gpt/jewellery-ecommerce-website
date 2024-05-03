import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const Citem = ({ cName,cLink,cImg, size }) => {
  return (
    <Link className="hover:scale-110 transition-all duration-100 rounded-[50px] group flex flex-col hover:bg-orange-50 items-center gap-0.5 border shadow-lg hover:shadow-sm"
    to={cLink}>
      {/* Cilink is a variable link */}
      <img src={cImg} className={`${size} rounded-t-[45px] object-cover`}></img> 
      <div className="font-bold lg:text-xl text-sm">{cName}</div>
      <div className="lg:text-lg text-xs 5 flex gap-0 group-hover:gap-5 ease-out translate-all duration-300">
        <span className="">Explore</span>
        <span>{">"}</span>
      </div>
    </Link>
  );
};

export default Citem;
