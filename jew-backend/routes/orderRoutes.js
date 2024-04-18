
const express = require('express');
const router = express.Router();
router.use(express.json())
const jewelleryController = require('../controllers/jewelleryController');

// Define user routes
router.post('/place',jewelleryController.insertJewellry);
router.post('/allorders',jewelleryController.getJewelryByMerchant);
router.post('/edit', jewelleryController.editJewellery); 

module.exports = router;
