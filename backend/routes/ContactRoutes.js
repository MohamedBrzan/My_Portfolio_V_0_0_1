const express = require('express');
const {
  getContact,
  createContact,
  updateContact,
  getContactById,
  createMessage,
} = require('../controllers/ContactControllers');
const Authentication = require('../middleWares/Authentication');
const router = express.Router();

// Get Contact & Create New Contact

router.route('/').get(getContact).post(createContact);

// Update Contact

router.route('/:id').get(getContactById).post(createMessage).put(updateContact);

module.exports = router;
