import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  const Menu = [
    {
      id: 1,
      name: "ALL JEWELLERY",
      link: [
        {
          id: 1,
          name: "ALL JEWELLERY",
          link: "/products",
        },
        {
          id: 2,
          name: "PENDANTS",
          link: "/#",
        },
        {
          id: 3,
          name: "EARRINGS",
          link: "/#",
        },
        {
          id: 4,
          name: "FINGER RINGS",
          link: "/#",
        },
        {
          id: 5,
          name: "MANAGALSUTRA",
          link: "/#",
        },
        {
          id: 6,
          name: "CHAINS",
          link: "/#",
        },
        {
          id: 7,
          name: "NOSE PINS",
          link: "/#",
        },
        {
          id: 8,
          name: "NECKLACES",
          link: "/#",
        },
        {
          id: 9,
          name: "BANGLES",
          link: "/#",
        },
        {
          id: 10,
          name: "BRACELETS",
          link: "/#",
        },
      ],
    },

    {
      id: 2,
      name: "PENDANTS",
      link: [
        {
          id: 1,
          name: "PEAELS PENDANTS",
          link: "/#",
        },
        {
          id: 2,
          name: "RILIGIONAL ",
          link: "/#",
        },
        {
          id: 3,
          name: "ALPHBATICAL",
          link: "/#",
        },
        {
          id: 4,
          name: "KIDS SPECIAL",
          link: "/#",
        },
        {
          id: 5,
          name: "WOMENS",
          link: "/#",
        },
        {
          id: 6,
          name: "MENS",
          link: "/#",
        },
      ],
    },

    {
      id: 3,
      name: "EARRINGS",
      link: [
        {
          id: 1,
          name: "ALL EARRINGS",
          link: "/#",
        },
        {
          id: 2,
          name: " DROP & DANGLERS",
          link: "/#",
        },
        {
          id: 3,
          name: "HOOP & HUGGIES",
          link: "/#",
        },
        {
          id: 4,
          name: "JHUMKAS",
          link: "/#",
        },
        {
          id: 5,
          name: "STUDS & TOPS",
          link: "/#",
        },
        {
          id: 6,
          name: "MENS",
          link: "/#",
        },
      ],
    },
    {
      id: 4,
      name: "RINGS",
      link: [
        {
          id: 1,
          name: "COUPLE RINGS",
          link: "/#",
        },
        {
          id: 2,
          name: "WOMENS RINGS",
          link: "/#",
        },
        {
          id: 3,
          name: "MEN'S RINGS",
          link: "/#",
        },
        {
          id: 4,
          name: "AMERICAN DIAMOND RINGS",
          link: "/#",
        },
      ],
    },
    {
      id: 5,
      name: "WEDDING",
      link: "/#",
    },
    {
      id: 6,
      name: "GIFTING",
      link: "/#",
    },
    {
      id: 7,
      name: "COLLECTIONS",
      link: [
        {
          id: 1,
          name: "PREETY IN PINK",
          link: "/#",
        },
        {
          id: 2,
          name: "STRING IT",
          link: "/#",
        },
        {
          id: 3,
          name: "JOY OF DRESSINGS",
          link: "/#",
        },
      ],
    },
    {
      id: 8,
      name: "BESTSELLERS",
      link: "/#",
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
          <a href="/#">home </a>
          <a href="/#"> Explore</a>
          <a href="/#">Wishlist </a>
          <button className='group transition-all duration-500 flex items-center justify-between gap-2 rounded-full  px-5 py-2 shadow-lg bg-gradient-to-br from-rose-200 via-rose-300 to-rose-600'>
              <span className='hidden group-hover:block'>Cart</span>
              <i class="fa-solid fa-cart-shopping"></i>
            </button>
          <a href="#">Account </a>

          <li className="cursor-pointer list-none border-rose-200 border-4 hover:bg-rose-600 px-4 py-2 rounded-2xl hover:text-rose-50 transition transform duration-200">
            Sign In
          </li>
        </div>
      </nav>
      <header className="header px-16 h-10 bg-rose-200 flex items-center justify-between">
        {Menu.map((litem) => (
          <div className="relative group hover:bg-rose-300 h-full flex items-center w-full justify-center">
            <a
              href={Array.isArray(litem.link) ? "/#" : litem.link}
              key={litem.id}
              className="h-full w-full flex items-center justify-center"
            >
              {litem.name}
            </a>

            {Array.isArray(litem.link) && (
              <div className="hidden  bg-rose-200 absolute top-10 min-w-36 group-hover:flex flex-col ">
                {litem.link.map((slitem) => (
                  <a
                    href={slitem.link}
                    key={slitem.id}
                    className="hover:bg-rose-300 px-2 py-3"
                  >
                    {slitem.name}
                  </a>
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
