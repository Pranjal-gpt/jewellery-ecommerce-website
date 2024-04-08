import React from "react";

function Footer() {
  return (
    <footer className="h-fit mt-5 bg-[#fecdd3] flex flex-col ">
      <section className="flex justify-around  py-10  ">
        <div className="flex flex-col gap-7">
          <h1 className="text-2xl relative -left-5 text-[#832729]">
            Useful links{" "}
          </h1>
          <a href="#">Delivery information</a>
          <a href="#">Payments Options</a>
          <a href="#">Track Your Order </a>
          <a href="#">Returns</a>
        </div>
        <div className="flex flex-col gap-7">
          <h1 className="text-2xl relative -left-5 text-[#832729]">
            Information
          </h1>
          <a href="#">Offers</a>
          <a href="#">Help & FAQs</a>
          <a href="#">About</a>
          <a href="#">Privacy & policy</a>
          <a href="#">Terms & conditions</a>
        </div>
        <div className="flex flex-col gap-7">
          <h1 className="text-2xl relative -left-5 text-[#832729]">
            Contact Us
          </h1>
          <a href="#">Write to Us</a>
          <a href="#">1200-456-6782</a>
          <a href="#">Chat with Us</a>
        </div>
        <div className="flex flex-col items-center justify-center gap-8 ">
          <h1 className="text-2xl ">Follow Us</h1>
          <div className="  flex gap-5 ">
            <a href="#">
              <i class="fa-brands fa-instagram fa-2xl"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-youtube fa-2xl"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-patreon fa-2xl"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-facebook fa-2xl"></i>
            </a>
          </div>
        </div>
      </section>
      <div className="h-0.5 w-1/3  bg-[#832729] mx-auto"></div>
      <section className="flex justify-center font-bold ">
        <div>Jew.com</div>
        <div>| &copy; All Rights Reserved @2024</div>
      </section>
    </footer>
  );
}

export default Footer;
