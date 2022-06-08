const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    phone: { type: Number, required: true, unique: true, default: 1113772369 },
    location: { type: String, required: true, unique: true },

    messages: [
      {
        name: { type: String, required: true },
        email: { type: String, required: true },
        subject: { type: String, required: true },
        message: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Contact', ContactSchema);
