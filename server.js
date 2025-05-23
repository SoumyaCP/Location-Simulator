const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/restaurant', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


const orderSchema = new mongoose.Schema({
  foodId: Number,
  quantity: Number,
});

const Order = mongoose.model('Order', orderSchema);

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'menu.html'));
});

// Endpoint to handle order submission
app.post('/api/order', (req, res) => {
  const { foodId, quantity } = req.body;

  // Create a new order and save it to MongoDB
  const newOrder = new Order({ foodId, quantity });
  newOrder.save((err, order) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json({ message: 'Order submitted successfully', order });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});