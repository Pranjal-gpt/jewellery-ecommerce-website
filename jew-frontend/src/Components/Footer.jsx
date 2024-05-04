import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const [accType, setaccType] = useState("")
useEffect(()=>{
  const userType =  localStorage.getItem('token')&&JSON.parse(atob(localStorage.getItem("token").split(".")[1])).userType
    if (userType) {
      setaccType(userType)
    }
},[])
  return (
    <footer className="h-fit mt-5 bg-orange-100 flex flex-col ">
      <section className="flex justify-around lg:flex-row flex-col py-10 gap-7 px-4">
        <div className="flex lg:flex-col flex-wrap lg:items-start items-center gap-3 lg:gap-7">
          <h1 className="text-2xl relative lg:-left-5">
            Useful links{" "}
          </h1>
          <Link to={"/payment-info"}>Payments Options</Link>
          <Link to={"/offers"}> Offers</Link>
          {accType!="merchant"&&<Link to={"/track-order"}> Track Your Order </Link>}
          <Link to={"/delivery-info"}> Delivery information</Link>
        </div>
        <div className="flex lg:flex-col lg:items-start   flex-wrap items-center gap-3 lg:gap-7">
          <h1 className="text-2xl relative lg:-left-5">
            Information
          </h1>
          <Link to={"/faq"}> Help & FAQs</Link>
          <Link to={"/about"}> About</Link>
          <Link to={"/privacypolicy"}> Privacy & policy</Link>
          <Link to={"/termsandconditions"}> Terms & conditions</Link>
        </div>
        <div className="flex lg:flex-col  lg:items-start  flex-wrap items-center gap-3 lg:gap-7">
          <h1 className="text-2xl relative lg:-left-5">
            Contact Us
          </h1>
          <a href="https://t.me/Elegance_jewellerry" target="_blank">Chat with Us</a>
        </div>
        
      </section>
      <div className="h-0.5 lg:w-1/3 w-2/3  bg-[#832729] mx-auto"></div>
      <section className="flex justify-center font-bold bg-orange-200">
        <div>EleganceJewelery.com &nbsp;</div>
        <div> | &copy; All Rights Reserved @2024</div>
      </section>
    </footer>
  );
}

export default Footer;
