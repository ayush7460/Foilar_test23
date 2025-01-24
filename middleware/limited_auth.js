const jwt = require('jsonwebtoken');
const limited_auth = async (req, res, next) => {
  const token = req.header('limited_auth');

  if (!token) {
    return res.status(401).json({ error: 'Authorization denied. No token provided.' });
  }

  // try {
  //   const decoded = jwt.decode(token);

  //   req.userId = decoded.adderuserId;
  //   req.myphone =  decoded.myphone;
  //   req.adderPhoneNumber = decoded.adderPhoneNumber;
  //   next();
  // } catch (err) {
  //   console.error('Token verification failed:', err);
  //   res.status(401).json({ error: 'Token is not valid.' });
  // }
};

module.exports = { limited_auth };