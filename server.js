// require('dotenv').config(); 
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');


// Middleware



mongoose.connect('mongodb+srv://ad:a1y2u3@cluster0.y0axid7.mongodb.net/bookstore', { useNewUrlParser: true,  });

// mongoose
//   .connect('mongodb+srv://ayush1777:agr11@cluster0.0128p.mongodb.net/FOILAR', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((err) => console.error('MongoDB connection error:', err));
// app.use('/uploads', express.static('uploads'));

app.use(express.json());
// Routes
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

