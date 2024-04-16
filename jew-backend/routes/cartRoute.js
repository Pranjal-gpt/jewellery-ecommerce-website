const express = require('express');
const router = express.Router();
const categories = require('../data/demodata');
var {CartData} = categories
router.get('/', (req, res) => {
  // Send the data from demodata.js as JSON
  res.json(CartData);
});

module.exports = router;
