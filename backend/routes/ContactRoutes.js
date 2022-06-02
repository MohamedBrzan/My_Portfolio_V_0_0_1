const express = require('express');
const {
  getContact,
  createContact,
  updateContact,
} = require('../controllers/ContactControllers');
const Authentication = require('../middleWares/Authentication');
const router = express.Router();

// Get Contact & Create New Contact

router.route('/').get(getContact).post(Authentication, createContact);

// Update Contact

router.route('/:id').put(Authentication, updateContact);

module.exports = router;
