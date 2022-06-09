const User = require('../models/User');
const AsyncHandler = require('../middleWares/AsyncHandler');
const SentToken = require('../utils/SentToken');
const ErrorHandler = require('../middleWares/ErrorHandler');
const jwt = require('jsonwebtoken');

// Register
exports.register = AsyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;

  let user = await User.findOne({ email });

  if (user) return next(new ErrorHandler(400, 'User already exists'));

  user = await User.create({ name, email, password });

  return SentToken(res, user, 201);
});

// Login
exports.login = AsyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return next(new ErrorHandler(400, 'User not found'));
  }

  if (!user.comparePassword(password)) {
    return next(new ErrorHandler(401, 'Invalid password'));
  }

  return SentToken(res, user, 201);
});

// loggedIn
exports.logged = AsyncHandler(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) return res.json({ success: false });

  const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);
  const user = await User.findById(verified);
  if (verified) return res.json({ success: true, user });

  next();
});

// Get User
exports.getUser = AsyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  res.status(200).json(user);
});

// Logout
exports.logout = AsyncHandler(async (req, res, next) => {
  res.clearCookie('token');

  res.status(200).json({
    statusCode: 200,
    message: 'User logged out successfully',
  });
});
