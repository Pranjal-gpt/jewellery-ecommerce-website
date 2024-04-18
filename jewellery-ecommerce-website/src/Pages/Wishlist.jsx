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
    const [WishlistData, setWishlistData] = useState([]);
    const { addToCart,cartItems } = useCart();

    const getCartData = () => {
        fetch("http://localhost:3000/api/cart")
            .then((response) => response.json())
            .then((data) => {
                setWishlistData(data);
            })
            .catch((error) => console.error("Error fetching wishlist data:", error));
        }
        useEffect(()=>{
            getCartData()
        })

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
            <section className='w-10/12 mx-auto flex flex-col gap-1 min-h-96 bg-rose-100'>
                {WishlistItems.length===0&&(<div className='mx-auto mt-40 text-xl'>No Items In Your Wishlist.</div>)}
                {WishlistItems.map((item,key)=>(
                    <div className='w-full bg-rose-50 p-5 flex relative' key={key}>
                        <div><img src={item.image} className='w-60' alt="" /></div>
                       
                        <div className='p-5'>
                            <h1 className='text-3xl   font-bold'>{item.title}</h1>
                            <h1 className='text-lg  mt-4 mb-10  '>{item.description}</h1>
                            <TotalRating productDetails={item} />
                            <div className=' font-semibold'>
                                <span>Price.</span>
                                <span className='mx-2 font-semibold text-2xl text-green-600'>₹{(item.price-(item.price*item.discount)/100).toFixed(2)}</span>
                                <strike className=' text-rose-700'>₹{item.price}</strike><span className=' text-rose-700'> {"(discounted "+item.discount+"%)"}</span>
                            </div>
                        </div>
                            <div className='text-xl my-3 w-96 flex items-center justify-around'>
                                <div className='flex flex-col gap-4'>
                                    
                                    <Link className=" bg-rose-200 hover:bg-rose-100 rounded-md px-5 py-2 text-center"
                                    to={"/jewellery/item/"+item.title.replace(/ /g, "-") +"#"+ item.id} state={item}>View</Link>
                                </div>
                                {item.merchant==JSON.parse(atob(localStorage.getItem("token").split(".")[1])).email&&
                                <div className='flex flex-col justify-around h-48'>
                                    <button 
                                        className='px-10 py-3 rounded border-2 border-rose-800 hover:bg-rose-200 transition-all duration-100 '
                                        onClick={()=>{
                                            !cartItems.some(citem =>  parseInt(citem.id) ===parseInt(item.id))&&handleAddToCart(item)
                                        }}
                                    >{!cartItems.some(citem =>  parseInt(citem.id) ===parseInt(item.id))?"Add To Cart":"Added in Cart"}</button>
                                    <button 
                                        className='px-10 py-3 rounded border-2 border-rose-800 hover:bg-rose-200 hover:text-rose-800 bg-rose-800 text-rose-50 transition-all duration-100 '
                                        onClick={()=>{}}
                                    >Buy Now</button>
                                </div>}
                            </div>
                            <div className='relative flex gap-5'>
                                <div className="w-8 h-8  bg-rose-200 flex items-center justify-center rounded-full  group hover:shadow-2xl">
                                    <i class="fa-solid fa-share-nodes group-hover:scale-125"></i>
                                    <div className="absolute text-sm top-10 hidden group-hover:block p-1 rounded-md bg-rose-50 border w-24 text-center"> Share This</div>
                                </div>
                                <button onClick={() => removeFromWishlist(item.id)} className="w-8 h-8 active:bg-rose-500 bg-rose-200 flex items-center justify-center rounded-full group hover:shadow-2xl">
                                    <i class="fa-solid fa-xmark group-hover:scale-125"></i>
                                    <div className="absolute text-sm top-10 hidden group-hover:block p-1 rounded-md bg-rose-50 border w-24 text-center"> Remove From Wishlist</div>
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