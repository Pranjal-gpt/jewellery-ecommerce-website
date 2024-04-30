// import express from "express"
const express = require('express');
const router = express.Router();
const categories = require('../data/demodata');
var {
    Pendants,
    Earrings,
    Mangalsutra,
    Chains,
    NosePins,
    Bangles,
    Necklace,
    Bracelets,
    FingerRings
} = categories
router.get('/', (req, res) => {
    const category = req.query.category;
    let products={};
    switch (category) {
        case "Earrings":
            products = Earrings
            break;
        case "Pendants":
            products = Pendants
            break;
        case "Mangalsutra":
            products = Mangalsutra
            break;
        case "Necklace":
            products = Necklace
            break;
        case "Chains":
            products = Chains
            break;
        case "Bangles":
            products = Bangles
            break;
        case "Finger-Rings":
            products = FingerRings
            break;
        case "Nose-Pins":
            products = NosePins
            break;
        case "Bracelets":
            products = Bracelets
            break;
        
        default:
            products=Bangles
            break;
    }
  res.json(products);
});

module.exports = router;
