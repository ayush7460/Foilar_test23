// require('dotenv').config(); 
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');

const signup = require('./Routes/user_auth/signup');
const login = require('./Routes/user_auth/login');
const otp = require('./Routes/user_auth/otp');
const profile = require('./Routes/user_auth/profile');

app.use('/api', signup);
app.use('/api', login);  
app.use('/api', otp);
app.use('/api', profile);

// Middleware

const mongoURI = process.env.MONGODB_URI || "mongodb+srv://ayush1777:agr11@cluster0.0128p.mongodb.net/FOILAR";

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB using Mongoose 8.2.1'))
  .catch((err) => console.error('Connection error:', err));const db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to MongoDB');
});
db.on('error', console.error.bind(console, 'MongoDB connection error:'));




app.use(express.json());
// Routes
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

