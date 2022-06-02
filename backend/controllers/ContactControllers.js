const AsyncHandler = require('../middleWares/AsyncHandler');
const ErrorHandler = require('../middleWares/ErrorHandler');
const Contact = require('../models/Contact');

// Get Contact
exports.getContact = AsyncHandler(async (req, res, next) => {
  const contact = await Contact.find();

  res.status(200).json(contact);
});

// Create Contact
exports.createContact = AsyncHandler(async (req, res, next) => {
  const { name, email, phone, location } = req.body;

  const contact = await Contact.create({ name, email, phone, location });

  res.status(201).json(contact);
});

// Update Contact
exports.updateContact = AsyncHandler(async (req, res, next) => {
  const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json(contact);
});
