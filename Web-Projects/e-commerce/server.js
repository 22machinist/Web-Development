const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/e-commerce', { useNewUrlParser: true, useUnifiedTopology: true });

// Define schema and model
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String
});

const Product = mongoose.model('Product', productSchema);

// Routes
app.get('/api/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.get('/api/products/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});

app.post('/api/products', async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.json(newProduct);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
