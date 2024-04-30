
const express = require('express');
const router = express.Router();
router.use(express.json())
const orderController = require('../controllers/orderController');

// Define user routes
router.post('/place',orderController.createOrder);
router.delete('/delete',orderController.deleteOrder);
router.post('/allorders',orderController.getByUser);
router.post('/bymerchant',orderController.getByMerchant);
router.put('/status',orderController.updateStatus);

module.exports = router;
