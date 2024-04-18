const Jewelry = require('../models/jewelleryModel');
exports.insertJewellry = async (req, res) => {
  try {
    console.log(req.body)
    // return res.json({status:"ok",infoMsg:"added Succesfully."})
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
      const merchant = req.body.merchant; // Assuming you pass the merchant ID in the request parameters
      const jewelry = await Jewelry.find({ merchant: merchant });
      res.json(jewelry);
    } catch (err) {
      console.error(err);
      res.status(500).json({ msgInfo: 'Failed to get Data.!' });
    }
  };

exports.getAllJewelleries =async (req,res)=>{
  try {
    const jewelleryItems = await Jewelry.find();
    console.log(jewelleryItems)
    res.json(jewelleryItems);
  } catch (error) {
    res.status(500).json({ infoMsg: 'Error fetching jewelry items', error: error.message });
  }
}