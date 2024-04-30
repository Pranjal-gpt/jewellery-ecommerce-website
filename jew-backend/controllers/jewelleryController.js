const Jewelry = require('../models/jewelleryModel');
exports.insertJewellry = async (req, res) => {
  try {
    console.log(req.body)
    const newJewelry = new Jewelry(req.body);
    const savedJewelry = await newJewelry.save();
    console.log(savedJewelry)
    res.status(201).json({infoMsg:"Added Succesfully",status:"ok"});
  } catch (error) {
    res.status(500).json({ infoMsg: error.message });
  }
};
exports.deleteJewellery = async (req,res) =>{
    console.log("deleted ",res.body)
}
exports.editJewellery = async (req,res) =>{
    console.log("edit  ",res.body)
}
exports.getJewelryByMerchant = async (req, res) => {
    try {
      const merchant = req.body.merchant; 
      const jewelry = await Jewelry.find({ merchant: merchant });
      res.json(jewelry);
    } catch (err) {
      console.error(err);
      res.status(500).json({ msgInfo: 'Failed to get Data.!' });
    }
  };

  exports.getJewelleryById = async (req,res)=>{
    const { id } = req.params;

  try {
    const jewelryItem = await Jewelry.findById(id);
    if (!jewelryItem) {
      return res.status(404).json({ message: 'Jewelry item not found' });
    }
    res.json(jewelryItem);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching jewelry item', error: error.message });
  }

}
  exports.getAllJewelleries =async (req,res)=>{
    try {
      // Destructure the filter parameters from the request query
      const { shuffle,max,category, search, priceMin, priceMax, gender, jcollection, occasion, metal, metalColor,gifting } = req.query;
  
      const filter = {};
      if (category && category != 'all') {
        // filter.jewelleryType = category;
        const regex = new RegExp(`^${category}`);
        filter.jewelleryType = { $regex: regex };
      }
      console.log(filter)
      if (search && search != '') {
        filter.title ={ $regex: search, $options: 'i' } 
      }

      if (priceMin && priceMax) {
        filter.price = { $gte: parseInt(priceMin), $lte: parseInt(priceMax) };
      }
  
      if (gender && gender !== 'any') {
        filter.gender = gender;
      }
  
      if (jcollection && jcollection !== 'any') {
        filter.jcollection = jcollection;
      }
  
      if (occasion && occasion !== 'any') {
        filter.occasion = occasion;
      }
  
      if (metal && metal !== 'any') {
        filter.metal = metal;
      }
  
      if (metalColor && metalColor !== 'any') {
        filter.platingColor = metalColor;
      }

      if (gifting) {
        filter.gifting=true;
      }
  
      // Retrieve the filtered jewelleries from the database
      const filteredJewelleries = await Jewelry.find(filter);

      if(max!=undefined){
        if(shuffle){
          const randomizedJewelleries = filteredJewelleries.sort(() => Math.random() - 0.5);
          res.json(randomizedJewelleries.slice(0,max));
        }else{
          res.json(filteredJewelleries.slice(0,max));
        }
      }
      else{
        if(shuffle){
          const randomizedJewelleries = filteredJewelleries.sort(() => Math.random() - 0.5);
          res.json(randomizedJewelleries);
        }else{
          res.json(filteredJewelleries);
        }
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch filtered jewelleries', message: error.message });
    }
    }