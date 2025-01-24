const jwt = require('jsonwebtoken');
const authenticateUser = async (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ error: 'Authorization denied. No token provided.' });
  }

  // try {
  //   const decoded = jwt.decode(token);

  //   req.userId = decoded.userId;
  //   req.ByPhoneNumber =  decoded.mobileNumber
  //   next();
  // } catch (err) {
  //   console.error('Token verification failed:', err);
  //   res.status(401).json({ error: 'Token is not valid.' });
  // }
};

module.exports = { authenticateUser };