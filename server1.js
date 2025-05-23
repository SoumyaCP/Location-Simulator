

// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// const app = express();
// const port = 3001;

// // Connect to MongoDB (replace 'your_database_url' with your MongoDB connection string)
// mongoose.connect('mongodb://localhost:27017/menuDB', { useNewUrlParser: true, useUnifiedTopology: true });

// // Define a schema for the orders
// const orderSchema = new mongoose.Schema({
//   foodId: Number,
//   quantity: Number,
// });

// // Create a model based on the schema
// const Order = mongoose.model('Order', orderSchema);

// // Middleware to parse JSON
// app.use(bodyParser.json());

// // POST endpoint to handle order submissions
// app.post('/api/order', (req, res) => {
//   const { foodId, quantity } = req.body;

//   // Create a new order instance
//   const newOrder = new Order({
//     foodId: foodId,
//     quantity: quantity,
//   });

//   // Save the order to the database
//   newOrder.save((err) => {
//     if (err) {
//       console.error(err);
//       res.status(500).json({ message: 'Error saving order to the database' });
//     } else {
//       res.json({ message: 'Order submitted successfully' });
//     }
//   });
// });

// // GET endpoint for the menu
// app.get('/api/menu', (req, res) => {
//   // Return your menu items or perform any other logic
//   const menuItems = [
//     { id: 1, name: 'Soup', price: '$8', description: 'Delicious soup made with fresh ingredients.', url: 'soup.png' },
//     { id: 2, name: 'Fish & Chips', price: '$5', description: 'Crispy fish fillets with golden fries.', url: 'fish.jpg' },
//     { id: 3, name: 'Desserts', price: '$7', description: 'A variety of sweet treats to satisfy your cravings.', url: 'desserts.jpg' },
//     { id: 4, name: 'Beverages', price: '$3', description: 'Refreshing drinks to quench your thirst.', url: 'beverage.jpg' },
//     { id: 5, name: 'Burger', price: '$4', description: 'Juicy burger with all the fixings.', url: 'burger.jpg' },
//     { id: 6, name: 'Salad', price: '$5.5', description: 'Fresh and healthy salad options.', url: 'salad.jpg' },
//     { id: 7, name: 'Egg Parmesan', price: '$10', description: 'Savory egg dish with Parmesan cheese.', url: 'egg.jpg' },
//     { id: 8, name: 'Spring Rolls', price: '$8', description: 'Delightful spring rolls with dipping sauce.', url: 'rolls.jpg' },
//     { id: 9, name: 'Sandwich', price: '$3.5', description: 'Classic and satisfying sandwich choices.', url: 'sandwich.jpg' },
//   ];
//   res.json(menuItems);
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });






const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

mongoose.connect('mongodb://localhost:27017/restaurant', { useNewUrlParser: true, useUnifiedTopology: true });

const orderSchema = new mongoose.Schema({
  foodId: Number,
  quantity: Number,
});

const Order = mongoose.model('Order', orderSchema);

app.use(bodyParser.json());
app.use(cors());

app.post('/api/order', (req, res) => {
  const { foodId, quantity } = req.body;

  const newOrder = new Order({
    foodId: foodId,
    quantity: quantity,
  });

  newOrder.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Error saving order to the database' });
    } else {
      res.json({ message: 'Order submitted successfully' });
    }
  });
});

app.get('/api/menu', (req, res) => {
  // Retrieve menu data from the database or provide static data
  const menuData = [
    { id: 1, name: 'Soup', price: '$8', description: 'Delicious soup made with fresh ingredients.', url: 'soup.png' },
    { id: 2, name: 'Fish & Chips', price: '$5', description: 'Crispy fish fillets with golden fries.', url: 'fish.jpg' },
    { id: 3, name: 'Desserts', price: '$7', description: 'A variety of sweet treats to satisfy your cravings.', url: 'desserts.jpg' },
    { id: 4, name: 'Beverages', price: '$3', description: 'Refreshing drinks to quench your thirst.', url: 'beverage.jpg' },
    { id: 5, name: 'Burger', price: '$4', description: 'Juicy burger with all the fixings.', url: 'burger.jpg' },
    { id: 6, name: 'Salad', price: '$5.5', description: 'Fresh and healthy salad options.', url: 'salad.jpg' },
    { id: 7, name: 'Egg Parmesan', price: '$10', description: 'Savory egg dish with Parmesan cheese.', url: 'egg.jpg' },
    { id: 8, name: 'Spring Rolls', price: '$8', description: 'Delightful spring rolls with dipping sauce.', url: 'rolls.jpg' },
    { id: 9, name: 'Sandwich', price: '$3.5', description: 'Classic and satisfying sandwich choices.', url: 'sandwich.jpg' },
  ];

  res.json(menuData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
