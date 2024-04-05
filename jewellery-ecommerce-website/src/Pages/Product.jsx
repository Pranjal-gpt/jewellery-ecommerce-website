import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import Hr from '../Components/Hr';
import features from '../assets/features.png'
import Pitem from '../Components/Pitem';
import { Link } from 'react-router-dom';
import productsdata from '../data/productData'
const productDetails = productsdata.productDetails;
const SimilarProducts = productsdata.SimilarProducts;

const Product = () => {
    var permalink=window.location.href;
    const pId = permalink.split("#")[permalink.split("#").length - 1];
    const [Quantity,setQuantity] = useState(1);
    const [CurrentImg,setCurrentImg]=useState(productDetails ? productDetails.images[0] : null);
    const [pincode, setPincode] = useState('');
    const [shipday, setShipday] = useState('');

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
        <Nav />
        <main className='px-20 flex flex-wrap relative'>
            <section className='bg-rose-50 w-1/2 h-[70vh] sticky top-28 p-2'>
                <div className='border-b p-1 border-b-rose-200'> <Link to={"/"} className='hover:text-rose-600'>Home </Link> {">"} <Link className='hover:text-rose-600' to={"/jewellery"}>Products </Link>   {">"} {productDetails.name}</div>
                <div className='mt-3 flex gap-5 justify-around'>
                    <div className='flex flex-col items-center justify-between  w-1/5 h-[60vh]' >
                        {productDetails.images.map((imgsrc)=>(
                            <img src={imgsrc} className='h-32 w-32 object-center border-2 border-rose-200 drag-none'
                            onMouseOver={()=>{setCurrentImg(imgsrc)}}></img>
                        ))}
                    </div>
                    <div className='bg-rose-100 w-2/3 p-5'>
                        <img src={CurrentImg} alt={productDetails.name}
                            className='h-full w-full'
                        />
                    </div>
                </div>

            </section>
            <section className='bg-rose-100 w-1/2 h-[120vh] px-8'>
                <div className='flex justify-between  py-5'>
                    <div className="pid">{pId}</div>
                    <div className='relative flex gap-5'>
                        <div className="w-8 h-8  bg-rose-200 flex items-center justify-center rounded-full group hover:shadow-2xl">
                            <i class="fa-regular fa-heart group-hover:scale-125"></i>
                            <div className="absolute text-sm -bottom-14 hidden group-hover:block p-1 rounded-md bg-rose-50 border w-24 text-center"> {false?"Remove From Wishlist":"Add To Wishlist"}</div>
                        </div>
                        <div className="w-8 h-8  bg-rose-200 flex items-center justify-center rounded-full  group hover:shadow-2xl">
                            <i class="fa-solid fa-share-nodes group-hover:scale-125"></i>
                            <div className="absolute text-sm -bottom-10 hidden group-hover:block p-1 rounded-md bg-rose-50 border w-24 text-center"> Share This</div>
                        </div>
                    </div>
                </div>
                <h1 className='text-3xl  pb-4 mb-4 font-bold'>{productDetails.name}</h1>
                <div></div>
                <Hr thickness={"h-0.5"} length={"w-full"} color='bg-rose-200' />

                <h3 className='text-lg'>{productDetails.description}</h3>
                <div className='my-3'>
                    <div className='text-rose-700 font-semibold'>
                        <span>Price.</span>
                        <span className='mx-2 font-bold text-2xl'>{productDetails.price}</span>
                        <span>INR</span>
                    </div>
                    <div className='text-sm'>Price Inclusive of all taxes. See full <span className='text-rose-900 font-semibold hover:text-rose-500 cursor-pointer'>Price Breakup</span> </div>
                </div>
                <div>{productDetails.metal}</div>
                <div className='border border-rose-800 w-fit p-2 my-3 mx-auto rounded flex gap-5 items-center'>
                    Quantity 
                    <i class="fa-solid fa-minus bg-rose-200 text-rose-800 rounded p-2 cursor-pointer" onClick={()=>{Quantity>1 && setQuantity(Quantity-1)}}></i>
                     <div className=' bg-rose-800 text-rose-50 font-bold text-xl rounded px-2 py-1'>{Quantity}</div>
                    <i class="fa-solid fa-plus bg-rose-200 text-rose-800 rounded p-2 cursor-pointer"  onClick={()=>{setQuantity(Quantity+1)}}></i>
                </div>
                <div className='flex justify-around text-xl my-3'>
                    <button 
                        className='px-10 py-3 rounded border-2 border-rose-800 hover:bg-rose-200 transition-all duration-100 '
                        onClick={()=>{}}
                    >Add To Cart</button>
                    <button 
                        className='px-10 py-3 rounded border-2 border-rose-800 hover:bg-rose-200 hover:text-rose-800 bg-rose-800 text-rose-50 transition-all duration-100 '
                        onClick={()=>{}}
                    >Buy Now</button>
                </div>

                

                <Hr thickness={"h-0.5"} length={"w-full"} color='bg-rose-200' />
                <div className='my-5'>
                    <table>
                        <tr ><td><i class="fa-regular fa-gem"></i></td><td>Purity Guaranteed.</td></tr>
                        <tr ><td><i class="fa-solid fa-arrow-right-arrow-left"></i></td><td>Exchange across all stores.</td></tr>
                        <tr ><td><i class="fa-solid fa-truck-fast"></i></td><td>Free Shipping all across India.</td></tr>
                    </table>
                </div>
                <Hr thickness={"h-0.5"} length={"w-full"} color='bg-rose-200' />
                <div className='flex justify-center gap-5'>
                        <fieldset className='border-2 border-rose-800 rounded-md text-center p-1 '>
                            <legend>Country</legend>
                            <select name="" id="" className='py-2 px-5 bg-rose-50 rounded-lg'>
                                <option value="india" selected>India</option>
                            </select>
                        </fieldset>
                        <fieldset className='border-2 border-rose-800 rounded-md text-center  py-1 relative'>
                            <legend>Pincode</legend>
                            <input type="text" placeholder='Enter pincode' id="" className='px-2 h-full rounded-lg bg-rose-50 text-xl focus:border-rose-300 focus:ring-rose-300'
                                onChange={(change)=>{setPincode(change.target.value)}}
                                value={pincode} />
                            <button disabled={!pincode}className={`font-bold p-1 rounded-lg absolute right-3 top-2 ${pincode === ""? "text-rose-50  bg-rose-100" : "hover:bg-rose-300  bg-rose-100"} cursor-pointer`}
                                onClick={CheckPincode} >Check</button>
                        </fieldset>
                </div>
                <div className='text-center py-5'>Shipping Delivery Days Taken {shipday>0 && <span className='text-rose-600'>: {shipday}-{shipday+2} Working Days <i class="fa-solid fa-truck-fast"></i></span>}</div>
                <Hr thickness={"h-0.5"} length={"w-full"} color='bg-rose-200' />
                <img src={features} alt="" className='bg-rose-50 rounded-xl mt-5 drag-none' />
            </section>
            <section className='min-h-screen bg-rose-100 w-full sticky'>
                <div className='w-full p-8'>
                    <h1 className='text-center font-bold text-2xl'>Product Details</h1>
                    <div className='p-5 flex  w-full justify-center'>
                        <table className='text-left' cellPadding={20}>
                            <tr className='border-b border-b-rose-200 hover:bg-rose-200 cursor-pointer' >
                                <th>Brand</th>
                                <td className='px-3'>:</td>
                                <td>{productDetails.brand}</td>
                            </tr>
                            <tr className='border-b border-b-rose-200 hover:bg-rose-200 cursor-pointer ' >
                                <th>Collection</th>
                                <td className='px-3'>:</td>
                                <td>{productDetails.collection}</td>
                            </tr>
                            <tr className='border-b border-b-rose-200 hover:bg-rose-200 cursor-pointer ' >
                                <th>Gender</th>
                                <td className='px-3'>:</td>
                                <td>{productDetails.gender}</td>
                            </tr>
                            <tr className='border-b border-b-rose-200 hover:bg-rose-200 cursor-pointer ' >
                                <th>Jewellery Type</th>
                                <td className='px-3'>:</td>
                                <td>{productDetails.jewelleryType}</td>
                            </tr>
                            <tr className='border-b border-b-rose-200 hover:bg-rose-200 cursor-pointer ' >
                                <th>Occasion</th>
                                <td className='px-3'>:</td>
                                <td>{productDetails.occasion}</td>
                            </tr>
                        </table>
                        <table className='text-left'  cellPadding={10}>
                            <tr className='border-b border-b-rose-200 hover:bg-rose-200 cursor-pointer ' >
                                <th>Material Color</th>
                                <td className='px-3'>:</td>
                                <td>{productDetails.materialColour}</td>
                            </tr>
                            <tr className='border-b border-b-rose-200 hover:bg-rose-200 cursor-pointer ' >
                                <th>Metal</th>
                                <td className='px-3'>:</td>
                                <td>{productDetails.metal}</td>
                            </tr>
                            <tr className='border-b border-b-rose-200 hover:bg-rose-200 cursor-pointer ' >
                                <th>Height</th>
                                <td className='px-3'>:</td>
                                <td>{productDetails.pendantHeight}</td>
                            </tr>
                            <tr className='border-b border-b-rose-200 hover:bg-rose-200 cursor-pointer ' >
                                <th>Width</th>
                                <td className='px-3'>:</td>
                                <td>{productDetails.pendantWidth}</td>
                            </tr>
                            <tr className='border-b border-b-rose-200 hover:bg-rose-200 cursor-pointer ' >
                                <th>Karatage</th>
                                <td className='px-3'>:</td>
                                <td>{productDetails.karatage}</td>
                            </tr>
                        </table>
                        <table className='text-left'  cellPadding={10}>
                            <tr className='border-b border-b-rose-200 hover:bg-rose-200 cursor-pointer ' >
                                <th>Diamond Quantity</th>
                                <td className='px-3'>:</td>
                                <td>{productDetails.noOfDiamonds}</td>
                            </tr>
                            <tr className='border-b border-b-rose-200 hover:bg-rose-200 cursor-pointer ' >
                                <th>Diamond Color</th>
                                <td className='px-3'>:</td>
                                <td>{productDetails.diamondColor}</td>
                            </tr>
                            <tr className='border-b border-b-rose-200 hover:bg-rose-200 cursor-pointer ' >
                                <th>Diamond Clarity</th>
                                <td className='px-3'>:</td>
                                <td>{productDetails.diamondClarity}</td>
                            </tr>
                            <tr className='border-b border-b-rose-200 hover:bg-rose-200 cursor-pointer ' >
                                <th>Diamond Shape</th>
                                <td className='px-3'>:</td>
                                <td>{productDetails.diamondShape}</td>
                            </tr>
                            <tr className='border-b border-b-rose-200 hover:bg-rose-200 cursor-pointer ' >
                                <th>Diamond Setting</th>
                                <td className='px-3'>:</td>
                                <td>{productDetails.diamondSetting}</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div>
                    <h2 className='text-2xl font-bold text-center'>Similar Products</h2>
                        <div className='section flex gap-10 flex-wrap justify-center mt-5 mx-auto  w-11/12'>
                            {SimilarProducts.map((product)=>(
                            <Pitem product={product} size={"w-60"} />
                            ))}
                        </div>
                </div>
                <div className=' w-10/12 mx-auto mt-10'>
                    <h1 className='text-center text-2xl font-bold'>Reviews</h1>
                    {productDetails.reviews.map((review)=>(
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
                                <i class="fa-solid fa-ellipsis-vertical   group-hover:bg-rose-200 px-3 py-2 rounded-md translate-all ease-in duration-100 group"></i>
                                
                                <div className="absolute text-sm -bottom-7 hidden p-1 rounded-md bg-rose-50 hover:bg-rose-200 border w-24 text-center group-hover:block"> Report</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
        <Footer />
    </>
  )
}

export default Product