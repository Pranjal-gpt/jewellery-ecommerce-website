import React,{useState,useEffect} from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Citem from "../Components/Citem";
import categories from "../data/demodata";
import { Carousel } from "../Components/Carousel";
import { slides } from "../data/carouselData.json";
import { CartProvider } from "../contexts/cartContext";
var {New,allcategories,recommended,mostGifted,collections} = categories
const Home = () => {
  
  const [homepageData, setHomepageData] = useState(null);

  useEffect(() => {
    // Fetch the homepage data from your backend API
    fetch("http://localhost:3000/api/home")
      .then((response) => response.json())
      .then((data) => setHomepageData(data))
      .catch((error) => console.error("Error fetching homepage data:", error));
  }, []);

  // Render your homepage using the homepageData



  return (
    <div>
      <CartProvider>
        <Nav />
      </CartProvider>
      <main className="">
        <div className="caro">
          {/*block 1*/}
          <Carousel data={slides} />
        
          {/* <img src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw7f7d0da9/homepage/HeroBanner/rings-desktop.jpg"></img> */}
        </div>
        <div className="category flex flex-col gap-10">
          {/*block 2*/}
          <h1 className="text-center font-bold text-3xl py-7">
            shop by category
          </h1>
          <div className="h-0.5 w-1/3  bg-[#832729] mx-auto"></div>
          {/*underline code*/}
          <div className="flex gap-7 flex-wrap justify-center w-11/12 mx-auto">
            {allcategories.map((category) => (
              <Citem
                cName={category.cName}
                cLink={category.cLink}
                cImg={category.imgurl}
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
          <div className="flex gap-10 flex-wrap justify-center w-11/12 mx-auto">
            {collections.map((collection) => (
              <Citem
              cName={collection.cName}
              cLink={collection.cLink}
              cImg={collection.imgurl}
                size={"w-72 h-72"}
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
            {homepageData && homepageData.New.map((New) => (
              <Citem cName={New.cName}
              cLink={New.cLink}
              cImg={New.imgurl} size={"w-80 h-96"} />
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
              cImg="https://i.imghippo.com/files/8XbYk1713551029.jpg"
              cName="Mens"
              cLink={"/jewellery"}
              size={"w-96 h-72 rounded-xl "}
            />
            <Citem
              cImg="https://i.imghippo.com/files/n6tfK1713551195.jpg"
              cName="Womens"
              cLink={"/jewellery"}
              size={"w-96 h-72 rounded-2xl object-cover"}
            />
            <Citem
              cImg="https://i.imghippo.com/files/suoxl1713551129.jpg"
              cName="Kids"
              cLink={"/jewellery/"}
              size={"w-96 h-72 rounded-2xl object-cover"}
            />
          </div>
        </div>

        <div className="category flex flex-col gap-10">
          {/*block 6*/}
          <h1 className="text-center font-bold text-3xl py-7">most gifted</h1>
          <div className="h-0.5 w-1/3  bg-[#832729] mx-auto"></div>
          {/*underline code*/}
          <div className="flex gap-7 flex-wrap justify-center w-full mx-auto">
          {mostGifted.map((item) => (
              <Citem
              cName={item.cName}
              cLink={item.cLink}
              cImg={item.imgurl}
                size={"w-60 h-72"}
              />
            ))}
          </div>
        </div>
        <div className="category flex flex-col gap-10">
          {/*block 7*/}
          <h1 className="text-center font-bold text-3xl py-7">Recommended for you</h1>
          <div className="h-0.5 w-1/3  bg-[#832729] mx-auto"></div>
          {/*underline code*/}
          <div className="flex gap-7 flex-wrap justify-center w-full mx-auto">
          {recommended.map((item) => (
              <Citem
              cName={item.cName}
              cLink={item.cLink}
              cImg={item.imgurl}
                size={"w-60 h-72"}
              />
            ))}
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
