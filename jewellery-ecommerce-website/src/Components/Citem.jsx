import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const Citem = ({ cName,cLink,cImg, size }) => {
  return (
    <Link className="rounded-[50px] group flex flex-col hover:bg-rose-50 items-center gap-0.5 border shadow-lg hover:shadow-sm"
    to={cLink}>
      {/* Cilink is a variable link */}
      <img src={cImg} className="w-96 h-72 rounded-t-[50px] object-cover"></img> 
      <div className="font-bold text-xl">{cName}</div>
      <div className="flex gap-0 group-hover:gap-5 ease-out translate-all duration-300">
        <span>Explore</span>
        <span>{">"}</span>
      </div>
    </Link>
  );
};

export default Citem;
