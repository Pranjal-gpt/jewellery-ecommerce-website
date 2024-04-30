const mongoose = require('mongoose');

function generatePrefixedId() {
  const prefix = "1434592";
  // Generate a random number between 100000 and 999999
  const randomNum = Math.floor(Math.random() * 900000) + 100000;
  // Concatenate the prefix and random number
  return prefix + randomNum;
}

const jewelrySchema = new mongoose.Schema({
  // Use a custom function to generate prefixed IDs
  _id: { type: String, default: generatePrefixedId },
  merchant:{ type: String },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  images: { type: [String], default: ["https://i.ibb.co/tqqnQCq/jfu.png", "https://i.ibb.co/tqqnQCq/jfu.png", "https://i.ibb.co/tqqnQCq/jfu.png"] },
  stock: { type: Number, required: true },
  brand: { type: String },
  jcollection: { type: String },
  gender: { type: String },
  jewelleryType: { type: String },
  occasion: { type: String },
  platingColor: { type: String },
  metal: { type: String },
  size: { type: Number},
  gifting: {type: Boolean},
});

const Jewelry = mongoose.model('Jewelleries', jewelrySchema);

module.exports = Jewelry;
