const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// const Customer = require('./models/Customer');
// const Supplier = require('./models/Supplier');
// const { v4: uuidv4 } = require('uuid');

// const signup = require('./Routes/user_auth/signup');
// const login = require('./Routes/user_auth/login');
// const otp = require('./Routes/user_auth/otp');
// const profile = require('./Routes/user_auth/profile');


// const customer = require('./Routes/customer/customer');
// const transactions = require('./Routes/customer/transaction');
// const chat = require('./Routes/customer/chat');
// const c_detail = require('./Routes/customer/C_detail')


// const supplier = require('./Routes/supplier/supplier');
// const suppconnect = require('./Routes/supplier/supp-connect');
// const s_detail = require('./Routes/supplier/S_detail');


// const seebycustomer = require('./Routes/look_by_customer/see_by_customer')
// const connect = require('./Routes/look_by_customer/connect');


// const loanRoutes = require('./Routes/Loans/loanRoutes');
// const loanProfile = require('./Routes/Loans/loan-profile');
// const add = require('./Routes/Loans/add');


const app = express();
// app.use(bodyParser.json());
// app.use(cors());
app.use(cors({ origin: 'http://localhost:3000' }));


// app.use('/api', signup);
// app.use('/api', login);  
// app.use('/api', otp);
// app.use('/api', profile);

// app.use('/api', c_detail);
// app.use('/api', customer);
// app.use('/api', transactions);
// app.use('/api', chat);

// app.use('/api', s_detail);
// app.use('/api', supplier);
// app.use('/api', suppconnect);

// app.use('/api', seebycustomer);
// app.use('/api', connect);

// app.use('/api', add);
// app.use('/api', loanRoutes);
// app.use('/api', loanProfile);



// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true,  });
// const db = mongoose.connection;
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// app.use('/uploads', express.static('uploads'));


const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

