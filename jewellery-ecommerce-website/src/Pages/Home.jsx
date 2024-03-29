import React from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Citem from "../Components/Citem";
const Home = () => {
  const New = [
    {
      id: 1,
      imgurl:
        "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw901d27ee/homepage/NewForYou/trending-earrings.jpg",
      cName: "trending earrings",
      cLink: "#",
    },
    {
      id: 2,
      imgurl:
        "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwb292158a/homepage/NewForYou/pretty-in-pink-new.jpg",
      cName: "pretty in pink",
      cLink: "#",
    },
    {
      id: 3,
      imgurl:
        "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw35ac2bd0/homepage/NewForYou/modern-designs.jpg",
      cName: "modern designs",
      cLink: "#",
    },
  ];
  const collections = [
    {
      id: 1,
      imgurl:
        "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwa6c6b384/images/hi-res/50D2P2SZHABA32_2.jpg",
      cName: "pretty pink",
      cLink: "#",
    },
    {
      id: 2,
      imgurl:
        "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwa6c6b384/images/hi-res/50D2P2SZHABA32_2.jpg",
      cName: "pretty pink",
      cLink: "#",
    },
    {
      id: 3,
      imgurl:
        "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwa6c6b384/images/hi-res/50D2P2SZHABA32_2.jpg",
      cName: "pretty pink",
      cLink: "#",
    },
  ];
  const categories = [
    {
      id: 1,
      imgurl:
        "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw02b097f8/images/hi-res/502920HBGABE00_1.jpg?sw=360&sh=360",
      cName: "Earrings",
      cLink: "#",
    },
    {
      id: 2,
      imgurl:
        "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwfc4fb974/homepage/shopByCategory/fod-rings.jpg",
      cName: "rings",
      cLink: "#",
    },
    {
      id: 3,
      imgurl:
        "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw3617b276/homepage/shopByCategory/fod-pendants.jpg",
      cName: "nosepin",
      cLink: "#",
    },
    {
      id: 4,
      imgurl:
        "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw114df9d7/homepage/shopByCategory/fod-mangalsutra.jpg",
      cName: "Mangalsutra",
      cLink: "#",
    },
    {
      id: 5,
      imgurl:
        "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwcbb3ebbb/homepage/shopByCategory/fod-chain.jpg",
      cName: "Chains",
      cLink: "#",
    },
    {
      id: 6,
      imgurl:
        "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw02b097f8/images/hi-res/502920HBGABE00_1.jpg?sw=360&sh=360",
      cName: "Earrings",
      cLink: "#",
    },
    {
      id: 7,
      imgurl:
        "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw02b097f8/images/hi-res/502920HBGABE00_1.jpg?sw=360&sh=360",
      cName: "Earrings",
      cLink: "#",
    },
    {
      id: 8,
      imgurl:
        "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw02b097f8/images/hi-res/502920HBGABE00_1.jpg?sw=360&sh=360",
      cName: "Earrings",
      cLink: "#",
    },
    {
      id: 9,
      imgurl:
        "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw02b097f8/images/hi-res/502920HBGABE00_1.jpg?sw=360&sh=360",
      cName: "Earrings",
      cLink: "#",
    },
    {
      id: 10,
      imgurl:
        "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw02b097f8/images/hi-res/502920HBGABE00_1.jpg?sw=360&sh=360",
      cName: "Earrings",
      cLink: "#",
    },
  ];
  return (
    <div>
      <Nav />
      <main className="">
        <div className="caro">
          {/*block 1*/}
          <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw7f7d0da9/homepage/HeroBanner/rings-desktop.jpg"></img>
        </div>
        <div className="category flex flex-col gap-10">
          {/*block 2*/}
          <h1 className="text-center font-bold text-3xl py-7">
            shop by category
          </h1>
          <div className="h-0.5 w-1/3  bg-[#832729] mx-auto"></div>
          {/*underline code*/}
          <div className="flex gap-7 flex-wrap justify-center w-11/12 mx-auto">
            {categories.map((category) => (
              <Citem
                Cilink={category.imgurl}
                Cname={category.cName}
                size={"w-56 h-56"}
              />
            ))}
          </div>
        </div>
        <div className="category flex flex-col gap-10">
          {/*block 3*/}
          <h1 className="text-center font-bold text-3xl py-7">
            shop by collection
          </h1>
          <div className="h-0.5 w-1/3  bg-[#832729] mx-auto"></div>
          {/*underline code*/}
          <div className="flex gap-7 flex-wrap justify-center w-11/12 mx-auto">
            {collections.map((collection) => (
              <Citem
                Cilink={collection.imgurl}
                Cname={collection.cName}
                size={"w-56 h-56"}
              />
            ))}
          </div>
        </div>
        <div className="category flex flex-col gap-10">
          {/*block 4*/}
          <h1 className="text-center font-bold text-3xl py-7">New for you</h1>
          <div className="h-0.5 w-1/3  bg-[#832729] mx-auto"></div>
          {/*underline code*/}
          <div className="flex gap-7 flex-wrap justify-center w-11/12 mx-auto">
            {New.map((New) => (
              <Citem Cilink={New.imgurl} Cname={New.cName} size={"w-96 h-72"} />
            ))}
          </div>
        </div>
        <div className="category flex flex-col gap-10">
          {/*block 5*/}
          <h1 className="text-center font-bold text-3xl py-7">
            shop by gender
          </h1>
          <div className="h-0.5 w-1/3  bg-[#832729] mx-auto"></div>
          {/*underline code*/}
          <div className="flex gap-7 flex-wrap justify-center w-11/12 mx-auto">
            <Citem
              Cilink="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwef4310c0/homepage/ShopByGender/Men.jpg"
              Cname="Mens"
              size={"w-96 h-72"}
            />
            <Citem
              Cilink="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwef4310c0/homepage/ShopByGender/Men.jpg"
              Cname="kids"
              size={"w-96 h-72"}
            />
            <Citem
              Cilink="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwef4310c0/homepage/ShopByGender/Men.jpg"
              Cname="womens"
              size={"w-96 h-72"}
            />
          </div>
        </div>

        <div className="category flex flex-col gap-10">
          {/*block 6*/}
          <h1 className="text-center font-bold text-3xl py-7">most gifted</h1>
          <div className="h-0.5 w-1/3  bg-[#832729] mx-auto"></div>
          {/*underline code*/}
          <div className="flex gap-7 flex-wrap justify-center w-full mx-auto">
            <Citem
              Cilink="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw02b097f8/images/hi-res/502920HBGABE00_1.jpg?sw=360&sh=360"
              Cname="Mens"
              size={"w-68 h-56"}
            />
            <Citem
              Cilink="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw02b097f8/images/hi-res/502920HBGABE00_1.jpg?sw=360&sh=360g"
              Cname="kids"
              size={"w-68 h-56"}
            />
            <Citem
              Cilink="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw02b097f8/images/hi-res/502920HBGABE00_1.jpg?sw=360&sh=360"
              Cname="womens"
              size={"w-68 h-56"}
            />

            <Citem
              Cilink="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw02b097f8/images/hi-res/502920HBGABE00_1.jpg?sw=360&sh=360"
              Cname="womens"
              size={"w-68 h-56"}
            />

            <Citem
              Cilink="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw02b097f8/images/hi-res/502920HBGABE00_1.jpg?sw=360&sh=360"
              Cname="womens"
              size={"w-68 h-56"}
            />
          </div>
        </div>
        <div className="category flex flex-col gap-10">
          {/*block 7*/}
          <h1 className="text-center font-bold text-3xl py-7">Recommended for you</h1>
          <div className="h-0.5 w-1/3  bg-[#832729] mx-auto"></div>
          {/*underline code*/}
          <div className="flex gap-7 flex-wrap justify-center w-full mx-auto">
            <Citem
              Cilink="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw02b097f8/images/hi-res/502920HBGABE00_1.jpg?sw=360&sh=360"
              Cname="Mens"
              size={"w-68 h-56"}
            />
            <Citem
              Cilink="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw02b097f8/images/hi-res/502920HBGABE00_1.jpg?sw=360&sh=360g"
              Cname="kids"
              size={"w-68 h-56"}
            />
            <Citem
              Cilink="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw02b097f8/images/hi-res/502920HBGABE00_1.jpg?sw=360&sh=360"
              Cname="womens"
              size={"w-68 h-56"}
            />

            <Citem
              Cilink="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw02b097f8/images/hi-res/502920HBGABE00_1.jpg?sw=360&sh=360"
              Cname="womens"
              size={"w-68 h-56"}
            />

            <Citem
              Cilink="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw02b097f8/images/hi-res/502920HBGABE00_1.jpg?sw=360&sh=360"
              Cname="womens"
              size={"w-68 h-56"}
            />
          </div>
        </div>
        <section>
          
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
