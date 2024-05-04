const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const homeRouter = require('./routes/homeRoute');
const productsRouter = require('./routes/productsRoute');
const productRouter = require('./routes/productRoute');
const cartRoute = require('./routes/cartRoute');
const wishlistRouter = require('./routes/wishlistRoute');
const userRoutes = require('./routes/userRoutes');
const jewelleryRoutes = require('./routes/jewelleryRoutes');
const orderRoutes = require('./routes/orderRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

dotenv.config({path:"./config/config.env"})
const app = express();
// Other middleware and route handling

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
const connectionString = "mongodb+srv://pkp22:2qHecDYGg8uG7D2X@pkp.utkz9dm.mongodb.net/elegance?retryWrites=true&w=majority&appName=pkp";
mongoose.connect(connectionString).then(() => {
    console.log('Connected to MongoDB');
  }).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
  app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
//routes

app.use('/api/home', homeRouter);
app.use('/api/products', productsRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRoute);
app.use('/api/wishlist', wishlistRouter);
app.use('/api/user', userRoutes);
app.use('/api/jewellery', jewelleryRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/payment', paymentRoutes);


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
module.exports = app;