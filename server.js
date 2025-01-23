const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const { v4: uuidv4 } = require('uuid');





// const seebycustomer = require('./Routes/look_by_customer/see_by_customer')
// const connect = require('./Routes/look_by_customer/connect');

const app = express();
app.use(bodyParser.json());

app.use(cors({ origin: 'https://transaction-top.vercel.app' }));











// app.use('/api', seebycustomer);
// app.use('/api', connect);







// Connect to MongoDB mongodb+srv://ad:a1y2u3@cluster0.y0axid7.mongodb.net
// mongoose.connect('mongodb+srv://ad:a1y2u3@cluster0.y0axid7.mongodb.net/FOILAR?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('MongoDB connection successful'))
// .catch(err => {
//   console.error('MongoDB connection error:', err.message);
//   console.error('Error stack:', err.stack);
// });

// mongoose.connect('mongodb+srv://ayush1777:agr11@cluster0.0128p.mongodb.net/FOILAR',{ useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// app.use('/uploads', express.static('uploads'));


// API endpoints
// app.post('/api/addCustomer', async (req, res) => {
//   try {
//     const customer = new Customer({
//       ...req.body,
//       customerID: uuidv4(), // Assign a unique ID
//     });
//     await customer.save();
//     res.status(201).json({ message: 'Customer added successfully', customerId: customer.customerID });
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// app.post('/api/addSupplier', async (req, res) => {
//   try {
//     const supplier = new Supplier(req.body);
//     await supplier.save();
//     res.status(201).send(supplier);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// app.get('/api/customers', async (req, res) => {
//   try {
//     const customers = await Customer.find();
//     res.send(customers);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// app.get('/api/suppliers', async (req, res) => {
//   try {
//     const suppliers = await Supplier.find();
//     res.send(suppliers);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// app.get('/api/customer/:customerId', async (req, res) => {
//   const { customerId } = req.params;
//   const customer = await Customer.findById(customerId);
//   if (!customer) return res.status(404).send('Customer not found');

//   res.send(customer);
// });

// const http = require('http');
// // const socketIo = require('socket.io');
// const { Server } = require('socket.io');

// const server = http.createServer(app);
// // const io = socketIo(server);
// const io = new Server(server, {
//   cors: {
//       origin: 'http://localhost:3000', // Replace with your frontend origin
//       methods: ['GET', 'POST'],
//   },
// });
// io.on('connection', (socket) => {
//   socket.on('joinRoom', (room) => {
//     socket.join(room);
//   });

//   socket.on('leaveRoom', (room) => {
//     socket.leave(room);
//   });

//   socket.on('sendMessage', (message) => {
//     io.to(message.customerID).emit('receiveMessage', message);
//   });
// });

// Create HTTP serve
// Initialize Socket.IO


const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

