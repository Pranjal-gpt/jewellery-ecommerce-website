import React, { useState } from 'react';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';

const JewelryForm = () => {
  const [infoMsg, setinfoMsg] = useState("")
  const [formData, setFormData] = useState({
    merchant:JSON.parse(atob(localStorage.getItem("token").split(".")[1])).email,
    title: '',
    description: '',
    price: 14320,
    discount: 10,
    gemstone: '-',
    // images: [],
    stock: 10,
    brand: '-',
    jcollection: '-',
    gender: 'womens',
    jewelleryType: '-',
    occasion: 'any',
    community: 'all',
    materialColour: '-',
    metal: '-',
    height: '-',
    width: '-',
    noOfDiamonds: 0,
    diamondClarity: '-',
    diamondColor: '-',
    diamondSetting: '-',
    diamondShape: '-',
    karatage: '-',
  });
  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      price: 14320,
      discount: 10,
      gemstone: '-',
      // images: [],
      stock: 10,
      brand: '-',
      jcollection: '-',
      gender: 'womens',
      jewelleryType: '-',
      occasion: 'any',
      community: 'all',
      materialColour: '-',
      metal: '-',
      height: '-',
      width: '-',
      noOfDiamonds: 0,
      diamondClarity: '-',
      diamondColor: '-',
      diamondSetting: '-',
      diamondShape: '-',
      karatage: '-',
    });
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

		const response = await fetch('http://localhost:3000/api/jewellery/add', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		})


		const data = await response.json()

		if (data.status === 'ok') {
         setinfoMsg(data.infoMsg)
        //  resetForm()
		}else{
            setinfoMsg(data.infoMsg)
        }
  };

  return (
    <div className="">
          <Nav />

      <form onSubmit={handleSubmit} className="space-y-4 w-1/3 mx-auto mt-5 bg-red-50 p-5 rounded-lg">
        <h1 className='text-xl font-semibold text-center'>Add Jewellery</h1>
        <div className='p-2 bg-rose-100 rounded text-center mx-auto'>{infoMsg}</div>

        <div>
          <label htmlFor="title" className="block">Title:</label>
          <input required type="text" id="title" name="title" value={formData.title} onChange={handleChange} className="w-full border border-rose-100 focus:outline-rose-200 rounded-md px-3 py-2" />
        </div>

        <div>
          <label htmlFor="description" className="block">Description:</label>
          <textarea required id="description" name="description" rows={3} value={formData.description} onChange={handleChange} className="w-full border border-rose-100 focus:outline-rose-200 rounded-md px-3 py-2" />
        </div>

        <div className='flex justify-between flex-wrap'>
          <div>
            <label htmlFor="price" className="block">Price:</label>
            <input required type="number" id="price" name="price" value={formData.price} onChange={handleChange} className=" border border-rose-100 focus:outline-rose-200 rounded-md px-3 py-2" />
          </div>

          <div className=''>
            <label htmlFor="discount" className="block">Discount:</label>
            <input type="number" id="discount" name="discount" value={formData.discount} max={80} onChange={handleChange} className="w-20 border border-rose-100 focus:outline-rose-200 rounded-md px-3 py-2" />
          </div>
          
          <div className=''>
            <label htmlFor="stock" className="block">Quantity</label>
            <input required type="number" id="stock" name="stock" value={formData.stock} max={100} onChange={handleChange} className="w-20 border border-rose-100 focus:outline-rose-200 rounded-md px-3 py-2" />
          </div>
        </div>

        <div className='flex justify-between flex-wrap'>
          <div>
            <label htmlFor="brand" className="block">Brand Name</label>
            <input type="text" id="brand" name="brand" value={formData.brand} onChange={handleChange} className=" border border-rose-100 focus:outline-rose-200 rounded-md px-3 py-2" />
          </div>

          <div className=''>
            <label htmlFor="jcollection" className="block">Collection</label>
            <select name="jcollection" id="jcollection" value={formData.jcollection} onChange={handleChange} className=" border border-rose-100 focus:outline-rose-200 rounded-md px-3 py-2">
              <option value="-">-</option>
              <option value="best sellers">Best Sellers</option>
              <option value="most gifted">Most Gifted</option>
              <option value="Joy Of Dressing">Joy Of Dressing</option>
              <option value="Pretty in Pink">Pretty in Pink</option>
              <option value="String IT">String IT</option>
            </select>
          </div>
          
          <div className=''>
            <label htmlFor="gender" className="block">Gender</label>
            <select name="gender" id="gender" value={formData.gender} onChange={handleChange} className=" border border-rose-100 focus:outline-rose-200 rounded-md px-3 py-2">
              <option value="any">any</option>
              <option value="womens">Womens</option>
              <option value="mens">Mens</option>
              <option value="kids">Kids</option>
            </select>
          </div>
        </div>

        <div className='flex justify-between flex-wrap'>
          <div>
            <label htmlFor="jewelleryType" className="block">Jewellery Type</label>
            <input type="text" id="jewelleryType" name="jewelleryType" value={formData.jewelleryType} onChange={handleChange} className=" border border-rose-100 focus:outline-rose-200 rounded-md px-3 py-2" />
          </div>

          <div className=''>
            <label htmlFor="occasion" className="block">Occasion</label>
            <select name="occasion" id="occasion" value={formData.occasion} onChange={handleChange} className=" border border-rose-100 focus:outline-rose-200 rounded-md px-3 py-2">
              <option value="any">Any</option>
              <option value="wedding">Wedding</option>
              <option value="party">Party</option>
              <option value="office wear">Office Wear</option>
            </select>
          </div>
          
          <div className=''>
            <label htmlFor="community" className="block">Community</label>
            <select name="community" id="community" value={formData.community} onChange={handleChange} className=" border border-rose-100 focus:outline-rose-200 rounded-md px-3 py-2">
              <option value="all">All</option>
              <option value="gujrati">gujrati</option>
              <option value="marathi">marathi</option>
            </select>
          </div>
        </div>
        
        <div className='flex justify-between flex-wrap'>
          <div>
            <label htmlFor="metal" className="block">Metal</label>
            <input type="text" id="metal" name="metal" value={formData.metal} onChange={handleChange} className="w-24 border border-rose-100 focus:outline-rose-200 rounded-md px-3 py-2" />
          </div>

          <div className=''>
            <label htmlFor="materialColour" className="block">material Color</label>
            <input type="text"  name="materialColour" id="materialColour" value={formData.materialColour} onChange={handleChange} className="w-40 border border-rose-100 focus:outline-rose-200 rounded-md px-3 py-2" />
          </div>
          
          <div className=''>
            <label htmlFor="height" className="block">Height(mm)</label>
            <input type="number"  name="height" id="height" value={formData.height} onChange={handleChange} className="w-20 border border-rose-100 focus:outline-rose-200 rounded-md px-3 py-2" />
          </div>
          
          <div className=''>
            <label htmlFor="width" className="block">Width(mm)</label>
            <input type="number"  name="width" id="width" value={formData.width} onChange={handleChange} className="w-20 border border-rose-100 focus:outline-rose-200 rounded-md px-3 py-2" />
          </div>
        </div>
        
        <fieldset className='border border-rose-50 p-5 rounded-md flex flex-wrap justify-between'>
          <legend className='font-semibold'>Diamond Details</legend>

          <div>
            <label htmlFor="noOfDiamonds" className="block ">Diamonds</label>
            <input type="number" id="noOfDiamonds" name="noOfDiamonds" value={formData.noOfDiamonds} onChange={handleChange} className="w-20 border border-rose-100 focus:outline-rose-200 rounded-md px-3 py-2" />
          </div>

          <div className=''>
            <label htmlFor="karatage" className="block">Karatage</label>
            <select type="number"  name="karatage" id="karatage" value={formData.karatage} onChange={handleChange} className="w-20 border border-rose-100 focus:outline-rose-200 rounded-md px-3 py-2" >
              <option value="-">-</option>
              <option value="18">18</option>
              <option value="22">22</option>
              <option value="24">24</option>
            </select>
          </div>

          <div className=''>
            <label htmlFor="diamondClarity" className="block">Clarity</label>
            <input type="text"  name="diamondClarity" id="diamondClarity" value={formData.diamondClarity} onChange={handleChange} className="w-20 border border-rose-100 focus:outline-rose-200 rounded-md px-3 py-2" />
          </div>
          
          <div className=''>
            <label htmlFor="diamondColor" className="block">Color</label>
            <input type="text"  name="diamondColor" id="diamondColor" value={formData.diamondColor} onChange={handleChange} className="w-28 border border-rose-100 focus:outline-rose-200 rounded-md px-3 py-2" />
          </div>
          
          <div className=''>
            <label htmlFor="diamondSetting" className="block">D.setting</label>
            <input type="text"  name="diamondSetting" id="diamondSetting" value={formData.diamondSetting} onChange={handleChange} className="w-28 border border-rose-100 focus:outline-rose-200 rounded-md px-3 py-2" />
          </div>
          <div className=''>
            <label htmlFor="diamondShape" className="block">shape</label>
            <input type="text"  name="diamondShape" id="diamondShape" value={formData.diamondShape} onChange={handleChange} className="w-28 border border-rose-100 focus:outline-rose-200 rounded-md px-3 py-2" />
          </div>
        </fieldset>
        
        <div>
          <button type="submit" className="mx-auto block bg-rose-300 text-white px-4 py-2 rounded-md hover:bg-rose-500">Add Jewelry</button>
        </div>
      </form>
    <Footer />

    </div>
    
  );
};

export default JewelryForm;
