// import express from "express"
const express = require('express');
const router = express.Router();
const categories = require('../data/demodata');
var {New,allcategories,recommended,mostGifted,collections} = categories
router.get('/', (req, res) => {
  // Send the data from demodata.js as JSON
  res.json({New,allcategories,recommended,mostGifted,collections});
});

module.exports = router;
