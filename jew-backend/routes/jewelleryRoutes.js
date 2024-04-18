
const express = require('express');
const router = express.Router();
router.use(express.json())
const jewelleryController = require('../controllers/jewelleryController');

// Define user routes
router.post('/add',jewelleryController.insertJewellry);
router.post('/bymerchant',jewelleryController.getJewelryByMerchant);
router.post('/delete',jewelleryController.deleteJewellery);
router.post('/edit', jewelleryController.editJewellery); 
router.get('/all', jewelleryController.getAllJewelleries);

module.exports = router;
