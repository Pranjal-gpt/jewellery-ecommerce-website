import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const [accType, setaccType] = useState("")
useEffect(()=>{
  const userType = localStorage.getItem('userType')
    if (userType) {
      setaccType(userType)
    }
},[])
  return (
    <footer className="h-fit mt-5 bg-orange-100 flex flex-col ">
      <section className="flex justify-around  py-10  ">
        <div className="flex flex-col gap-7">
          <h1 className="text-2xl relative -left-5">
            Useful links{" "}
          </h1>
          <Link to={"/delivery-info"}> Delivery information</Link>
          <Link to={"/payment-info"}>Payments Options</Link>
          {accType!="merchant"&&<Link to={"/track-order"}> Track Your Order </Link>}
        </div>
        <div className="flex flex-col gap-7">
          <h1 className="text-2xl relative -left-5">
            Information
          </h1>
          <Link to={"/offers"}> Offers</Link>
          <Link to={"/faq"}> Help & FAQs</Link>
          <Link to={"/about"}> About</Link>
          <Link to={"/privacypolicy"}> Privacy & policy</Link>
          <Link to={"/termsandconditions"}> Terms & conditions</Link>
        </div>
        <div className="flex flex-col gap-7">
          <h1 className="text-2xl relative -left-5">
            Contact Us
          </h1>
          <a href="https://wa.me/917879752789" target="_blank">Chat with Us</a>
        </div>
        <div className="flex flex-col items-center justify-center gap-8 ">
          {/* <h1 className="text-2xl ">Follow Us</h1>
          <div className="  flex gap-5 ">
            <Link> 
              <i class="fa-brands fa-instagram fa-2xl"></i>
            </Link>
            <Link> 
              <i class="fa-brands fa-youtube fa-2xl"></i>
            </Link>
            <Link> 
              <i class="fa-brands fa-patreon fa-2xl"></i>
            </Link>
            <Link> 
              <i class="fa-brands fa-facebook fa-2xl"></i>
            </Link>
          </div> */}
        </div>
      </section>
      <div className="h-0.5 w-1/3  bg-[#832729] mx-auto"></div>
      <section className="flex justify-center font-bold ">
        <div>EleganceJewelery.com </div>
        <div>| &copy; All Rights Reserved @2024</div>
      </section>
    </footer>
  );
}

export default Footer;
