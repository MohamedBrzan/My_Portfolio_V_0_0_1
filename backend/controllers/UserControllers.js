const User = require('../models/User');
const AsyncHandler = require('../middleWares/AsyncHandler');
const SentToken = require('../utils/SentToken');
const ErrorHandler = require('../middleWares/ErrorHandler');

// Register
exports.register = AsyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;

  let user = await User.findOne({ email });

  if (user) return next(new ErrorHandler(400, 'User already exists'));

  user = await User.create({ name, email, password });

  SentToken(res, user, 201);
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
  SentToken(res, user, 201);
});

// Get User
exports.getUser = AsyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);

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
