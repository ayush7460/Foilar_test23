const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');


// Middleware
app.use(express.json());

mongoose.connect('mongodb+srv://ayush1777:agr11@cluster0.0128p.mongodb.net/FOILAR', { useNewUrlParser: true,  });
const db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to MongoDB');
});
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/uploads', express.static('uploads'));

// Routes
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

