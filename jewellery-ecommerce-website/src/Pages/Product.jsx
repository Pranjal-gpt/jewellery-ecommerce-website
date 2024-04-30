import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import Hr from '../Components/Hr';
import TotalRating from '../Components/TotalRating'
import features from '../assets/features.png'
import Pitem from '../Components/Pitem';
import { Link,useNavigate} from 'react-router-dom';
import categories from '../data/demodata';
const { SimilarProducts } = categories;
import { CartProvider,useCart } from '../contexts/cartContext';
import { useWishlist } from '../contexts/wishlistContext';

const Product = () => {
    let navigate = useNavigate()
    const { addToCart,cartItems } = useCart();
    const {WishlistItems, addToWishlist,removeFromWishlist} = useWishlist();
    const [productDetails,setProductDetails] = useState([])
    const [Quantity,setQuantity] = useState(1)
    const [similar, setsimilar] = useState([])
    
    var permalink=window.location.href;
    const pId = permalink.split("#")[permalink.split("#").length - 1];
    const [isWishlist, setisWishlist] = useState(WishlistItems.some(item => parseInt(item.id) ===parseInt(pId) ))
    const [isinCart, setisinCart] = useState(cartItems.some(item =>  parseInt(item.id) ===parseInt(pId)  ))
    
    useEffect(() => {
        window.scroll(0,0)
        // getJewelleryById()
            fetch(`http://localhost:3000/api/jewellery/${pId}`)
              .then((response) => response.json())
              .then((data) => {setProductDetails(data)})
              .catch((error) => console.error("Error fetching product details:", error));
          },[]
    )
    // useEffect(()=>{
    //     setisWishlist(WishlistItems.some(item => item.id ==pId ));
    // },[isWishlist])
    // var productDetails;
    const [CurrentImg,setCurrentImg]=useState("");
    const [pincode, setPincode] = useState('');
    const [shipday, setShipday] = useState('');
   

    const handleAddToCart = () => {
        if (!isinCart) {
            
            const newItem = {
                id: productDetails._id,
                title: productDetails.title,
                price: productDetails.price,
                discount: productDetails.discount,
                metal:productDetails.metal,
                platingColor:productDetails.platingColor,
                quantity: Quantity,
                image:productDetails.images[0],
        };
        addToCart(newItem);
        console.log("added item to Cart",productDetails._id)
        setisinCart(true)
    }
      };
      const handleWishlistClick = () => {
        if (isWishlist) {
            removeFromWishlist(productDetails._id)
            console.log("removed item from Wishlist", productDetails._id)
        }
        else{

            const newItem = {
              id: productDetails._id, // Assuming product id is available in productDetails
              title: productDetails.title,
              description:productDetails.description,
              price: productDetails.price,
              metal:productDetails.metal,
              discount: productDetails.discount,
              karatage:productDetails.karatage,
              image:productDetails.images[0],
            }
            addToWishlist(newItem);
            console.log("added item to Wishlist",productDetails._id)
        };
        setisWishlist(!isWishlist);
      };


    const CheckPincode = async () => {
        const value = pincode;
        const url = 'https://india-pincode-with-latitude-and-longitude.p.rapidapi.com/api/v1/pincode/'+pincode;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '012183ec7bmsh8f9490a025cdb7fp152eb5jsn9bdff2ef4adf',
                'X-RapidAPI-Host': 'india-pincode-with-latitude-and-longitude.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.text();
            let statee =JSON.parse(result)[0].state;
            setShipday(statee=="Madhya Pradesh"?3:10);
        } catch (error) {
            console.error(error);
        }
    };
      const starRating = (rating) => {
        const stars = [];
        for (let i = 1; i <= rating; i++) {
          stars.push(<i class="fa fa-star" aria-hidden="true"></i>); 
        }
        if (stars.length<5) {
            for (let i = 0; i < 5-rating; i++) {
                stars.push(<i class="fa-regular fa-star"></i>); 
              }
        }
        return stars;
      };
      
    return (
    <>
        <CartProvider >
        <Nav />
      
        <main className='lg:mx-20 flex flex-wrap lg:flex-row flex-col relative bg-orange-50'>
            <div className='relative flex  lg:w-1/2'>
                <section className='bg-orange-50  lg:h-[70vh] w-11/12  p-2 sticky top-20 '>
                    <div className='border-b p-1 border-b-orange-200'> <Link to={"/"} className='hover:text-orange-600'>Home </Link> {">"} <Link className='hover:text-orange-600' to={"/jewellery"}>Products </Link>   {">"} {productDetails.title}</div>
                    <div className='mt-3 flex gap-5 justify-around'>
                        <div className='flex flex-col items-center justify-between  w-1/5 lg:h-[60vh]' >
                            {productDetails && productDetails.images && productDetails.images.map((imgsrc)=>(
                                <img src={imgsrc} className='lg:h-32 lg:w-32 object-center border-2 border-orange-200 drag-none'
                                onMouseOver={()=>{setCurrentImg(imgsrc)}}></img>
                            ))}
                        </div>
                        <div className='bg-orange-100 w-2/3 p-5'>
                            <img src={CurrentImg!==""?CurrentImg:productDetails.images?.[0]} alt={productDetails.title}
                                className='lg:h-full lg:w-full'
                            />
                        </div>
                    </div>
                </section>
            </div>
            <section className='bg-orange-100 lg:w-1/2 w-full min-h-[120vh] px-8'>
                <div className='flex justify-between  py-5'>
                    <div className="pid">{productDetails._id}</div>
                    <div className='relative flex gap-5'>
                        <button onClick={handleWishlistClick} className="w-8 h-8  bg-orange-200 flex items-center justify-center rounded-full group hover:shadow-2xl">
                           {isWishlist?<i class="fa-solid fa-heart  group-hover:scale-125 group-active:scale-150  transition-all duration-500 "></i> :<i class="fa-regular fa-heart group-hover:scale-125 group-active:-scale-150 transition-all duration-500"></i> } 
                            <div className="absolute text-sm -bottom-14 hidden group-hover:block p-1 rounded-md bg-orange-50 border w-24 text-center"> {isWishlist?"Remove From Wishlist":"Add To Wishlist"}</div>
                        </button>
                        <button 
                            onMouseLeave={()=>document.getElementById('copy').innerHTML="Copy Link <br/> to Share"}
                        className="w-8 h-8  bg-orange-200 flex items-center justify-center rounded-full  group hover:shadow-2xl">
                            <i class="fa-solid fa-share-nodes group-hover:scale-125"></i>
                            <div id='copy' 
                            onClick={()=>{
                                window.navigator.clipboard.writeText(window.location.href)
                                document.getElementById('copy').innerHTML="Copied to Clipboard"
                            }}
                             className="absolute text-sm -bottom-8 opacity-80 hidden group-hover:block p-1 rounded-md bg-orange-50 hover:bg-orange-200 active:bg-orange-700 active:text-orange-100 hover:shadow-xl border w-24 text-center">Copy Link <br /> to Share</div>
                        </button>
                    </div>
                </div>
                <h1 className='text-3xl  pb-4 mb-4 font-bold'>{productDetails.title}</h1>
                <div>
                    <TotalRating productDetails={productDetails} />
                </div>
                <Hr thickness={"h-0.5"} length={"w-full"} color='bg-orange-200' />

                <h3 className='text-lg'>{productDetails.description}</h3>
                <div className='my-3'>
                    <div className=' font-semibold mb-1'>
                            <span>Price.</span>
                            <span className='mx-2 font-semibold text-2xl text-green-600'>₹{(productDetails.price-(productDetails.price*productDetails.discount)/100).toFixed(2)}</span>
                            <strike className=' text-orange-700'>₹{productDetails.price}</strike> <span className='w-fit text-orange-700 border-2 border-orange-800 p-1'>{productDetails.discount+"% OFF"}</span>
                    </div>
                    <div className='text-sm'>Price Inclusive of all taxes.</div>
                    {/* <span className='text-orange-900 font-semibold hover:text-orange-500 cursor-pointer'>Price Breakup</span>  */}
                </div>
                <div>{productDetails.metal}</div>
                {(localStorage.getItem("token")&&productDetails.merchant!=JSON.parse(atob(localStorage.getItem("token").split(".")[1])).email)&&
                    <span>
                        <div className='border border-orange-800 w-fit p-2 my-3 mx-auto rounded flex gap-5 items-center'>
                            Quantity 
                            <i class="fa-solid fa-minus bg-orange-200 text-orange-800 rounded p-2 cursor-pointer" onClick={()=>{Quantity>1 && setQuantity(Quantity-1)}}></i>
                            <div className=' bg-orange-800 text-orange-50 font-bold text-xl rounded px-2 py-1'>{Quantity}</div>
                            <i class="fa-solid fa-plus bg-orange-200 text-orange-800 rounded p-2 cursor-pointer"  onClick={()=>{setQuantity(Quantity+1)}}></i>
                        </div>
                        
                        <div className='flex justify-around text-xl my-3'>
                            <button 
                                className='px-10 py-3 rounded border-2 border-orange-800 hover:bg-orange-200 transition-all duration-100 '
                                onClick={handleAddToCart}
                            >{isinCart?"Added In Cart":"Add To Cart"}</button>
                            <button 
                                className='px-10 py-3 rounded border-2 border-orange-800 hover:bg-orange-200 hover:text-orange-800 bg-orange-800 text-orange-50 transition-all duration-100 '
                                onClick={()=>{handleAddToCart(); setTimeout(() => {navigate("/cart") }, 50); }}
                                >Buy Now</button>
                        </div>
                    </span>
                }
                {isinCart&&<div className='text-center mb-1'> <Link to={"/cart"} className='text-xl  text-orange-700 hover:bg-orange-200 rounded-lg px-2'>View Cart</Link></div>}

                

                <Hr thickness={"h-0.5"} length={"w-full"} color='bg-orange-200' />
                <div className='my-5'>
                    <table>
                        <tr ><td><i class="fa-regular fa-gem"></i></td><td>Purity Guaranteed.</td></tr>
                        <tr ><td><i class="fa-solid fa-arrow-right-arrow-left"></i></td><td>Exchange across all stores.</td></tr>
                        <tr ><td><i class="fa-solid fa-truck-fast"></i></td><td>Free Shipping all across India.</td></tr>
                    </table>
                </div>
                <Hr thickness={"h-0.5"} length={"w-full"} color='bg-orange-200' />
                <div className='flex justify-center gap-5'>
                        <fieldset className='border-2 border-orange-800 rounded-md text-center p-1 '>
                            <legend>Country</legend>
                            <select name="" id="" className='py-2 px-5 bg-orange-50 rounded-lg'>
                                <option value="india" selected>India</option>
                            </select>
                        </fieldset>
                        <fieldset className='border-2 border-orange-800 rounded-md text-center  py-1 relative'>
                            <legend>Pincode</legend>
                            <input type="text" placeholder='Enter pincode' id="" className='px-2 h-full rounded-lg bg-orange-50 text-xl focus:border-orange-300 focus:ring-orange-300'
                                onChange={(change)=>{setPincode(change.target.value)}}
                                value={pincode} />
                            <button disabled={!pincode}className={`font-bold p-1 rounded-lg absolute right-3 top-2 ${pincode === ""? "text-orange-50  bg-orange-100" : "hover:bg-orange-300  bg-orange-100"} cursor-pointer`}
                                onClick={CheckPincode} >Check</button>
                        </fieldset>
                </div>
                <div className='text-center py-5'>Shipping Delivery Days Taken {shipday>0 && <span className='text-orange-600'>: {shipday}-{shipday+2} Working Days <i class="fa-solid fa-truck-fast"></i></span>}</div>
                <Hr thickness={"h-0.5"} length={"w-full"} color='bg-orange-200' />
                <img src={features} alt="" className='bg-orange-50 rounded-xl mt-5 drag-none' />
            </section>
            <section className='lg:min-h-fit bg-orange-100 w-full z-10'>
                <div className='w-full p-8'>
                    <h1 className='text-center font-bold text-2xl'>Product Details</h1>
                    <div className='lg:p-5 flex  w-full justify-center'>
                        <table className='text-left' cellPadding={10}>
                            <tr className='border-b border-r border-r-orange-200 border-b-orange-200 hover:bg-orange-200 cursor-pointer' >
                                <th>Brand</th>
                                <td className='px-3'>:</td>
                                <td>{productDetails.brand}</td>
                            </tr>
                            <tr className='border-b border-r border-r-orange-200 border-b-orange-200 hover:bg-orange-200 cursor-pointer ' >
                                <th>Collection</th>
                                <td className='px-3'>:</td>
                                <td>{productDetails.jcollection}</td>
                            </tr>
                            <tr className='border-b border-r border-r-orange-200 border-b-orange-200 hover:bg-orange-200 cursor-pointer ' >
                                <th>Gender</th>
                                <td className='px-3'>:</td>
                                <td>{productDetails.gender}</td>
                            </tr>
                            <tr className='border-b border-r border-r-orange-200 border-b-orange-200 hover:bg-orange-200 cursor-pointer ' >
                                <th>Jewellery Type</th>
                                <td className='px-3'>:</td>
                                <td>{productDetails.jewelleryType}</td>
                            </tr>
                            <tr className='border-b border-r border-r-orange-200 border-b-orange-200 hover:bg-orange-200 cursor-pointer ' >
                                <th>Occasion</th>
                                <td className='px-3'>:</td>
                                <td>{productDetails.occasion}</td>
                            </tr>
                        </table>
                        <table className='text-left'  cellPadding={10}>
                            <tr className='border-b border-b-orange-200 hover:bg-orange-200 cursor-pointer ' >
                                <th>Plating Color</th>
                                <td className='px-3'>:</td>
                                <td>{productDetails.platingColor}</td>
                            </tr>
                            <tr className='border-b border-b-orange-200 hover:bg-orange-200 cursor-pointer ' >
                                <th>Metal</th>
                                <td className='px-3'>:</td>
                                <td>{productDetails.metal}</td>
                            </tr>
                            {productDetails.size>0&&
                            <tr className='border-b border-b-orange-200 hover:bg-orange-200 cursor-pointer ' >
                                <th>Size</th>
                                <td className='px-3'>:</td>
                                <td>{productDetails.size}</td>
                            </tr>
                            }
                        </table>
                        {/* <table className='text-left'  cellPadding={10}>
                            <tr className='border-b border-b-orange-200 hover:bg-orange-200 cursor-pointer ' >
                                <th>Diamond Quantity</th>
                                <td className='px-3'>:</td>
                                <td>{productDetails.noOfDiamonds}</td>
                            </tr>
                            <tr className='border-b border-b-orange-200 hover:bg-orange-200 cursor-pointer ' >
                                <th>Diamond Color</th>
                                <td className='px-3'>:</td>
                                <td>{productDetails.diamondColor}</td>
                            </tr>
                            <tr className='border-b border-b-orange-200 hover:bg-orange-200 cursor-pointer ' >
                                <th>Diamond Clarity</th>
                                <td className='px-3'>:</td>
                                <td>{productDetails.diamondClarity}</td>
                            </tr>
                            <tr className='border-b border-b-orange-200 hover:bg-orange-200 cursor-pointer ' >
                                <th>Diamond Shape</th>
                                <td className='px-3'>:</td>
                                <td>{productDetails.diamondShape}</td>
                            </tr>
                            <tr className='border-b border-b-orange-200 hover:bg-orange-200 cursor-pointer ' >
                                <th>Diamond Setting</th>
                                <td className='px-3'>:</td>
                                <td>{productDetails.diamondSetting}</td>
                            </tr>
                        </table> */}
                    </div>
                </div>
                {/* <div>
                    <h2 className='text-2xl font-bold text-center'>Similar Products</h2>
                        <div className='section flex gap-10 flex-wrap justify-center mt-5 mx-auto  w-11/12'>
                            {SimilarProducts.map((product)=>(
                            <Pitem product={product} mode={"similars"} size={"w-60"} />
                            ))}
                        </div>
                </div> */}
                {/* <div className=' w-10/12 mx-auto mt-10'>
                    <h1 className='text-center text-2xl font-bold'>Reviews</h1>
                    {productDetails.reviews && productDetails.reviews.map((review)=>(
                        
                        <div className='mb-5 flex p-5  relative'>
                            <div className='w-1/4'></div>
                            <div>
                                <div className='text-lg font-semibold'>
                                    {review.user}
                                </div>
                                {review.rating && (
                                    <div className='flex items-center'>
                                        Rating: <span className='text-3xl'> {starRating(review.rating)}</span>
                                    </div>
                                )}
                                <div className='mt-2'>
                                    {review.comment}
                                </div>
                            </div>
                            <div className="w-8 h-8 cursor-pointer group flex items-center justify-center absolute  top-5 right-5 rounded-full   hover:shadow-2xl">
                                <i class="fa-solid fa-ellipsis-vertical   group-hover:bg-orange-200 px-3 py-2 rounded-md translate-all ease-in duration-100 group"></i>
                                
                                <div className="absolute text-sm -bottom-7 hidden p-1 rounded-md bg-orange-50 hover:bg-orange-200 border w-24 text-center group-hover:block"> Report</div>
                            </div>
                        </div>
                    ))}
                </div> */}
            </section>
        </main>
        </CartProvider>
        <Footer />
    </>
  )
}

export default Product