import React from "react";

const Citem = ({ Cilink, Cname, size }) => {
  return (
    <div className="flex flex-col items-center gap-2 border shadow-sm hover:shadow-xl">
      {/* Cilink is a variable link */}
      <img src={Cilink} className={size }></img> 
      <div className="font-bold text-xl">{Cname}</div>
      <div>explore</div>
    </div>
  );
};

export default Citem;
