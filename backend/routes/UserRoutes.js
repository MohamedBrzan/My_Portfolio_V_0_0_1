const express = require('express');
const router = express.Router();
const { register, login, logout } = require('../controllers/UserControllers');

// Register & Login

router.route('/').get(login).post(register);

// Logout

router.route('/logout').get(logout);

module.exports = router;
