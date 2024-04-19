
const express = require('express');
const router = express.Router();
router.use(express.json())
const orderController = require('../controllers/orderController');

// Define user routes
router.post('/place',orderController.createOrder);
router.post('/allorders',orderController.getByUser);
// router.post('/edit', jewelleryController.editJewellery); 

module.exports = router;
