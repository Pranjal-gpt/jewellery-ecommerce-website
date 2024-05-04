import React,{useState,useEffect} from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Citem from "../Components/Citem";
import categories from "../data/demodata";
import { Carousel } from "../Components/Carousel";
import { slides } from "../data/carouselData.json";
import { CartProvider } from "../contexts/cartContext";
import Pitem from "../Components/Pitem";
var {New,allcategories,recommended,mostGifted,collections} = categories
const Home = () => {
  
  const [homepageData, setHomepageData] = useState(null);
  const [Reccomended, setReccomended] = useState([]);
  const[loadReccomended,setLoadReccomended]=useState(false)
  const[loadgifting,setLoadGifting]=useState(false)
  const [gifting,setGifting]=useState([]);
  const getReccomended = () => {   
    let products= `&max=5&shuffle=true`
    setLoadReccomended(true)
    fetch("https://jewellery-ecommerce-website.vercel.app/api/jewellery/all?category=all"+products)    
    .then((response) => response.json())
    .then((data) => {
      setReccomended(data);
    })
    .catch((error) => console.error("Error fetching homepage data:", error))
    .finally(()=>setLoadReccomended(false))
  }
  const getGifingItems = () => {
    setLoadGifting(true)
    let products= `&max=5&shuffle=true&gifting=true`
    fetch("https://jewellery-ecommerce-website.vercel.app/api/jewellery/all?category=all"+products)    
    .then((response) => response.json())
    .then((data) => {
      setGifting(data);
      // console.log("gifting data ",data)
    })
    .catch((error) => console.error("Error fetching homepage data:", error))
    .finally(()=>setLoadGifting(false))
  }
  
  useEffect(() => {
    // Fetch the homepage data from your backend API
    fetch("https://jewellery-ecommerce-website.vercel.app/api/home")
      .then((response) => response.json())
      .then((data) => setHomepageData(data))
      .catch((error) => console.error("Error fetching homepage data:", error));
    
      getReccomended()
      getGifingItems()
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
        <div className="category mt-14 flex flex-col gap-10">
          {/*block 2*/}
          <h1 className="text-center font-semibold text-3xl py-2">
            Shop by category
            <div className="text-center font-semibold text-xl py-1">
            Browse through your favorite categories. We've got them all!
            </div>
          </h1>
          <div className="h-0.5 w-1/3  bg-[#832729] mx-auto"></div>
          {/*underline code*/}
          <div className=" flex gap-7 flex-wrap justify-center lg:w-11/12 mx-auto">
            {allcategories.map((category) => (
              <Citem
                cName={category.cName}
                cLink={category.cLink}
                cImg={category.imgurl}
                size={"lg:w-56 w-24 lg:h-56 lg:24"}
              />
            ))}
          </div>
        </div>
        <div className="category flex flex-col mt-10 gap-10">
          {/*block 3*/}
          <h1 className="text-center font-semibold text-3xl py-2">
            Shop by Collection
            <div className="text-center font-semibold text-xl py-1">
            Whatever the occasion, we've got a beautiful piece of jewellery for you.
            </div>
          </h1>
          <div className="h-0.5 w-1/3 bg-[#832729] mx-auto"></div>
          {/*underline code*/}
          <div className="flex gap-10 flex-wrap justify-center w-11/12 mx-auto">
            {collections.map((collection) => (
              <Citem
              cName={collection.cName}
              cLink={collection.cLink}
              cImg={collection.imgurl}
                size={"lg:w-72 w-24 lg:h-56 h-32"}
              />
            ))}
          </div>
        </div>
        <div className="category flex mt-10 flex-col gap-10">
          {/*block 4*/}
          <h1 className="text-center font-semibold text-3xl py-2">
            New For You
            <div className="text-center font-semibold text-xl py-1">
            Our latest releases, just for you !
            </div>
          </h1>
          <div className="h-0.5 w-1/3  bg-[#832729] mx-auto"></div>
          {/*underline code*/}
          <div className="flex gap-7 flex-wrap justify-center w-11/12 mx-auto">
            {homepageData && homepageData.New.map((New) => (
              <Citem cName={New.cName}
              cLink={New.cLink}
              cImg={New.imgurl} size={"lg:w-80 w-24 lg:h-72 h-32"} />
            ))}
          </div>
        </div>
        <div className="category flex flex-col mt-16 gap-10">
          {/*block 5*/}
          <h1 className="text-center font-semibold text-3xl py-2">
            Shop by Gender
            <div className="text-center font-semibold text-xl py-1">
            First-class jewelry for first-class Men, Women & Children.
            </div>
          </h1>
          <div className="h-0.5 w-1/3  bg-[#832729] mx-auto"></div>
          {/*underline code*/}
          <div className="flex gap-7 flex-wrap justify-center w-11/12 mx-auto">
            <Citem
              cImg="https://i.imghippo.com/files/8XbYk1713551029.jpg"
              cName="Mens"
              cLink={"/jewellery/mens"}
              size={"w-96 h-72 rounded-xl "}
            />
            <Citem
              cImg="https://i.imghippo.com/files/n6tfK1713551195.jpg"
              cName="Womens"
              cLink={"/jewellery/womens"}
              size={"w-96 h-72 rounded-2xl object-cover"}
            />
            <Citem
              cImg="https://i.imghippo.com/files/suoxl1713551129.jpg"
              cName="Kids"
              cLink={"/jewellery/kids"}
              size={"w-96 h-72 rounded-2xl object-cover"}
            />
          </div>
        </div>

        <div className="category flex mt-10 flex-col gap-10">
          {/*block 6*/}
          <h1 className="text-center font-semibold text-3xl py-2">
            Gifting Items
            <div className="text-center font-semibold text-xl py-1">
            Check out the Gifting Items for our customers
            </div>
          </h1>
          <div className="h-0.5 w-1/3  bg-[#832729] mx-auto"></div>
          {/*underline code*/}
          <div className="flex gap-7 flex-wrap justify-center w-full mx-auto">
          {loadgifting&&<div className='p-5 relative mx-auto flex flex-col gap-10 items-center justify-center font-semibold  h-80  text-center w-full '>
                    <div className='relative animate-spin text-2xl text-orange-400'>
                      <i class="fa-regular fa-gem fa-2xl -rotate-90"></i>
                      <i class="fa-regular fa-gem fa-2xl absolute -top-2 right-6"></i>
                      <i class="fa-regular fa-gem fa-2xl rotate-180 absolute -bottom-3 right-6"></i>
                      <i class="fa-regular fa-gem fa-2xl rotate-90"></i>
                    </div>
                    <div className='text-orange-400'>Loading...</div>
                  </div>}
          {!loadgifting&&gifting.map((item) => (
          <Pitem product={item} size={"lg:w-60 lg:h-60 h-52 object-cover w-96"} />  
            ))}
          </div>
        </div>
        <div className="category mt-10 flex flex-col gap-10">
          {/*block 7*/}
          <h1 className="text-center font-semibold text-3xl py-2">
            Reccomended for You
            <div className="text-center font-semibold text-xl py-1">
            Discover products tailored to your preferences and interests!
            </div>
          </h1>
          <div className="h-0.5 w-1/3  bg-[#832729] mx-auto"></div>
          {/*underline code*/}
          <div className="flex gap-7 flex-wrap justify-center w-full mx-auto">
          {loadReccomended&&<div className='p-5 relative mx-auto flex flex-col gap-10 items-center justify-center font-semibold  h-80  text-center w-full '>
                    <div className='relative animate-spin text-2xl text-orange-400'>
                      <i class="fa-regular fa-gem fa-2xl -rotate-90"></i>
                      <i class="fa-regular fa-gem fa-2xl absolute -top-2 right-6"></i>
                      <i class="fa-regular fa-gem fa-2xl rotate-180 absolute -bottom-2 right-6"></i>
                      <i class="fa-regular fa-gem fa-2xl rotate-90"></i>
                    </div>
                    <div className='text-orange-400'>Loading...</div>
                  </div>}
          {!loadReccomended&&Reccomended.map((item) => (
          <Pitem product={item} size={"lg:w-60 lg:h-60 h-52 object-cover w-96"} />  
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
