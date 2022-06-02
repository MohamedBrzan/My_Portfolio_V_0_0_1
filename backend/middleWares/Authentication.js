const jwt = require('jsonwebtoken');
const User = require('../models/User');
const AsyncHandler = require('../middleWares/AsyncHandler');
const ErrorHandler = require('./ErrorHandler');

const Authentication = AsyncHandler(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) return next(new ErrorHandler(404, 'No token provided'));

  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

  const user = await User.findById(decoded._id);

  if (!user) return next(new ErrorHandler(404, 'User not found'));

  next();
});

module.exports = Authentication;
