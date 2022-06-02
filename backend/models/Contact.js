const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    phone: { type: Number, required: true, unique: true, default: 1113772369 },
    location: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Contact', ContactSchema);
