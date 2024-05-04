import {useState,useEffect} from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import categories from '../data/demodata'
import TotalRating from '../Components/TotalRating'
import { Link } from 'react-router-dom'
import { CartProvider,useCart } from '../contexts/cartContext';
// const {WishlistData} = categories;
import { WishlistProvider,useWishlist } from '../contexts/wishlistContext'
const Wishlist = () => {

    const { WishlistItems, removeFromWishlist } = useWishlist();
    // const [WishlistData, setWishlistData] = useState([]);
    const { addToCart,cartItems } = useCart();

    // const getCartData = () => {
    //     fetch("https://jewellery-ecommerce-website.vercel.app/api/cart")
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setWishlistData(data);
    //         })
    //         .catch((error) => console.error("Error fetching wishlist data:", error));
    //     }
    //     useEffect(()=>{
    //         getCartData()
    //     })

        const handleAddToCart = (productDetails) => {
           
                const newItem = {
                    id: productDetails._id, // Assuming product id is available in productDetails
                    title: productDetails.title,
                    price: productDetails.price,
                    discount: productDetails.discount,
                    metal:productDetails.metal,
                    karatage:productDetails.karatage,
                    quantity: 1,
                    image:productDetails.image,
            };
            addToCart(newItem);
            console.log("added item to Cart",productDetails._id)
            
        
          };
  return (
    <>
        <CartProvider>
        <Nav />
      </CartProvider>
      <WishlistProvider>

      
        <main>
            <h1 className='text-center text-4xl p-4 font-semibold'>Your Wishlist ({WishlistItems.length})</h1>
            <section className='w-10/12 mx-auto flex flex-col gap-1 min-h-96 bg-orange-100'>
                {WishlistItems.length===0&&(<div className='mx-auto mt-40 text-xl'>No Items In Your Wishlist.</div>)}
                {WishlistItems.map((item,key)=>(
                    <div className='w-full bg-orange-50 lg:p-5 flex lg:flex-row justify-center items-center flex-col relative' key={key}>
                        <div><img src={item.image} className='lg:w-60 w-52 h-52 lg:h-52 object-cover' alt="" /></div>
                       
                        <div className='p-5'>
                            <h1 className='lg:text-3xl text-lg  font-bold'>{item.title}</h1>
                            <h1 className='lg:text-lg text-sm lg:mt-4 lg:mb-10  '>{item.description}</h1>
                            <TotalRating productDetails={item} />
                            <div className=' font-semibold'>
                                <span>Price.</span>
                                <span className='mx-2 font-semibold text-2xl text-green-600'>₹{(item.price-(item.price*item.discount)/100).toFixed(2)}</span>
                                <strike className=' text-orange-700'>₹{item.price}</strike><span className='w-fit text-orange-700 border-2 ml-2 border-orange-800 p-1'>{item.discount+"% OFF"}</span>
                            </div>
                        </div>
                            <div className='text-xl my-3 w-96 flex lg:flex-row flex-col items-center justify-around'>
                                <div className='flex flex-col gap-4'>
                                    
                                    <Link className=" bg-orange-200 hover:bg-orange-100 rounded-md px-5 py-2 text-center"
                                    to={"/jewellery/item/"+item.title.replace(/ /g, "-") +"#"+ item.id} state={item}>View</Link>
                                </div>
                                {(localStorage.getItem("token")&&JSON.parse(atob(localStorage.getItem("token").split(".")[1])).userType!="merchant")&&
                                <div className='flex flex-col justify-around lg:h-48 gap-1 p-1'>
                                    <button 
                                        className='lg:px-10 lg:py-3 p-2 rounded border-2 border-orange-800 hover:bg-orange-200 transition-all duration-100 '
                                        onClick={()=>{
                                            !cartItems.some(citem =>  parseInt(citem.id) ===parseInt(item.id))&&handleAddToCart(item)
                                        }}
                                    >{!cartItems.some(citem =>  parseInt(citem.id) ===parseInt(item.id))?"Add To Cart":"Added in Cart"}</button>
                                    <button 
                                        className='lg:px-10 lg:py-3 p-2 rounded border-2 border-orange-800 hover:bg-orange-200 hover:text-orange-800 bg-orange-800 text-orange-50 transition-all duration-100 '
                                        onClick={()=>{}}
                                    >Buy Now</button>
                                </div>}
                            </div>
                            <div className='relative flex gap-5'>
                            <button 
                            onMouseLeave={()=>document.getElementById('copy').innerHTML="Copy Link <br/> to Share"}
                        className="w-8 h-8  bg-orange-200 flex items-center justify-center rounded-full  group hover:shadow-2xl">
                            <i class="fa-solid fa-share-nodes group-hover:scale-125"></i>
                            <div id='copy' 
                            onClick={()=>{
                                window.navigator.clipboard.writeText("http://localhost:5173/jewellery/item/"+item.title.replace(/ /g, "-") +"#"+ item.id)
                                document.getElementById('copy').innerHTML="Copied to Clipboard"
                            }}
                             className="absolute text-sm -bottom-8 opacity-80 hidden group-hover:block p-1 rounded-md bg-orange-50 hover:bg-orange-200 active:bg-orange-700 active:text-orange-100 hover:shadow-xl border w-24 text-center">Copy Link <br /> to Share</div>
                        </button>
                                <button onClick={() => removeFromWishlist(item.id)} className="w-8 h-8 active:bg-orange-500 bg-orange-200 flex items-center justify-center rounded-full group hover:shadow-2xl">
                                    <i class="fa-solid fa-xmark group-hover:scale-125"></i>
                                    <div className="absolute text-sm top-10 hidden group-hover:block p-1 rounded-md bg-orange-50 border w-24 text-center"> Remove From Wishlist</div>
                                </button>
                            </div>
                    </div>
                ))}
            </section>
        </main></WishlistProvider>
        <Footer />
    </>
  )
}

export default Wishlist