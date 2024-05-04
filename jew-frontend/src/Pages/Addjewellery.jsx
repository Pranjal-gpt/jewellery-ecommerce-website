import React, { useEffect, useState } from 'react';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';

const JewelryForm = () => {
  const [infoMsg, setinfoMsg] = useState("")
  const [images, setImages] = useState(["","",""])
  const [formData, setFormData] = useState({
    merchant:JSON.parse(atob(localStorage.getItem("token").split(".")[1])).email,
    title: '',
    description: '',
    price: 0,
    discount: 10,
    images: images,
    stock: 10,
    brand: '-',
    jcollection: '-',
    gender: 'womens',
    jewelleryType: 'Earring',
    occasion: 'any',
    platingColor: 'Gold',
    metal: 'brass',
    size: 0,
    gifting: false,
  });
  const resetForm = () => {
    setImages(["","",""]);
    setFormData({
      title: '',
      description: '',
      price: 0,
      discount: 10,
      images: ["","",""],
      stock: 10,
      brand: '-',
      jcollection: '-',
      gender: 'womens',
      jewelleryType: 'Earring',
      occasion: 'any',
      platingColor: 'Gold',
      metal: 'brass',
      size: 0,
      gifting: false,
    });
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
useEffect(()=>{
  setFormData({ ...formData, images:images });
},[images])
useEffect(()=>{
  setFormData({ ...formData, size:0 });
},[formData.jewelleryType])

  const handleSubmit = async (e) => {
    window.scrollTo(0,0);
    e.preventDefault()

    const data = new FormData();
    Object.keys(formData).forEach(key => {
      if (key !== 'images') {
        data.append(key, formData[key]);
      }
    });
    images.forEach((image, index) => {
      if (image instanceof Blob) {
      data.append('images', image, `image${index + 1}`);
      }
    });
  
    const response = await fetch('https://jewellery-ecommerce-website.vercel.app/api/jewellery/add', {
      method: 'POST',
      body: data,
    });


		const rdata = await response.json()

		if (rdata.status === 'ok') {
         setinfoMsg(rdata.infoMsg)
         resetForm()
		}else{
            setinfoMsg(rdata.infoMsg)
        }
        setInterval(() => {
          setinfoMsg("")
        }, 5000);
  };

  return (
    <div className="">
          <Nav />
      <form onSubmit={handleSubmit} className="space-y-4 w-1/2 mx-auto mt-5 bg-orange-50 p-5 rounded-lg" >
        <h1 className='text-xl font-semibold text-center'>Add Jewellery</h1>
        {infoMsg!=""&&<div className='p-2 bg-orange-100 rounded text-center mx-auto'>{infoMsg}</div>}

        <div>
          <label htmlFor="title" className="block">Title:</label>
          <input required type="text" id="title" name="title" value={formData.title} onChange={handleChange} className="w-full border border-orange-100 focus:outline-orange-200 rounded-md px-3 py-2" />
        </div>

        <div className='flex'>
          <div className='flex flex-col items-center justify-between'>
            <img src="https://i.ibb.co/tqqnQCq/jfu.png" id="imagePreview1"  width={200} className='bg-orange-100' alt="" />
            <label htmlFor="image1" className="block">Image1:</label>
            <input required type="file" id="image1" name="image1"  className="w-full border border-orange-100 focus:outline-orange-200 rounded-md px-3 py-2"
            onChange={(e)=>{
              setImages([e.target.files[0], images[1], images[2]])
              var input = e.target;
              var reader = new FileReader();
              reader.onload = function(){
                  var dataURL = reader.result;
                  var imagePreview = document.getElementById('imagePreview1');
                  imagePreview.src = dataURL;
                  // imagePreview.style.opacity="1";
              };
              reader.readAsDataURL(input.files[0]);
            } }
            />
          </div>
          <div className='flex flex-col items-center justify-between'>
            <img src="https://i.ibb.co/tqqnQCq/jfu.png" id="imagePreview2" width={200} className='bg-orange-100' alt="" />
            <label htmlFor="image2" className="block">Image2:</label>
            <input  type="file" id="image2" name="image2"  className="w-full border border-orange-100 focus:outline-orange-200 rounded-md px-3 py-2"
            onChange={(e)=>{
              setImages([images[0], e.target.files[0], images[2]])
              var input = e.target;
              var reader = new FileReader();
              reader.onload = function(){
                  var dataURL = reader.result;
                  var imagePreview = document.getElementById('imagePreview2');
                  imagePreview.src = dataURL;
                  // imagePreview.style.opacity="1";
              };
              reader.readAsDataURL(input.files[0]);
            }} />
          </div>
          <div className='flex flex-col items-center justify-between'>
            <img src="https://i.ibb.co/tqqnQCq/jfu.png" id="imagePreview3" width={200} className='bg-orange-100' alt="" />
            <label htmlFor="image3" className="block">Image3:</label>
            <input  type="file" id="image3" name="image3"  className="w-full border border-orange-100 focus:outline-orange-200 rounded-md px-3 py-2"
            onChange={(e)=>{
              setImages([images[0], images[1], e.target.files[0]])
              var input = e.target;
              var reader = new FileReader();
              reader.onload = function(){
                  var dataURL = reader.result;
                  var imagePreview = document.getElementById('imagePreview3');
                  imagePreview.src = dataURL;
                  // imagePreview.style.opacity="1";
              };
              reader.readAsDataURL(input.files[0]);
            }} />
          </div>
        </div>

        <div>
          <label htmlFor="description" className="block">Description:</label>
          <textarea required id="description" name="description" rows={3} value={formData.description} onChange={handleChange} className="w-full border border-orange-100 focus:outline-orange-200 rounded-md px-3 py-2" />
        </div>

        <div className='flex justify-evenly flex-wrap'>

          <div className=''>
            <label htmlFor="discount" className="block">Discount:</label>
            <input type="number" id="discount" name="discount" value={formData.discount} max={80} onChange={handleChange} className="w-20 border border-orange-100 focus:outline-orange-200 rounded-md px-3 py-2" />
          </div>
          
          <div>
            <label htmlFor="price" className="block">Price:</label>
            <input required type="number" id="price" name="price" value={formData.price} onChange={handleChange} className=" border border-orange-100 focus:outline-orange-200 rounded-md px-3 py-2" />
          </div>
          <div className=''>
            <label htmlFor="stock" className="block">Quantity</label>
            <input required type="number" id="stock" name="stock" value={formData.stock} max={100} onChange={handleChange} className="w-20 border border-orange-100 focus:outline-orange-200 rounded-md px-3 py-2" />
          </div>
        </div>

        <div className='flex justify-evenly flex-wrap'>
          <div>
            <label htmlFor="brand" className="block">Brand Name</label>
            <input type="text" id="brand" name="brand" value={formData.brand} onChange={handleChange} className="w-36 border border-orange-100 focus:outline-orange-200 rounded-md px-3 py-2" />
          </div>

          <div className='flex items-center gap-2 relative top-2'>
            <input type="checkbox" id="gifting" name="gifting" checked={formData.gifting} onChange={(e)=>setFormData({ ...formData, gifting: e.target.checked })} className=" border border-orange-100 focus:outline-orange-200 rounded-md px-3 py-2" />
            <label htmlFor="gifting" className="block">Gifting</label>
          </div>

          <div className=''>
            <label htmlFor="jcollection" className="block">Collection</label>
            <select name="jcollection" id="jcollection" value={formData.jcollection} onChange={handleChange} className=" border border-orange-100 focus:outline-orange-200 rounded-md px-3 py-2">
              <option value="-">-</option>
              <option value="best sellers">Best Sellers</option>
              <option value="most gifted">Most Gifted</option>
              <option value="Joy Of Dressing">Joy Of Dressing</option>
              <option value="Pretty in Pink">Pretty in Pink</option>
              <option value="String IT">String IT</option>
            </select>
          </div>
          
        </div>

        <div className='flex justify-around flex-wrap'>
          <div className=''>
            <label htmlFor="gender" className="block">Gender</label>
            <select name="gender" id="gender" value={formData.gender} onChange={handleChange} className=" border border-orange-100 focus:outline-orange-200 rounded-md px-3 py-2">
              <option value="any">any</option>
              <option value="womens">Womens</option>
              <option value="mens">Mens</option>
              <option value="kids">Kids</option>
            </select>
          </div>
          <div>
            <label htmlFor="jewelleryType" className="block">Jewellery Type</label>
            <select id="jewelleryType" name="jewelleryType" value={formData.jewelleryType} onChange={handleChange} className=" border border-orange-100 focus:outline-orange-200 rounded-md px-3 py-2" >
              <option value="Earring">Earring</option>
              <option value="Ring">Ring</option>
              <option value="Necklace">Necklace</option>
              <option value="Mangalsutra">Mangalsutra</option>
              <option value="Pendants">Pendants</option>
              <option value="Bracelets">Bracelets</option>
              <option value="Chains">Chains</option>
              <option value="Bangles">Bangles</option>
              <option value="Nose-Pins">Nose-Pins</option>
            </select>
          </div>

          <div className=''>
            <label htmlFor="occasion" className="block">Occasion</label>
            <select name="occasion" id="occasion" value={formData.occasion} onChange={handleChange} className=" border border-orange-100 focus:outline-orange-200 rounded-md px-3 py-2">
              <option value="any">Any</option>
              <option value="wedding">Wedding</option>
              <option value="party">Party</option>
              <option value="office wear">Office Wear</option>
            </select>
          </div>
          
        </div>
        
        <div className='flex justify-evenly flex-wrap'>
          <div>
            <label htmlFor="metal" className="block">Metal</label>
            <select  id="metal" name="metal" value={formData.metal} onChange={handleChange} className="w-fit border border-orange-100 focus:outline-orange-200 rounded-md px-3 py-2" >
              <option value="brass">Brass</option>
              <option value="copper">Copper</option>
              <option value="nickel">nickel</option>
              <option value="blackmetal">blackmetal</option>
            </select>
          </div>
          {formData.jewelleryType === "Bangles" && 
          
          <div>
            <label htmlFor="size" className="block">Size</label>
            <select  id="size" name="size" value={formData.size} onChange={handleChange} className="w-fit border border-orange-100 focus:outline-orange-200 rounded-md px-3 py-2" >
              <option value="0">-</option>
              <option value="2.2">2.2</option>
              <option value="2.4">2.4</option>
              <option value="2.6">2.6</option>
              <option value="2.8">2.8</option>
            </select>
          </div>
          }

          <div className=''>
            <label htmlFor="platingColor" className="block">Plating Color</label>
            <select  name="platingColor" id="platingColor" value={formData.platingColor} onChange={handleChange} className="w-40 border border-orange-100 focus:outline-orange-200 rounded-md px-3 py-2" >
              <option value="Gold">Gold</option>
              <option value="Sliver-Plated">Sliver-Plated</option>
              <option value="Black-Plated">Black-Plated</option>
            </select>
          </div>
          
        </div>
 
        <div>
          <button type="submit" className="mx-auto block bg-orange-300 text-white px-4 py-2 rounded-md hover:bg-orange-500">Add Jewelry</button>
        </div>
      </form>
    <Footer />

    </div>
    
  );
};

export default JewelryForm;
