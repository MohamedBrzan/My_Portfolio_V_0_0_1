const express = require('express');
const router = express.Router();
const {
  register,
  login,
  logout,
  logged,
  getUser,
} = require('../controllers/UserControllers');

// Register & Login

router.route('/').post(login).get(logged);

router.route('/admin').get(logged);

// Logout

router.route('/logout').get(logout);

module.exports = router;
