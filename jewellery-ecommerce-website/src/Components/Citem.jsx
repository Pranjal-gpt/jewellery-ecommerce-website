import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const Citem = ({ cName,cLink,cImg, size }) => {
  return (
    <Link className="p-1 group flex flex-col hover:bg-rose-50 items-center gap-2 border shadow-sm hover:shadow-xl"
    to={cLink}>
      {/* Cilink is a variable link */}
      <img src={cImg} className={size }></img> 
      <div className="font-bold text-xl">{cName}</div>
      <div className="flex gap-0 group-hover:gap-5 translate-all duration-200">
        <span>Explore</span>
        <span>{">"}</span>
      </div>
    </Link>
  );
};

export default Citem;
