// Import required modules
const express = require('express');
const router = express.Router();
const categories = require('../data/demodata');
const Jewelry = require('../models/jewelleryModel');

const { Pendants, Earrings, Mangalsutra, Chains, NosePins, Bangles, Necklace, Bracelets, FingerRings } = categories;

const allProducts = {
    ...Pendants.reduce((acc, item) => ({ ...acc, [item.id]: item }), {}),
    ...Earrings.reduce((acc, item) => ({ ...acc, [item.id]: item }), {}),
    ...Mangalsutra.reduce((acc, item) => ({ ...acc, [item.id]: item }), {}),
    ...Chains.reduce((acc, item) => ({ ...acc, [item.id]: item }), {}),
    ...NosePins.reduce((acc, item) => ({ ...acc, [item.id]: item }), {}),
    ...Bangles.reduce((acc, item) => ({ ...acc, [item.id]: item }), {}),
    ...Necklace.reduce((acc, item) => ({ ...acc, [item.id]: item }), {}),
    ...Bracelets.reduce((acc, item) => ({ ...acc, [item.id]: item }), {}),
    ...FingerRings.reduce((acc, item) => ({ ...acc, [item.id]: item }), {})
};

router.get('/:productId', async(req, res) => {
    const productId = req.params.productId;
    
    const product =Jewelry.findById(productId) 
    // If product is found, send it as JSON response
    if (product) {
        res.json(product);
        console.log(product)
    } else {
        res.status(404).json({ message: "Product not found" });
    }
});

module.exports = router;
