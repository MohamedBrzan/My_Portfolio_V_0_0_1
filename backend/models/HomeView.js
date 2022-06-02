const mongoose = require('mongoose');

const HomeViewSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true, unique: true },
    frontendImages: [{ type: String, required: true }],
    backendImages: [{ type: String, required: true }],
  },
  { timestamps: true }
);

module.exports = mongoose.model('HomeView', HomeViewSchema);
