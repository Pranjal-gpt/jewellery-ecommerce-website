const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const homeRouter = require('./routes/homeRoute');
const productsRouter = require('./routes/productsRoute');
const productRouter = require('./routes/productRoute');
const cartRouter = require('./routes/cartRoute');
const wishlistRouter = require('./routes/wishlistRoute');
const userRoutes = require('./routes/userRoutes');
const jewelleryRoutes = require('./routes/jewelleryRoutes');
const orderRoutes = require('./routes/orderRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

dotenv.config({path:"./config/config.env"})
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Other middleware and route handling
app.use(cors());
connectionString = "mongodb://127.0.0.1:27017/jew"
mongoose.connect(connectionString).then(() => {
    console.log('Connected to MongoDB');
  }).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

//routes
app.use('/api/home', homeRouter);
app.use('/api/products', productsRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/wishlist', wishlistRouter);
app.use('/api/user', userRoutes);
app.use('/api/jewellery', jewelleryRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/payment', paymentRoutes);


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
