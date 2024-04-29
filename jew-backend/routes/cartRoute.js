const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
router.post('/get',cartController.getCart);
router.post('/add',cartController.addToCart);
router.post('/delete',cartController.removeFromCart);

module.exports = router;
