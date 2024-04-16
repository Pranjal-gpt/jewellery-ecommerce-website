const express = require('express');
// import express from "express"
const cors = require('cors');
const homeRouter = require('./routes/homeRoute');
const productsRouter = require('./routes/productsRoute');
const productRouter = require('./routes/productRoute');
const cartRouter = require('./routes/cartRoute');
const wishlistRouter = require('./routes/wishlistRoute');

const app = express();

app.use(cors());
// Mount the homepage route
app.use('/api/home', homeRouter);
app.use('/api/products', productsRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/wishlist', wishlistRouter);

// Other middleware and route handling

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
