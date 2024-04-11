import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  const Menu = [
    {
      id: 1,
      name: "ALL JEWELLERY",
      selfLink:"/jewellery",
      link: [
        {
          id: 1,
          name: "ALL JEWELLERY",
          link: "/jewellery",
        },
        {
          id: 2,
          name: "PENDANTS",
          link: "/jewellery/pendants",
        },
        {
          id: 3,
          name: "EARRINGS",
          link: "/jewellery/earrings",
        },
        {
          id: 4,
          name: "FINGER RINGS",
          link: "/jewellery/finger-rings",
        },
        {
          id: 5,
          name: "MANAGALSUTRA",
          link: "/jewellery/mangalsutra",
        },
        {
          id: 6,
          name: "CHAINS",
          link: "/jewellery/chains",
        },
        {
          id: 7,
          name: "NOSE PINS",
          link: "/jewellery/nose-pins",
        },
        {
          id: 8,
          name: "NECKLACES",
          link: "/jewellery/necklace",
        },
        {
          id: 9,
          name: "BANGLES",
          link: "/jewellery/bangles",
        },
        {
          id: 10,
          name: "BRACELETS",
          link: "/jewellery/bracelets",
        },
      ],
    },

    {
      id: 2,
      name: "PENDANTS",
      selfLink:"/jewellery/pendants",
      link: [
        {
          id: 1,
          name: "PEAELS PENDANTS",
          link: "/jewellery/pendants/pearl-pendants",
        },
        {
          id: 2,
          name: "RILIGIONAL ",
          link: "/jewellery/pendants/religional",
        },
        {
          id: 3,
          name: "ALPHBATICAL",
          link: "/jewellery/pendants/alphabets-pendants",
        },
        {
          id: 4,
          name: "KIDS SPECIAL",
          link: "/jewellery/pendants/kids-pendants",
        },
        {
          id: 5,
          name: "WOMENS",
          link: "/jewellery/pendants/womens-pendants",
        },
        {
          id: 6,
          name: "MENS",
          link: "/jewellery/pendants/mens-pendants",
        },
      ],
    },

    {
      id: 3,
      name: "EARRINGS",
      selfLink:"/jewellery/earrings",
      link: [
        {
          id: 1,
          name: "ALL EARRINGS",
          link: "/jewellery/earrings/",
        },
        {
          id: 2,
          name: " DROP & DANGLERS",
          link: "/jewellery/earrings/drop-and-danglers",
        },
        {
          id: 3,
          name: "HOOP & HUGGIES",
          link: "/jewellery/earrings/hoop-and-huggies",
        },
        {
          id: 4,
          name: "JHUMKAS",
          link: "/jewellery/earrings/jhumka",
        },
        {
          id: 5,
          name: "STUDS & TOPS",
          link: "/jewellery/earrings/studs-and-tops",
        },
        {
          id: 6,
          name: "MENS",
          link: "/jewellery/earrings/mens-earrings",
        },
      ],
    },
    {
      id: 4,
      name: "RINGS",
      selfLink:"/jewellery/finger-rings",
      link: [
        {
          id: 1,
          name: "COUPLE RINGS",
          link: "/jewellery/finger-rings/couple-rings",
        },
        {
          id: 2,
          name: "WOMENS RINGS",
          link: "/jewellery/finger-rings/womens-rings",
        },
        {
          id: 3,
          name: "MEN'S RINGS",
          link: "/jewellery/finger-rings/mens-rings",
        },
        {
          id: 4,
          name: "AMERICAN DIAMOND RINGS",
          link: "/jewellery/finger-rings/american-diamond-rings",
        },
      ],
    },
    {
      id: 5,
      name: "WEDDING",
      link: "/jewellery/wedding",
    },
    {
      id: 6,
      name: "GIFTING",
      link: "/jewellery/gifting",
    },
    {
      id: 7,
      name: "COLLECTIONS",
      selfLink:"/jewellery/collections",
      link: [
        {
          id: 1,
          name: "PREETY IN PINK",
          link: "/collections/pretty-in-pink",
        },
        {
          id: 2,
          name: "STRING IT",
          link: "/jewellery/finger-rings/string-it",
        },
        {
          id: 3,
          name: "JOY OF DRESSINGS",
          link: "/jewellery/finger-rings/joy-of-dressing",
        },
      ],
    },
    {
      id: 8,
      name: "BESTSELLERS",
      link: "/jewellery/best-sellers",
    },
  ];
  
  return (
    <div className="nav w-full sticky z-50 top-0">
      <nav className="mainNav  h-20 bg-rose-300 flex justify-between items-center px-20">
        <h1 className="logo text-rose-600 text-3xl font-bold">Jew</h1>
        <div className="nlinks flex gap-10 text-xl items-center flex-wrap">
            <div className='relative'>
              <input 
                type='text' name='search' 
                placeholder='Search for Jewellery' 
                className='px-3 py-2 w-72 hover:w-[22rem] transition-all duration-300 focus:w-[420px] rounded bg-rose-100 placeholder-rose-300'>
              </input>
              <i class="fa-solid fa-magnifying-glass absolute right-3 top-1/2 -translate-y-1/2 bg-rose-300 text-white hover:scale-125 pl-1 rounded-full p-1 "></i>
            </div>
          <Link to={"/#"}>home </Link>
          <Link to={"/jewellery"}> Explore</Link>
          <Link to={"/wishlist"}>Wishlist </Link>
          <Link className='group transition-all duration-500 flex items-center justify-between gap-2 rounded-full  px-5 py-2 shadow-lg bg-gradient-to-br from-rose-200 via-rose-300 to-rose-600'
            to={"/cart"}>
              <span className='hidden group-hover:block'>Cart</span>
              <i class="fa-solid fa-cart-shopping"></i>
            </Link>
          <button  className="relative cursor-pointer group flex items-center justify-center rounded-full hover:shadow-2xl">
                  <div class="group-hover:bg-rose-200 px-3 py-2 rounded-md translate-all ease-in-out duration-300 group">
                    Account</div>
                  
                  <div className="absolute p-3 text-xl z-10 w-60 shadow-xl -bottom-28 hidden  rounded-md bg-rose-50 hover:bg-rose-200 border text-center group-hover:block">
                    <div className="font-bold text-xl">My Account</div>
                    <small className="">Login to access your Account</small>
                    <div className="flex gap-4 ">
                    <button className='px-2 py-1 block mx-auto mt-5  rounded border-2 border-rose-800 hover:bg-rose-600 hover:text-rose-50  text-rose-800 transition-all duration-100 '
                        >LogIn</button>
                    <button className='px-2 py-1 block mx-auto mt-5  rounded border-2 border-rose-800 hover:bg-rose-600 hover:text-rose-50 bg-rose-800 text-rose-50 transition-all duration-100 '
                        >SignUp</button>
                    </div>
                  </div>
              
          </button>
        </div>
      </nav>
      <header className="header px-16 h-10 bg-rose-200 flex items-center justify-between">
        {Menu.map((litem) => (
          <div className="relative group hover:bg-rose-300 h-full flex items-center w-full justify-center">
            <Link
              to={Array.isArray(litem.link) ? litem.selfLink : litem.link}
              key={litem.id}
              className="h-full w-full flex items-center justify-center"
            >
              {litem.name}
            </Link>

            {Array.isArray(litem.link) && (
              <div className="hidden  bg-rose-200 absolute top-10 min-w-36 group-hover:flex flex-col ">
                {litem.link.map((slitem) => (
                  <Link
                    to={slitem.link}
                    key={slitem.id}
                    className="hover:bg-rose-300 px-2 py-3"
                  >
                    {slitem.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </header>
    </div>
  );
};

export default Nav;
