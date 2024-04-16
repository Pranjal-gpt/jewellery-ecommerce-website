// Import required modules
const express = require('express');
const router = express.Router();
const categories = require('../data/demodata');

// Destructure categories object
const { Pendants, Earrings, Mangalsutra, Chains, NosePins, Bangles, Necklace, Bracelets, FingerRings } = categories;

// Create allProducts object
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

// Define route to get product details by ID
router.get('/:productId', (req, res) => {
    const productId = req.params.productId;
    
    // Retrieve product by ID from the allProducts object
    const product = allProducts[productId];
    
    // If product is found, send it as JSON response
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: "Product not found" });
    }
});

// Export the router
module.exports = router;
